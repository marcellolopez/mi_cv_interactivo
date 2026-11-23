// Experiencia como mapa de niveles: cada trabajo es un nivel del recorrido,
// de la primera misión (izquierda) a la actual (derecha). Un personaje en
// pixel art camina hasta el nivel elegido y abajo se abre la ficha de la misión.
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Screen from '../Screen/Screen';
import { useSound } from '../Sounds/Sounds';
import { useVisit } from '../Progress/Progress';
import { useAnimationProgress } from '../../hooks/animation';
import { experiencias } from '../../data/cv';
import PixelHero from './PixelHero';
import { formatDuration, monthsBetween } from './duration';

// Orden cronológico para el mapa: nivel 1 = primer trabajo.
const niveles = [...experiencias].reverse().map((exp, index) => ({
  ...exp,
  nivel: index + 1,
  meses: monthsBetween(exp.fecha),
}));
const maxMeses = Math.max(...niveles.map((n) => n.meses));
const completadas = niveles.filter((n) => !n.actual).length;

const XpBar = ({ meses }) => {
  const progress = useAnimationProgress(700);
  const value = Math.round(meses * progress);
  return (
    <div className="xp">
      <span className="xp-label" aria-hidden="true">
        XP
      </span>
      <progress className="nes-progress is-success xp-bar" value={value} max={maxMeses} aria-hidden="true"></progress>
      <span className="xp-value">{formatDuration(meses)}</span>
    </div>
  );
};

const MissionCard = ({ mision }) => (
  <article className="nes-container is-dark with-title mission-card">
    <p className="title">
      Nivel {mision.nivel} de {niveles.length}
    </p>
    <div className="mission-head">
      <div>
        <h2 className="quest-role">{mision.puesto}</h2>
        <p className="quest-company">{mision.empresa}</p>
        <p className="quest-date">{mision.fecha}</p>
      </div>
      {mision.actual ? (
        <span className="quest-live">En curso</span>
      ) : (
        <span className="mission-stamp">¡Completada!</span>
      )}
    </div>

    <XpBar meses={mision.meses} />

    <h3 className="mission-sub">Objetivos</h3>
    <ul className="nes-list is-circle quest-list">
      {mision.proyectos.map((proyecto) => (
        <li key={proyecto}>{proyecto}</li>
      ))}
    </ul>

    <h3 className="mission-sub">Botín</h3>
    <ul className="tags" aria-label="Tecnologías">
      {mision.tecnologias.map((tec) => (
        <li key={tec} className="tag">
          {tec}
        </li>
      ))}
    </ul>
  </article>
);

const MapView = () => {
  const { playSound } = useSound();
  const [selected, setSelected] = useState(niveles.length - 1);
  const [walking, setWalking] = useState(false);
  const [heroX, setHeroX] = useState(null);
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);

  const select = useCallback(
    (index, focus = false) => {
      const next = Math.max(0, Math.min(niveles.length - 1, index));
      if (next === selected) return;
      playSound('hit', 0.12);
      setSelected(next);
      setWalking(true);
      if (focus) nodeRefs.current[next]?.focus();
    },
    [playSound, selected],
  );

  // Ubica al personaje sobre el nivel elegido y centra ese nivel en el mapa.
  useLayoutEffect(() => {
    const stop = nodeRefs.current[selected]?.parentElement;
    const track = trackRef.current;
    if (!stop || !track) return;
    const center = stop.offsetLeft + stop.offsetWidth / 2;
    setHeroX(center);
    track.scrollLeft = center - track.clientWidth / 2;
  }, [selected]);

  useEffect(() => {
    if (!walking) return undefined;
    const id = setTimeout(() => setWalking(false), 500);
    return () => clearTimeout(id);
  }, [walking, selected]);

  const onKeyDown = (event) => {
    const moves = { ArrowRight: selected + 1, ArrowLeft: selected - 1, Home: 0, End: niveles.length - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], true);
  };

  const mision = niveles[selected];

  return (
    <>
      <div className="worldmap nes-container is-rounded is-dark">
        <div className="worldmap-track" ref={trackRef}>
          <ol className="worldmap-path" aria-label="Mapa de misiones" onKeyDown={onKeyDown}>
            {niveles.map((n, index) => (
              <li key={`${n.empresa}-${n.fecha}`} className="worldmap-stop" style={{ '--i': index }}>
                <button
                  type="button"
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  className={`worldmap-node ${n.actual ? 'is-current' : 'is-done'} ${index === selected ? 'is-selected' : ''}`}
                  aria-current={index === selected ? 'step' : undefined}
                  aria-label={`Nivel ${n.nivel}: ${n.puesto} en ${n.empresa}${n.actual ? ', en curso' : ''}`}
                  tabIndex={index === selected ? 0 : -1}
                  onClick={() => select(index)}
                >
                  {n.actual ? '!' : n.nivel}
                </button>
                <span className="worldmap-year" aria-hidden="true">
                  {n.fecha.match(/\d{4}/)?.[0]}
                </span>
              </li>
            ))}
          </ol>
          {heroX !== null && (
            <div className={`worldmap-hero ${walking ? 'is-walking' : ''}`} style={{ '--x': `${heroX}px` }} aria-hidden="true">
              <PixelHero />
            </div>
          )}
        </div>
        <div className="worldmap-controls">
          <button type="button" className="nes-btn" onClick={() => select(selected - 1)} disabled={selected === 0}>
            ◀<span className="visually-hidden"> Nivel anterior</span>
          </button>
          <p className="worldmap-status">
            Completadas {completadas}/{niveles.length}
          </p>
          <button
            type="button"
            className="nes-btn"
            onClick={() => select(selected + 1)}
            disabled={selected === niveles.length - 1}
          >
            ▶<span className="visually-hidden"> Nivel siguiente</span>
          </button>
        </div>
      </div>

      {/* La animación va en el contenedor: si va en la tarjeta tapa su borde. */}
      <div className="mission-enter" key={selected} aria-live="polite">
        <MissionCard mision={mision} />
      </div>
    </>
  );
};

const ListView = () => (
  <ol className="quests">
    {[...niveles].reverse().map((mision, index) => (
      <li key={`${mision.empresa}-${mision.fecha}`} className="quest" style={{ '--i': index }}>
        <MissionCard mision={mision} />
      </li>
    ))}
  </ol>
);

const Experiencia = () => {
  useVisit('experiencia');
  const { playSound } = useSound();
  const [lista, setLista] = useState(false);

  const toggle = () => {
    playSound('pluck', 0.4);
    setLista((v) => !v);
  };

  return (
    <Screen title="Experiencia">
      <div className="experience-intro">
        <p className="screen-intro">
          {lista
            ? 'Todas mis misiones, de la más reciente a la más antigua.'
            : 'Recorre el mapa: cada nivel es un trabajo. Usa ← → o haz clic.'}
        </p>
        <button type="button" className="nes-btn is-primary" aria-pressed={lista} onClick={toggle}>
          {lista ? 'Ver mapa' : 'Ver lista'}
        </button>
      </div>
      {lista ? <ListView /> : <MapView />}
    </Screen>
  );
};

export default Experiencia;
