// src/components/Sounds/Sounds.jsx
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const SoundContext = createContext();

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound debe ser utilizado dentro de un SoundProvider');
  }
  return context;
};

const Sounds = ({ children }) => {
  const [allowSounds, setAllowSounds] = useState(true);

  const toggleSounds = useCallback(() => {
    setAllowSounds((prevAllowSounds) => !prevAllowSounds);
  }, []);

  const playSound = useCallback((audioFile, volume) => {
    if (allowSounds) {
      const audioElement = new Audio(audioFile);
      audioElement.volume = volume;
      audioElement.play();
    }
  }, [allowSounds]);

  const stopMusic = useCallback(() => {
    // Puedes agregar lógica para detener la música si es necesario
  }, []);
  /*/
  // Lista de archivos de sonido que quieres precargar
  const soundFiles = ['/src/assets/fx/pickUpCoin.wav', '/src/assets/fx/bg-music.mp3', '/src/assets/fx/progress.mp3', '/src/assets/fx/enter.mp3'];

  // Precarga los archivos de sonido cuando el componente se monta
  useEffect(() => {
    soundFiles.forEach((audioFile) => {
      const audioElement = new Audio(audioFile);
      audioElement.preload = 'auto';
    });
  }, []);
  /*/

  const value = {
    allowSounds,
    toggleSounds,
    playSound,
    stopMusic,
  };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export default Sounds;
