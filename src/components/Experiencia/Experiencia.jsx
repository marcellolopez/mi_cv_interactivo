import React from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';
import back from '/src/assets/fx/back.mp3';

const Experiencia = () => {
  const { allowSounds, playSound, stopMusic } = useSound();

  const HandleBack = () => {
    if (allowSounds) {
      playSound(back, 0.5);
    }
  }

  const experiencias = [
    {
      puesto: 'Desarrollador Senior',
      fecha: 'jun 2023 - dic 2023',
      empresa: 'RedSalud CCHC',
      proyectos: [
        'Proyecto de 6 meses, desarrollos de incidencias',
        'Desarrollo del 60% de las mejoras para sistema interno de honorarios médicos',
      ],
      tecnologias: ['Laravel', 'CSS', 'Bootstrap', 'PostgreSQL'],
    },
    {
      puesto: 'Desarrollador Laravel',
      fecha: 'mar 2020 - dic 2022',
      empresa: 'Cetep',
      proyectos: [
        'Desarrollo plataforma de teleconsultas medicas',
        'Integraciones como botones de pago, Power BI, RPA, etc',
        'Lider del equipo de innovación (Alexa Skills, Arduino)',
      ],
      tecnologias: ['PHP', 'Laravel'],
    },
    {
      puesto: 'Analista Programador',
      fecha: 'ene 2019 - dic 2019',
      empresa: 'Inveb Chile S.A.',
      proyectos: ['Desarrollo de proyectos informáticos para importantes clientes'],
      tecnologias: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL'],
    },
    {
      puesto: 'Programador',
      fecha: 'dic 2016 - mar 2018',
      empresa: 'Eol Research',
      proyectos: [
        'Desarrollador para el área de estudios de mercado',
        'Mejora de procesos a proyectos de 4 importantes clientes',
      ],
      tecnologias: ['Laravel', 'ASP.net', 'Python', 'ChatGPT'],
    },
    {
      puesto: 'Programador',
      fecha: 'ene 2015 - dic 2015',
      empresa: 'Aguas décima S.A., Valdivia',
      proyectos: ['Desarrollador de plataforma web para pagos online', 'Reducción de filas en un 30%'],
      tecnologias: ['PHP', 'MySQL', 'JavaScript', 'API Servipag'],
    },
  ];

  return (
    <div>
      <div className="nes-container is-dark  vh overflow-y-auto overflow-x-hidden ">
      <div className="nes-container is-dark with-title">
        <h2 className="title">Experiencia</h2>
        {experiencias.map((experiencia, index) => (
          <div className='contenido' key={index}>
            <h5>{experiencia.puesto}</h5>
            <p>{experiencia.fecha}</p>
            <p className='text-decoration-underline'>{experiencia.empresa}</p>
            <ul className='nes-list is-circle'>
              {experiencia.proyectos.map((proyecto, proyectoIndex) => (
                <li className='mb-3' key={proyectoIndex}>{proyecto}</li>
              ))}
            </ul>
            <p className='two-line-paragraph'>Tecnologías: {experiencia.tecnologias.join(', ')}</p>
            <div className="mt-5 mb-5 border-top"></div>

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

export default Experiencia;
