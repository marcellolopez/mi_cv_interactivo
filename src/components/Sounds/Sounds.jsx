import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';

import back from '../../assets/fx/back.mp3';
import bgMusic from '../../assets/fx/bg-music.mp3';
import enter from '../../assets/fx/enter.mp3';
import hit from '../../assets/fx/hit-8bit.mp3';
import pickUpCoin from '../../assets/fx/pickUpCoin.wav';
import pluck from '../../assets/fx/pluck.mp3';
import pong from '../../assets/fx/pong.mp3';
import progress from '../../assets/fx/progress.mp3';

// Efectos cortos: se descargan y decodifican UNA sola vez al cargar la app
// (Web Audio API). Al hacer clic solo se reproduce el buffer que ya está en
// memoria, por eso suenan al instante, incluso la primera vez.
const EFFECTS = { back, enter, hit, pickUpCoin, pluck, pong, progress };

const effects = Object.fromEntries(
  Object.entries(EFFECTS).map(([name, src]) => [name, new Howl({ src: [src], preload: true })]),
);

// Música de fondo: streaming (html5) para que empiece sin esperar la descarga completa.
const music = new Howl({ src: [bgMusic], loop: true, html5: true, preload: true });

const SoundContext = createContext(null);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound debe ser utilizado dentro de <Sounds>');
  }
  return context;
};

const Sounds = ({ children }) => {
  const [allowSounds, setAllowSoundsState] = useState(false);
  // Ref para que playSound sea estable y siempre lea el valor actual.
  const allowRef = useRef(false);

  const playSound = useCallback((name, volume = 0.5) => {
    if (!allowRef.current) return;
    const effect = effects[name];
    if (!effect) {
      console.warn(`Sonido desconocido: ${name}`);
      return;
    }
    const id = effect.play();
    effect.volume(volume, id);
  }, []);

  // "Bip" de tecla estilo diálogo de RPG, sintetizado con Web Audio (sin
  // archivos): una onda cuadrada muy corta con un tono que varía un poco.
  const playBlip = useCallback((volume = 0.04) => {
    if (!allowRef.current) return;
    const ctx = Howler.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(480 + Math.random() * 160, t);
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
    osc.connect(gain);
    gain.connect(Howler.masterGain || ctx.destination);
    osc.start(t);
    osc.stop(t + 0.05);
  }, []);

  const playBackgroundMusic = useCallback((volume = 0.2) => {
    if (!allowRef.current) return;
    music.volume(volume);
    if (!music.playing()) music.play();
  }, []);

  const stopMusic = useCallback(() => {
    music.stop();
  }, []);

  const setAllowSounds = useCallback((value) => {
    allowRef.current = value;
    setAllowSoundsState(value);
    if (!value) music.stop();
  }, []);

  const value = useMemo(
    () => ({ allowSounds, setAllowSounds, playSound, playBlip, playBackgroundMusic, stopMusic }),
    [allowSounds, setAllowSounds, playSound, playBlip, playBackgroundMusic, stopMusic],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export default Sounds;
