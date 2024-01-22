import React from 'react';
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/main_menu/MainMenu';
import Perfil from './components/Perfil/Perfil';
import Competencias from './components/Competencias/Competencias.jsx';
import Experiencia from './components/Experiencia/Experiencia';
import Estudios from './components/Estudios/Estudios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className="app-container"  >
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/competencias" element={<Competencias />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/estudios" element={<Estudios />} />
          </Routes>
        </BrowserRouter>
     
    </div>
  );
};

export default App;
