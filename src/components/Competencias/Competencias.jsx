import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useSound } from '../Sounds/Sounds';
import progress from '/src/assets/fx/progress.mp3';
import back from '/src/assets/fx/back.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';

const habilidades = [
  { titulo: 'PHP', value: 85, 'class': 'is-primary' }, 
  { titulo: 'SQL', value: 85, 'class': 'is-warning' }, 
  { titulo: 'Laravel', value: 80, 'class': 'is-error' }, 
  { titulo: 'Selenium', value: 60, 'class': 'is-success' }, 
  { titulo: 'HTML5', value: 85, 'class': 'is-error' }, 
  { titulo: 'CSS', value: 70, 'class': 'is-primary' }, 
  { titulo: 'Javascript', value: 80, 'class': 'is-warning' }, 
  { titulo: 'JQuery', value: 80, 'class': 'is-success' }, 
  { titulo: 'Python', value: 60, 'class': 'is-warning' }, 
  { titulo: 'React JS', value: 50, 'class': 'is-primary' }, 
  { titulo: 'IA', value: 70, 'class': 'is-success' }, 
  // Puedes agregar más habilidades según sea necesario
];

const Competencias = () => {
  const { playSound, allowSounds, stopMusic } = useSound();

  const HandleBack = () => {
    if (allowSounds) {
      playSound(back, 0.5);
    }
  }

  useEffect(() => {
    // Reproduce el sonido al iniciar la vista
    playSound(progress, 0.2);

    function animateProgressBar(barSelector, finalValue) {
      $(barSelector).animate({
        value: finalValue
      }, {
        duration: 1500,
        step: function(now) {
          $(barSelector).attr('value', now);
          
          // Quita a la clase volver-link la clase d-none
          $('.volver-link').removeClass('d-none');
        }
      });
    }

    // Llama a la función para animar la barra de progreso cuando el componente se monta
    // Recorre la constante habilidades y usa el animateProgressBar para animar la clase bar{index}
    habilidades.forEach((habilidad, index) => {
      animateProgressBar(`.nes-progress.bar${index}`, habilidad.value);
    });
  }, [playSound]);

  return (
    <>
      <div className="nes-container is-dark  vh overflow-y-auto overflow-x-hidden ">
      <div className="nes-container is-dark with-title">
        <h2 className="title">Habilidades</h2>
        {habilidades.map((habilidad, index) => (
          <div key={index} className="mb-3">
            <label>{habilidad.titulo}</label>
            <progress className={`nes-progress bar${index} ${habilidad.class}`}   value="" max="100"></progress>
          </div>
        ))}
      </div>
      <div className="volver-link">
        <Link to="/MainMenu" className="nes-btn" onClick={HandleBack}>Volver</Link>
      </div>      
      </div>
    </>
  );
};

export default Competencias;
