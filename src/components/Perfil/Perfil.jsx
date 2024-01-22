import React from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css';

const Perfil = () => {
  return (
    <>
    <div className="nes-container is-dark  vh overflow-y-auto overflow-x-hidden ">
      <div className='perfil-container  position-relative '>
        <section className="message -left">
          <div className="nes-balloon is-dark from-left text-justify">
            <p>"Soy un programador y desarrollador web con sólida formación y
              experiencia en informática, además de ser músico y apasionado
              de las artes. 
            </p> 
            <p>
              Fusiono creatividad y disciplina para abordar desafíos
              con innovación. Mi enfoque proactivo ha sido clave para lograr
              éxitos en diversos proyectos."
            </p>
            <br />
            <p className='text-end'>Marcello L.</p>
          </div>
          <div className='float-right'>
            <i className="nes-mario"></i>
          </div>
        </section>

      </div>
      <div className="volver-link">
          <Link to="/MainMenu" className="nes-btn">Volver</Link>
      </div>
    </div>
    </>
  
  );
}

export default Perfil;
