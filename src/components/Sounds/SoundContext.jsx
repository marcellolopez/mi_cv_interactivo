import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSound = () => {
  return useContext(SoundContext);
};

export const SoundProvider = ({ children }) => {
  const [allowSounds, setAllowSounds] = useState(false);

  const toggleSounds = (value) => {
    setAllowSounds(value);
  };

  return (
    <SoundContext.Provider value={{ allowSounds, toggleSounds }}>
      {children}
    </SoundContext.Provider>
  );
};