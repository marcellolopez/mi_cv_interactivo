import React from 'react';
import { Link } from 'react-router-dom';
import Sounds, { useSound } from '../Sounds/Sounds';
import back from '/src/assets/fx/back.mp3';

const Estudios = () => {
  const { allowSounds, playSound } = useSound();
  
  const estudios = [
    {
      tipo: 'FORMACIÓN',
      titulo: 'Analista programador',
      fecha: 'ene 2013 - jun 2015',
      institucion: 'Inacap, Valdivia',
    },
    {
      tipo: 'CURSOS',
      titulo: 'Curso de Laravel',
      fecha: 'abr 2019',
      institucion: 'Curso metodología e-learning en Udemy',
    },
    {
      tipo: '',
      titulo: 'Javascript',
      fecha: 'ago 2017',
      institucion: 'Curso metodología e-learning en CodeAcademy',
    },
    {
      tipo: '',
      titulo: 'jQuery',
      fecha: 'ago 2017',
      institucion: 'Curso metodología e-learning en CodeAcademy',
    },
    {
      tipo: '',
      titulo: 'React JS',
      fecha: 'sep 2023',
      institucion: 'Curso de 30 horas (clases en vivo) en Coderhouse',
    },
    {
      tipo: '',
      titulo: 'IA para programadores',
      fecha: 'dic 2023',
      institucion: 'Curso híbrido en Coderhouse: "prompt engineering para programadores"',
    },
    {
      tipo: '',
      titulo: 'C# Avanzado',
      fecha: 'ene 2024',
      institucion: 'Curso metodología e-learning de LinkedIn Learning',
    },
  ];

  const HandleBack = () => {
    if (allowSounds) {
      playSound(back, 0.5);
    }
  }

  return (
    <div>
    <div className="nes-container is-dark  vh overflow-y-auto overflow-x-hidden ">
      <div className="nes-container is-dark with-title">
        <h2 className="title">Estudios</h2>
        {estudios.map((estudio, index) => (
          <div key={index}>
            <h5>{estudio.tipo}</h5>
            <h5 className='text-decoration-underline'>{estudio.titulo}</h5>
            <p>{estudio.fecha}</p>
            <p>{estudio.institucion}</p>
            <div className="mt-4 mb-4 border-top"></div>
          </div>
        ))}
      </div>
      <div className="volver-link">
        <Link to="/MainMenu" className="nes-btn" onClick={HandleBack}>Volver</Link>
      </div>  
    </div>
    </div>
  );
};

export default Estudios;
