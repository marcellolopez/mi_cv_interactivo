import React from 'react';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { cursos, formacion } from '../../data/cv';

const Logro = ({ item, icon, index, featured = false }) => (
  <li className={`achievement ${featured ? 'is-featured' : ''}`} style={{ '--i': index }}>
    <i className={`nes-icon ${icon} ${featured ? 'is-medium' : 'is-small'}`} aria-hidden="true"></i>
    <div>
      <h3 className="achievement-title">{item.titulo}</h3>
      {item.institucion && <p className="achievement-meta">{item.institucion}</p>}
      {item.fecha && <p className="achievement-date">{item.fecha}</p>}
    </div>
  </li>
);

const Estudios = () => {
  useVisit('estudios');

  return (
    <Screen title="Estudios">
      <h2 className="section-label">Formación</h2>
      <ul className="achievements">
        {formacion.map((item, index) => (
          <Logro key={item.titulo} item={item} icon="trophy" index={index} featured />
        ))}
      </ul>

      <h2 className="section-label">Cursos</h2>
      <ul className="achievements">
        {cursos.map((item, index) => (
          <Logro key={item.titulo} item={item} icon="star" index={index + formacion.length} />
        ))}
      </ul>
    </Screen>
  );
};

export default Estudios;
