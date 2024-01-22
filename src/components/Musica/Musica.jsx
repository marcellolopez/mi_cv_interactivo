import React, { useEffect, useState } from 'react';
import MidiPlayer from 'midi-player-js';

const MidiPlayerComponent = () => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const newPlayer = new MidiPlayer.Player();

    // Cargar el archivo MIDI
    newPlayer.loadFile('assets/Com');

    setPlayer(newPlayer);
  }, []);

  const playMidi = () => {
    if (player) {
      player.play();
    }
  };

  const stopMidi = () => {
    if (player) {
      player.stop();
    }
  };

  return (
    <div>
      <button onClick={playMidi}>Play MIDI</button>
      <button onClick={stopMidi}>Stop MIDI</button>
    </div>
  );
};

export default MidiPlayerComponent;
