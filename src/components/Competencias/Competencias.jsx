import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

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
  useEffect(() => {
    function animateProgressBar(barSelector, finalValue) {
      $(barSelector).animate({
        value: finalValue
      }, {
        duration: 2000,
        step: function(now) {
          $(barSelector).attr('value', now);
        }
      });
    }

    // Llama a la función para animar la barra de progreso cuando el componente se monta
    // Recorre la constante habilidades y usa el animateProgressBar para animar la clase bar{index}
    habilidades.forEach((habilidad, index) => {
      animateProgressBar(`.nes-progress.bar${index}`, habilidad.value);
    })
  }, []);





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
        <Link to="/" className="nes-btn">Volver</Link>
      </div>
      </div>
    </>
  );
};

export default Competencias;
