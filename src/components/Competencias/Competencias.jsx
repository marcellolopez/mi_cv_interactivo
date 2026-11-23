import React, { useEffect } from 'react';
import { useSound } from '../Sounds/Sounds';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { competencias, fortalezas } from '../../data/cv';

const Competencias = () => {
  useVisit('habilidades');
  const { playSound } = useSound();

  useEffect(() => {
    playSound('progress', 0.2);
  }, [playSound]);

  return (
    <Screen title="Habilidades">
      <p className="screen-intro">Mi inventario de herramientas, por categoría.</p>

      <div className="inventory">
        {competencias.map((grupo, i) => (
          <section
            key={grupo.categoria}
            className={`nes-container is-dark with-title inventory-slot ${grupo.color}`}
            style={{ '--i': i }}
          >
            <h2 className="title">{grupo.categoria}</h2>
            <ul className="tags">
              {grupo.items.map((item, j) => (
                <li key={item} className="tag" style={{ '--j': j }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section
          className="nes-container is-dark with-title inventory-slot is-strengths"
          style={{ '--i': competencias.length }}
        >
          <h2 className="title">Fortalezas</h2>
          <ul className="strengths">
            {fortalezas.map((item, j) => (
              <li key={item} style={{ '--j': j }}>
                <i className="nes-icon heart is-small" aria-hidden="true"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Screen>
  );
};

export default Competencias;
