// src/App.jsx
import React from 'react';
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
