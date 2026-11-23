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
// (igual que las transiciones con steps()). Se usa con la rueda del mouse o el
// touchpad y con las flechas del teclado (vía scrollBy). El scroll táctil y la
// barra siguen siendo nativos.
export const useSteppedScroll = (ref, fps = 12) => {
  const reduced = usePrefersReducedMotion();
  const state = useRef({ target: null, timer: null });

  const tick = useCallback(() => {
    const el = ref.current;
    const st = state.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    st.target = Math.max(0, Math.min(max, st.target));
    const diff = st.target - el.scrollTop;
    if (Math.abs(diff) < 1) {
      clearInterval(st.timer);
      st.timer = null;
      st.target = null;
      return;
    }
    // Cada fotograma avanza casi la mitad de lo que falta, en saltos visibles.
    const step = Math.sign(diff) * Math.max(8, Math.ceil(Math.abs(diff) * 0.45));
    el.scrollTop += Math.abs(step) > Math.abs(diff) ? diff : step;
  }, [ref]);

  // Desplaza `delta` píxeles. Devuelve false si ya no hay hacia dónde moverse.
  const scrollBy = useCallback(
    (delta) => {
      const el = ref.current;
      const st = state.current;
      if (!el) return false;
      const max = el.scrollHeight - el.clientHeight;
      const base = st.target ?? el.scrollTop;
      const next = Math.max(0, Math.min(max, base + delta));
      if (Math.abs(next - base) < 1) return false;
      if (reduced) {
        el.scrollTop = next;
        return true;
      }
      st.target = next;
      if (!st.timer) {
        tick();
        st.timer = setInterval(tick, 1000 / fps);
      }
      return true;
    },
    [ref, reduced, tick, fps],
  );

  useEffect(() => {
    const el = ref.current;
    const st = state.current;
    if (!el || reduced) return undefined;
    const onWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? el.clientHeight : 1;
      if (scrollBy(event.deltaY * unit)) event.preventDefault();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearInterval(st.timer);
      st.timer = null;
      st.target = null;
    };
  }, [ref, reduced, scrollBy]);

  return scrollBy;
};

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
const KEY_DIR = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

// Flechas como en un juego en cualquier pantalla: mueven el cursor (foco) al
// botón o enlace siguiente/anterior. Si ese botón todavía no se ve, primero
// desplazan el contenido a saltos hasta mostrarlo; si no hay más botones en esa
// dirección, simplemente desplazan. Los componentes que ya usan las flechas
// (menú, mapa de Experiencia) llaman a preventDefault y tienen prioridad.
export const useArrowKeys = (rootRef, bodyRef, scrollBy, onMove) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      const dir = KEY_DIR[event.key];
      const root = rootRef.current;
      const body = bodyRef.current;
      if (!dir || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || !root) return;
      const active = document.activeElement;
      if (active?.matches('input, select, textarea')) return;

      const items = [...root.querySelectorAll(FOCUSABLE)].filter(
        (el) =>
          el.getAttribute('tabindex') !== '-1' &&
          !el.closest('.hud, [aria-hidden="true"]') &&
          el.offsetParent !== null,
      );
      const inside = root.contains(active) && active !== root;
      const after = (el) => active.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING;
      let next;
      if (items.includes(active)) {
        next = items[items.indexOf(active) + dir];
      } else if (inside) {
        next = dir > 0 ? items.find((el) => after(el)) : [...items].reverse().find((el) => !after(el));
      } else {
        next = dir > 0 ? items[0] : items[items.length - 1];
      }

      const vertical = event.key === 'ArrowDown' || event.key === 'ArrowUp';
      const stepPx = body ? Math.round(body.clientHeight * 0.35) : 0;

      // El botón Volver está fuera del área con scroll: antes de saltar a él,
      // termina de recorrer el contenido.
      if (next && body && !body.contains(next) && vertical && dir > 0 && scrollBy(stepPx)) {
        event.preventDefault();
        return;
      }

      if (next && body?.contains(next)) {
        const view = body.getBoundingClientRect();
        const rect = next.getBoundingClientRect();
        const margin = 12;
        if (rect.top < view.top + margin) {
          event.preventDefault();
          const need = rect.top - view.top - margin;
          if (-need > stepPx && vertical) {
            scrollBy(-stepPx);
            return;
          }
          scrollBy(need);
        } else if (rect.bottom > view.bottom - margin) {
          event.preventDefault();
          const need = rect.bottom - view.bottom + margin;
          if (need > stepPx && vertical) {
            scrollBy(stepPx);
            return;
          }
          scrollBy(need);
        }
      }

      if (next) {
        event.preventDefault();
        next.focus({ preventScroll: true });
        onMove?.();
        return;
      }
      if (vertical && body && scrollBy(dir * stepPx)) event.preventDefault();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [rootRef, bodyRef, scrollBy, onMove]);
};
