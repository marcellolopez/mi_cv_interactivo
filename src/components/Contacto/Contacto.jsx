import React, { useState } from 'react';
import Screen from '../Screen/Screen';
import { useSound } from '../Sounds/Sounds';
import { contacto } from '../../data/cv';

const Contacto = () => {
  const { playSound } = useSound();
  const [status, setStatus] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacto.email);
      setStatus('¡Correo copiado!');
      playSound('pickUpCoin', 0.5);
    } catch {
      setStatus(`No se pudo copiar. Mi correo es ${contacto.email}`);
    }
  };

  return (
    <Screen title="Contacto">
      <div className="contact">
        <section className="dialog">
          <div className="nes-balloon is-dark from-left">
            <p>¡Gracias por jugar! ¿Tienes un proyecto o una vacante? Hablemos.</p>
          </div>
          <i className="nes-mario dialog-sprite" aria-hidden="true"></i>
        </section>

        <div className="contact-buttons">
          <a className="nes-btn is-primary contact-btn" href={`mailto:${contacto.email}`}>
            <i className="nes-icon gmail is-small" aria-hidden="true"></i>
            Escríbeme
          </a>
          <a className="nes-btn is-success contact-btn" href={contacto.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="nes-icon linkedin is-small" aria-hidden="true"></i>
            LinkedIn
            <span className="visually-hidden"> (abre en otra pestaña)</span>
          </a>
          <a className="nes-btn is-warning contact-btn" href={contacto.github} target="_blank" rel="noopener noreferrer">
            <i className="nes-icon github is-small" aria-hidden="true"></i>
            GitHub
            <span className="visually-hidden"> (abre en otra pestaña)</span>
          </a>
          <button type="button" className="nes-btn contact-btn" onClick={copyEmail}>
            Copiar correo
          </button>
        </div>
        <p className="copy-status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </Screen>
  );
};

export default Contacto;
