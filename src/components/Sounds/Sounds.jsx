// src/components/Sounds/Sounds.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

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
  const [backgroundMusic, setBackgroundMusic] = useState(null);

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

  const playBackgroundMusic = useCallback((audioFile, volume) => {
    if (allowSounds) {
      const audioElement = new Audio(audioFile);
      audioElement.volume = volume;
      audioElement.loop = true;
      audioElement.play();
      setBackgroundMusic(audioElement);
    }
  }, [allowSounds]);

  const stopMusic = useCallback(() => {
    if (backgroundMusic) {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
      setBackgroundMusic(null);
    }
  }, [backgroundMusic]);

  const value = {
    allowSounds,
    toggleSounds,
    playSound,
    playBackgroundMusic,
    stopMusic,
  };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export default Sounds;
