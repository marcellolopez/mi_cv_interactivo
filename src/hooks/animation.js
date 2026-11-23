import { useCallback, useEffect, useRef, useState } from 'react';

const reducedQuery = '(prefers-reduced-motion: reduce)';

// Respeta la preferencia del sistema "reducir movimiento".
export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(reducedQuery).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(reducedQuery);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

// Avanza de 0 a 1 durante `duration` ms en saltos fijos (look retro y
// pocas renderizaciones, para que vaya fluido incluso en móviles modestos).
export const useAnimationProgress = (duration = 1500, stepMs = 60) => {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(reduced ? 1 : 0);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return undefined;
    }
    const steps = Math.max(1, Math.round(duration / stepMs));
    let step = 0;
    setProgress(0);
    const id = setInterval(() => {
      step += 1;
      setProgress(Math.min(1, step / steps));
      if (step >= steps) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
  }, [duration, stepMs, reduced]);

  return progress;
};

// Efecto máquina de escribir; `skip` muestra todo el texto de inmediato.
export const useTypewriter = (text, speed = 28) => {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return undefined;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => Math.min(c + 1, text.length));
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduced]);

  const skip = useCallback(() => setCount(text.length), [text]);

  return { shown: text.slice(0, count), done: count >= text.length, skip };
};

// Navegación tipo menú de juego con flechas entre los enlaces/botones de un contenedor.
export const useArrowNav = (onMove) => {
  const ref = useRef(null);

  const onKeyDown = useCallback(
    (event) => {
      const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
      if (!dir || !ref.current) return;
      const items = [...ref.current.querySelectorAll('a[href], button:not([disabled])')];
      if (items.length === 0) return;
      const index = items.indexOf(document.activeElement);
      const next =
        index === -1
          ? items[dir > 0 ? 0 : items.length - 1]
          : items[(index + dir + items.length) % items.length];
      event.preventDefault();
      next.focus();
      onMove?.();
    },
    [onMove],
  );

  return { ref, onKeyDown };
};

// Scroll "a saltos", como si la pantalla corriera a pocos fotogramas por segundo
// (igual que las transiciones con steps()). Solo intercepta la rueda del mouse
// o el touchpad; el scroll táctil, el teclado y la barra siguen siendo nativos.
export const useSteppedScroll = (ref, fps = 12) => {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return undefined;

    let target = null;
    let timer = null;

    const stop = () => {
      clearInterval(timer);
      timer = null;
      target = null;
    };

    const tick = () => {
      const max = el.scrollHeight - el.clientHeight;
      target = Math.max(0, Math.min(max, target));
      const diff = target - el.scrollTop;
      if (Math.abs(diff) < 1) {
        stop();
        return;
      }
      // Cada fotograma avanza casi la mitad de lo que falta, en saltos visibles.
      const step = Math.sign(diff) * Math.max(8, Math.ceil(Math.abs(diff) * 0.45));
      el.scrollTop += Math.abs(step) > Math.abs(diff) ? diff : step;
    };

    const onWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? el.clientHeight : 1;
      const base = target ?? el.scrollTop;
      const next = Math.max(0, Math.min(max, base + event.deltaY * unit));
      if (next === base) return;
      event.preventDefault();
      target = next;
      if (!timer) {
        tick();
        timer = setInterval(tick, 1000 / fps);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearInterval(timer);
    };
  }, [ref, fps, reduced]);
};
