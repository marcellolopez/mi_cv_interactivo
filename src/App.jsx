// src/App.jsx
import React, {useEffect} from 'react';
import 'nes.css/css/nes.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/Inicio/Inicio';
import MainMenu from './components/main_menu/MainMenu';
import Perfil from './components/Perfil/Perfil';
import Competencias from './components/Competencias/Competencias.jsx';
import Experiencia from './components/Experiencia/Experiencia';
import Estudios from './components/Estudios/Estudios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sounds from './components/Sounds/Sounds';



const App = () => {

  // Lista de archivos de sonido que quieres precargar
  const soundFiles = ['/src/assets/fx/pickUpCoin.wav', '/src/assets/fx/bg-music.mp3', '/src/assets/fx/progress.mp3', '/src/assets/fx/enter.mp3'];


  // Precarga los archivos de sonido cuando el componente se monta
  useEffect(() => {
    soundFiles.forEach((audioFile) => {
      const audioElement = new Audio(audioFile);
      audioElement.preload = 'metadata';
      console.log('Metadata')
    });
  }, []);  
  
  return (
    <div className="app-container style={{ overflow: 'hidden', overflowY: 'hidden' }}">
      <BrowserRouter>
        <Sounds>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/competencias" element={<Competencias />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/estudios" element={<Estudios />} />
          </Routes>
        </Sounds>
      </BrowserRouter>
    </div>
  );
};

export default App;
