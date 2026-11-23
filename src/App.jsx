// src/App.jsx
import React from 'react';
import 'nes.css/css/nes.min.css';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sounds from './components/Sounds/Sounds';
import Background from './components/Background/Background';
import { ProgressProvider } from './components/Progress/Progress';
import Inicio from './components/Inicio/Inicio';
import MainMenu from './components/main_menu/MainMenu';
import Perfil from './components/Perfil/Perfil';
import Competencias from './components/Competencias/Competencias';
import Experiencia from './components/Experiencia/Experiencia';
import Estudios from './components/Estudios/Estudios';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';

// La key cambia con la ruta: cada pantalla entra con la animación de transición.
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-transition">
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Sounds>
      <ProgressProvider>
        <Background />
        <AnimatedRoutes />
      </ProgressProvider>
    </Sounds>
  </BrowserRouter>
);

export default App;
