import React, { useState } from 'react';
import Sounds, { useSound } from '../Sounds/Sounds';
import bgMusic from '/src/assets/fx/bg-music.mp3';
import enter from '/src/assets/fx/enter.mp3';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const { playSound, playBackgroundMusic, stopMusic } = useSound();

  // Estado para manejar el valor del checkbox
  const [allowSounds, setAllowSounds] = useState(false);

  // Estado para manejar si se ha seleccionado alguna opción
  const [optionSelected, setOptionSelected] = useState(false);

  // Función para reproducir el sonido "enter.mp3"
  const playEnterSound = () => {
    playSound(enter, 0.8);
  };

  // Manejador de cambios del checkbox
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    // Actualiza el estado allowSounds solo si el checkbox está marcado
    setAllowSounds(value === 'true');

    if (value === 'true' && isChecked) {
      stopMusic();
      // Reproduce el sonido al marcar el checkbox
      playBackgroundMusic(bgMusic, 0.4);
      console.log('Play', value);
    } else {
      // Detiene la música al desmarcar el checkbox
      stopMusic();
      console.log('Stop', value);
    }

    // Actualiza el estado optionSelected
    setOptionSelected(isChecked);
  };

  return (
    <div>
      <div className="nes-container is-dark vh overflow-y-hidden overflow-x-hidden">
        <div className="nes-container is-dark with-title">
          <h2 className="title">Música</h2>
          <label htmlFor="chkTrue" onClick={handleCheckboxChange}>
            <input
              id="chkTrue"
              type="checkbox"
              className="nes-radio chk"
              name="allowSounds"
              value="true"
            />
            <span>Sí</span>
          </label>
          <br />
          <label htmlFor="chkFalse" onClick={handleCheckboxChange}>
            <input
              id="chkFalse"
              type="checkbox"
              className="nes-radio chk"
              name="allowSounds"
              value="false"
            />
            <span>No</span>
          </label>
        </div>
        <div className="volver-link">
          {/* Renderizamos el componente Sounds y le pasamos el valor del checkbox como prop */}
          <Sounds allowSounds={allowSounds} />

          {/* Utilizamos SoundButton para el botón "Entrar" */}
          {optionSelected && (
            <Link to="/MainMenu" className="nes-btn mt-5" onClick={playEnterSound}>
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
