import React, { useEffect } from 'react';
import { useSound } from '../Sounds/Sounds';
import Screen from '../Screen/Screen';
import { useVisit } from '../Progress/Progress';
import { useAnimationProgress } from '../../hooks/animation';
import { habilidades } from '../../data/cv';

const easeOut = (t) => 1 - (1 - t) ** 3;

const Competencias = () => {
  useVisit('habilidades');
  const { playSound } = useSound();
  const progress = useAnimationProgress(1800);

  useEffect(() => {
    playSound('progress', 0.2);
  }, [playSound]);

  return (
    <Screen title="Habilidades">
      <p className="screen-intro">Nivel de dominio de cada tecnología (LV 1 a 10).</p>
      <ul className="skills">
        {habilidades.map((skill, index) => {
          // Cada barra arranca un poco después de la anterior.
          const local = Math.min(1, Math.max(0, progress * 1.6 - index * 0.05));
          const value = Math.round(skill.value * easeOut(local));
          return (
            <li key={skill.titulo} className="skill" style={{ '--i': index }}>
              <div className="skill-head">
                <span id={`skill-${index}`}>{skill.titulo}</span>
                <span className="skill-level" aria-hidden="true">
                  LV {Math.max(1, Math.round(value / 10))}
                </span>
              </div>
              <progress
                className={`nes-progress ${skill.color}`}
                value={value}
                max="100"
                aria-labelledby={`skill-${index}`}
                aria-valuetext={`Nivel ${Math.round(skill.value / 10)} de 10`}
              ></progress>
            </li>
          );
        })}
      </ul>
    </Screen>
  );
};

export default Competencias;
