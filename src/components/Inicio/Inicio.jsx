// src/components/Inicio/Inicio.jsx
import React, { useState } from 'react';
import Sounds, { useSound } from '../Sounds/Sounds';
import { Link } from 'react-router-dom';
import bgMusic from '/src/assets/fx/bg-music.mp3';

const Inicio = () => {
  const { playSound, playBackgroundMusic, stopMusic } = useSound();

  // Estado para manejar el valor del checkbox
  const [allowSounds, setAllowSounds] = useState(false);

  // Estado para manejar si se ha seleccionado alguna opción
  const [optionSelected, setOptionSelected] = useState(false);

  // Manejador de cambios del checkbox
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    // Actualiza el estado allowSounds solo si el checkbox está marcado
    setAllowSounds(value == 'true' ? value === true : false);

    // Actualiza el estado optionSelected
    setOptionSelected(isChecked);
    console.log(value);

  };

  const handleEnter = () => {
    console.log(allowSounds);
    if (allowSounds) {
      
      // Reproduce el sonido al marcar el checkbox
      playBackgroundMusic(bgMusic, 0.5);
    } else {
      // Detiene la música al desmarcar el checkbox
      stopMusic();
    }
  }
  return (
    <div>
      <div className="nes-container is-dark vh overflow-y-auto overflow-x-hidden">
        <div className="nes-container is-dark with-title">
          <h2 className="title">Sonidos</h2>
          <label>
            <input
              type="checkbox"
              className="nes-radio chk"
              name="allowSounds"
              value="true"
              onChange={handleCheckboxChange}
            />
            <span>Sí</span>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="nes-radio chk"
              name="allowSounds"
              value="false"
              onChange={handleCheckboxChange}
            />
            <span>No</span>
          </label>
        </div>
        <div className="volver-link">
          {/* Renderizamos el componente Sounds y le pasamos el valor del checkbox como prop */}
          <Sounds allowSounds={allowSounds} />

          {/* Agregamos el botón "Entrar" solo si algún checkbox está marcado */}
          {optionSelected && (
            <Link to="/MainMenu" className="nes-btn" onClick={handleEnter}>
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
