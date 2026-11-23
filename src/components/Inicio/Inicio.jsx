import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';
import { useArrowNav } from '../../hooks/animation';
import { perfil } from '../../data/cv';

const Inicio = () => {
  const { setAllowSounds, playBackgroundMusic, playSound } = useSound();
  const navigate = useNavigate();
  const nav = useArrowNav();

  const start = (withSound) => {
    setAllowSounds(withSound);
    if (withSound) {
      playBackgroundMusic(0.2);
      playSound('enter', 0.8);
    }
    navigate('/MainMenu');
  };

  return (
    <main className="screen nes-container is-dark">
      <div className="title-card">
        <p className="title-kicker">Mi CV interactivo</p>
        <h1 className="game-title">
          {/* Sin toUpperCase: la fuente Press Start 2P no trae la "Ó" mayúscula */}
          {perfil.nombre
            .split(' ')
            .map((word) => (
              <span key={word}>{word}</span>
            ))}
        </h1>
        <p className="game-subtitle">{perfil.titulo}</p>

        <i className="nes-mario title-sprite" aria-hidden="true"></i>

        <p className="blink press-start" aria-hidden="true">
          ▶ PRESIONA START
        </p>

        <div className="start-options" ref={nav.ref} onKeyDown={nav.onKeyDown}>
          <button type="button" className="nes-btn is-primary" onClick={() => start(true)} autoFocus>
            Start con sonido
          </button>
          <button type="button" className="nes-btn" onClick={() => start(false)}>
            Start sin sonido
          </button>
        </div>

        <p className="hint">Mouse, o flechas ↑ ↓ y Enter</p>
      </div>
    </main>
  );
};

export default Inicio;
