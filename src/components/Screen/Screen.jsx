// Marco común de cada pantalla: HUD, título, contenido con scroll y botón Volver.
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';
import { useProgress } from '../Progress/Progress';
import { perfil } from '../../data/cv';

const Hud = () => {
  const { allowSounds, setAllowSounds, playBackgroundMusic } = useSound();
  const { visited, total } = useProgress();

  const toggleSound = () => {
    if (allowSounds) {
      setAllowSounds(false);
    } else {
      setAllowSounds(true);
      playBackgroundMusic(0.2);
    }
  };

  return (
    <header className="hud">
      <span className="hud-name">{perfil.nombre}</span>
      <span className="hud-coins">
        <i className="nes-icon coin is-small" aria-hidden="true"></i>
        <span aria-hidden="true">
          ×{visited.length}/{total}
        </span>
        <span className="visually-hidden">
          Secciones visitadas: {visited.length} de {total}
        </span>
      </span>
      <button type="button" className="nes-btn hud-sound" aria-pressed={allowSounds} onClick={toggleSound}>
        <span aria-hidden="true">♪ </span>
        {allowSounds ? 'ON' : 'OFF'}
        <span className="visually-hidden"> Sonido</span>
      </button>
    </header>
  );
};

const Screen = ({ title, children, back = true, focusTitle = true, className = '' }) => {
  const { playSound } = useSound();
  const navigate = useNavigate();
  const titleRef = useRef(null);

  // Al cambiar de pantalla, el foco va al título (lectores de pantalla y teclado).
  useEffect(() => {
    if (focusTitle) titleRef.current?.focus();
  }, [focusTitle]);

  // Esc vuelve al menú, como en un juego.
  useEffect(() => {
    if (!back) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        playSound('back', 0.5);
        navigate('/MainMenu');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [back, navigate, playSound]);

  return (
    <main className={`screen nes-container is-dark ${className}`}>
      <Hud />
      {title && (
        <h1 className="screen-title" ref={titleRef} tabIndex={-1}>
          {title}
        </h1>
      )}
      <div className="screen-body">{children}</div>
      {back && (
        <footer className="screen-footer">
          <span className="key-hint" aria-hidden="true">
            ESC
          </span>
          <Link to="/MainMenu" className="nes-btn" onClick={() => playSound('back', 0.5)}>
            ◀ Volver
          </Link>
        </footer>
      )}
    </main>
  );
};

export default Screen;
