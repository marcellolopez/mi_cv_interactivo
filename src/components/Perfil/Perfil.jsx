import React from 'react';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { useTypewriter } from '../../hooks/animation';
import { cursos, experiencias, formacion, habilidades, perfil } from '../../data/cv';

const fullText = `"${perfil.bio.join('\n\n')}"`;

const stats = [
  { value: experiencias.length, label: 'Empresas' },
  { value: habilidades.length, label: 'Habilidades' },
  { value: formacion.length + cursos.length, label: 'Estudios' },
];

const Perfil = () => {
  useVisit('perfil');
  const { shown, done, skip } = useTypewriter(fullText);

  return (
    <Screen title="Perfil">
      <div className="perfil">
        <section className="dialog">
          <div className="nes-balloon is-dark from-left dialog-balloon">
            {/* Texto completo para lectores de pantalla; el animado es solo visual. */}
            <p className="visually-hidden">{fullText}</p>
            <p className="dialog-text" aria-hidden="true" onClick={skip}>
              {shown}
              {!done && <span className="caret"></span>}
            </p>
            {done ? (
              <p className="dialog-sign">— {perfil.nombre}</p>
            ) : (
              <button type="button" className="dialog-skip" onClick={skip} aria-hidden="true" tabIndex={-1}>
                Saltar ▶
              </button>
            )}
          </div>
          <i className="nes-mario dialog-sprite" aria-hidden="true"></i>
        </section>

        <ul className="stats">
          {stats.map((stat, index) => (
            <li key={stat.label} className="stat" style={{ '--i': index }}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
};

export default Perfil;
