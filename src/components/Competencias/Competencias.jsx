import React, { useEffect } from 'react';
import { useSound } from '../Sounds/Sounds';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { useAnimationProgress, usePrefersReducedMotion } from '../../hooks/animation';
import { competencias, fortalezas } from '../../data/cv';

// Cada categoría "carga" su barra en BAR_MS y arranca STAGGER_MS después de la anterior.
const BAR_MS = 1000;
const STAGGER_MS = 450;
const TOTAL_MS = BAR_MS + STAGGER_MS * competencias.length;

const clamp01 = (n) => Math.min(1, Math.max(0, n));

const Competencias = () => {
  useVisit('habilidades');
  const { playSound } = useSound();
  const reduced = usePrefersReducedMotion();
  const progress = useAnimationProgress(TOTAL_MS);
  const elapsed = progress * TOTAL_MS;

  // Sonido de carga al empezar cada barra.
  useEffect(() => {
    if (reduced) {
      playSound('progress', 0.2);
      return undefined;
    }
    const timers = competencias.map((_, i) =>
      setTimeout(() => playSound('progress', 0.18), i * STAGGER_MS),
    );
    timers.push(setTimeout(() => playSound('pickUpCoin', 0.3), TOTAL_MS));
    return () => timers.forEach(clearTimeout);
  }, [playSound, reduced]);

  const strengthsShown = elapsed >= TOTAL_MS - BAR_MS / 2;

  return (
    <Screen title="Habilidades">
      <p className="screen-intro">
        {progress >= 1 ? '¡Inventario completo!' : 'Cargando inventario de herramientas...'}
      </p>

      <div className="inventory">
        {competencias.map((grupo, i) => {
          const t = clamp01((elapsed - i * STAGGER_MS) / BAR_MS);
          const visible = t >= 1 ? grupo.items.length : Math.floor(t * grupo.items.length);
          const percent = Math.round(t * 100);
          return (
            <section
              key={grupo.categoria}
              className={`nes-container is-dark with-title inventory-slot ${grupo.color}`}
              style={{ '--i': i }}
            >
              <h2 className="title">{grupo.categoria}</h2>
              <div className="load-head" aria-hidden="true">
                <span>{t >= 1 ? '¡Cargado!' : 'Cargando...'}</span>
                <span className="load-count">
                  {visible}/{grupo.items.length}
                </span>
              </div>
              <progress
                className={`nes-progress ${grupo.color} load-bar`}
                value={percent}
                max="100"
                aria-hidden="true"
              ></progress>
              <ul className="tags">
                {grupo.items.map((item, j) => (
                  <li key={item} className={`tag ${j < visible ? 'is-shown' : 'is-pending'}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section
          className={`nes-container is-dark with-title inventory-slot is-strengths ${strengthsShown ? 'is-ready' : ''}`}
          style={{ '--i': competencias.length }}
        >
          <h2 className="title">Fortalezas</h2>
          <ul className="strengths">
            {fortalezas.map((item, j) => (
              <li key={item} style={{ '--j': j }}>
                <i className="nes-icon heart is-small" aria-hidden="true"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Screen>
  );
};

export default Competencias;
