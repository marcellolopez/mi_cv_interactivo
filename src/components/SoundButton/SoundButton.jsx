import React from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';

const SoundButton = ({ to, children, soundFile }) => {
  const { playSound } = useSound();

  const handleClick = () => {
    // Reproduce el sonido al hacer clic en el botón
    playSound(soundFile, 0.5);

    // Puedes agregar más lógica aquí si es necesario

    // Redirige a la ruta especificada
    window.location.href = to;
  };

  return (
    <div className="volver-link">
      <button className="nes-btn" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default SoundButton;
