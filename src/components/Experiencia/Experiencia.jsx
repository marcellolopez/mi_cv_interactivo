import React from 'react';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { experiencias } from '../../data/cv';

const Experiencia = () => {
  useVisit('experiencia');

  return (
    <Screen title="Experiencia">
      <p className="screen-intro">Misiones completadas, de la más reciente a la más antigua.</p>
      <ol className="quests">
        {experiencias.map((exp, index) => (
          <li key={`${exp.empresa}-${exp.fecha}`} className="quest" style={{ '--i': index }}>
            <article className="nes-container is-dark with-title">
              <p className="title">Misión {experiencias.length - index}</p>
              <h2 className="quest-role">{exp.puesto}</h2>
              <p className="quest-company">{exp.empresa}</p>
              <p className="quest-date">{exp.fecha}</p>
              <ul className="nes-list is-circle quest-list">
                {exp.proyectos.map((proyecto) => (
                  <li key={proyecto}>{proyecto}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Tecnologías">
                {exp.tecnologias.map((tec) => (
                  <li key={tec} className="tag">
                    {tec}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Screen>
  );
};

export default Experiencia;
