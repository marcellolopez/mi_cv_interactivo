// src/components/main_menu/MainMenu.jsx
import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';
import { useProgress } from '../Progress/Progress';
import Screen from '../Screen/Screen';
import { useArrowNav } from '../../hooks/animation';
import { contacto } from '../../data/cv';

const ITEMS = [
  { to: '/perfil', label: 'Perfil', desc: 'Quién soy', color: 'is-primary', sound: ['pickUpCoin', 0.5], section: 'perfil' },
  { to: '/competencias', label: 'Habilidades', desc: 'Mis stats', color: 'is-success', sound: ['hit', 0.2], section: 'habilidades' },
  { to: '/experiencia', label: 'Experiencia', desc: 'Misiones', color: 'is-warning', sound: ['pong', 1], section: 'experiencia' },
  { to: '/proyectos', label: 'Proyectos', desc: 'Mis creaciones', color: 'is-primary', sound: ['pickUpCoin', 0.4], section: 'proyectos' },
  { to: '/estudios', label: 'Estudios', desc: 'Logros', color: 'is-error', sound: ['pluck', 0.6], section: 'estudios' },
  { to: '/contacto', label: 'Contacto', desc: 'Hablemos', color: '', sound: ['enter', 0.6] },
];

const MainMenu = () => {
  const { playSound } = useSound();
  const { visited } = useProgress();
  const onMove = useCallback(() => playSound('hit', 0.08), [playSound]);
  const nav = useArrowNav(onMove);

  // Como en un juego: el cursor parte en la primera opción.
  useEffect(() => {
    nav.ref.current?.querySelector('a')?.focus();
  }, [nav.ref]);

  return (
    <Screen title="Menú principal" back={false} focusTitle={false}>
      <nav aria-label="Secciones del CV">
        <ul className="menu" ref={nav.ref} onKeyDown={nav.onKeyDown}>
          {ITEMS.map((item, index) => {
            const done = item.section && visited.includes(item.section);
            return (
              <li key={item.to} style={{ '--i': index }}>
                <Link
                  to={item.to}
                  className={`nes-btn menu-item ${item.color}`}
                  onClick={() => playSound(...item.sound)}
                >
                  <span>
                    {item.label}
                    <span className="menu-desc">{item.desc}</span>
                  </span>
                  {done && (
                    <span className="menu-check">
                      <span aria-hidden="true">★</span>
                      <span className="visually-hidden"> (visitada)</span>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="contact-row">
        <a href={`mailto:${contacto.email}`} aria-label="Enviar correo">
          <i className="nes-icon gmail is-medium" aria-hidden="true"></i>
        </a>
        <a href={contacto.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre en otra pestaña)">
          <i className="nes-icon linkedin is-medium" aria-hidden="true"></i>
        </a>
        <a href={contacto.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre en otra pestaña)">
          <i className="nes-icon github is-medium" aria-hidden="true"></i>
        </a>
      </div>
    </Screen>
  );
};

export default MainMenu;
