// src/components/main_menu/MainMenu.jsx
import React, { useEffect, useRef } from 'react';
import Sounds, { useSound } from '../Sounds/Sounds';
import { Link } from 'react-router-dom';
import 'nes.css/css/nes.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pickUpCoin from '/src/assets/fx/pickUpCoin.wav';
import hit from '/src/assets/fx/hit-8bit.mp3';
import pong from '/src/assets/fx/pong.mp3';
import pluck from '/src/assets/fx/pluck.mp3';

const MainMenu = () => {

  // Lista de archivos de sonido que quieres precargar
  const soundFiles = ['pickUpCoin.wav', 'progress.mp3', 'enter.mp3', 'hit-8bit.mp3', 'pong.mp3', 'back.mp3'];


  // Precarga los archivos de sonido cuando el componente se monta
  useEffect(() => {
    soundFiles.forEach((audioFile) => {
      const audioElement = new Audio('/assets/fx/' + {audioFile});
      audioElement.preload = 'auto';      
      audioElement.volume = 0.0;
      audioElement.play()
    });
  }, []); 

  const { allowSounds, playSound } = useSound();

  const HandlePickUpCoin = () => {
    if (allowSounds) {
      playSound(pickUpCoin, 0.5);
    }
  }

  const HandleHit = () => {
    if (allowSounds) {
      playSound(hit, 0.2);
    }
  }

  const HandlePong = () => {
    if (allowSounds) {
      playSound(pong, 1);
    }
  }

  const HandlePluck = () => {
    if (allowSounds) {
      playSound(pluck, 0.6);
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
                <Link className='nes-btn is-primary w-100' to="/perfil" onClick={HandlePickUpCoin}>Perfil</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-success w-100' to="/competencias" onClick={HandleHit}>Competencias</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-warning w-100' to="/experiencia" onClick={HandlePong}>Experiencia</Link>
              </li>
              <li className="mb-4">
                <Link className='nes-btn is-error w-100' to="/estudios" onClick={HandlePluck}>Estudios</Link>
              </li>
            </ul>
          </div>

          <div className='d-none d-sm-block col-4 offset-4 mt-5'>
            <div className="d-flex justify-content-around align-items-end">
              <a href="mailto:mlc74163322@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon gmail is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/marcellolc/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a href="https://github.com/marcellolopez" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-medium"></i>
              </a>
            </div>
          </div>

          <div className='d-sm-none col-12'>
            <div className="d-flex justify-content-around align-items-end">
              <a href="mailto:mlc74163322@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon gmail is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/marcellolc/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a href="https://github.com/marcellolopez" target="_blank" rel="noopener noreferrer">
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
