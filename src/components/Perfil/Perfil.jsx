import React from 'react';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { useTypewriter } from '../../hooks/animation';
import { competencias, experiencias, perfil } from '../../data/cv';

const fullText = `"${perfil.bio.join('\n\n')}"`;

const stats = [
  { value: perfil.aniosExperiencia, label: 'Años de experiencia' },
  { value: experiencias.length, label: 'Empresas' },
  { value: competencias.reduce((n, g) => n + g.items.length, 0), label: 'Herramientas' },
];

const Perfil = () => {
  useVisit('perfil');
  const { shown, done, skip } = useTypewriter(fullText, 16);

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
              <p className="dialog-sign">— {perfil.nombreCompleto}</p>
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
