// src/components/main_menu/MainMenu.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'nes.css/css/nes.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pickUpCoin from '/src/assets/fx/pickUpCoin.wav';
import Sounds, { useSound } from '../Sounds/Sounds';

const MainMenu = () => {
  const { allowSounds, playSound } = useSound();

  const handleLinkClick = () => {
    if (allowSounds) {
      playSound(pickUpCoin, 0.5);
    }
  }

  return (
    <>
      <div className="nes-container is-dark vh">
        <div className="main-menu text-center is-dark">
          <h2 className="m-4">Bienvenido a mi CV</h2>

          <div className="d-flex justify-content-center">
            <ul className="nes-list ul-margin">
              <li className="mb-4">
                <Link className='nes-btn is-primary w-100' to="/perfil" onClick={handleLinkClick}>Perfil</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-success w-100' to="/competencias">Competencias</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-warning w-100' to="/experiencia">Experiencia</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-error w-100' to="/estudios">Estudios</Link>
              </li>
            </ul>
          </div>

          <div className='d-none d-sm-block col-4 offset-4 mt-5'>
            <div className="d-flex justify-content-around align-items-end">
              <a className='' href="mailto:mlc74163322@gmail.com">
                <i className="nes-icon gmail is-medium"></i>
              </a>
              <a className='' href="https://www.linkedin.com/in/marcellolc/">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a className='' href="https://github.com/marcellolopez">
                <i className="nes-icon github is-medium"></i>
              </a>
            </div>
          </div>

          <div className='d-sm-none col-12'>
            <div className="d-flex justify-content-around align-items-end">
              <a className='' href="mailto:mlc74163322@gmail.com">
                <i className="nes-icon gmail is-medium"></i>
              </a>
              <a className='' href="https://www.linkedin.com/in/marcellolc/">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a className='' href="https://github.com/marcellolopez">
                <i className="nes-icon github is-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
