// Gamificación: cada sección visitada suma una moneda. Al completar todas,
// se invita a la persona a pasar por Contacto.
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../Sounds/Sounds';

export const SECTIONS = {
  perfil: 'Perfil',
  habilidades: 'Habilidades',
  experiencia: 'Experiencia',
  estudios: 'Estudios',
};
const TOTAL = Object.keys(SECTIONS).length;
const STORAGE_KEY = 'cv-visited';

const readStored = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored.filter((s) => s in SECTIONS) : [];
  } catch {
    return [];
  }
};

const ProgressContext = createContext(null);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress debe usarse dentro de <ProgressProvider>');
  return context;
};

// Marca la sección como visitada al montar la pantalla.
export const useVisit = (section) => {
  const { markVisited } = useProgress();
  useEffect(() => {
    markVisited(section);
  }, [markVisited, section]);
};

export const ProgressProvider = ({ children }) => {
  const { playSound } = useSound();
  const [visited, setVisited] = useState(readStored);
  const visitedRef = useRef(visited);
  const [toast, setToast] = useState(null);

  const markVisited = useCallback(
    (section) => {
      if (visitedRef.current.includes(section)) return;
      const next = [...visitedRef.current, section];
      visitedRef.current = next;
      setVisited(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Sin almacenamiento disponible: el progreso dura solo esta visita.
      }

      const completed = next.length === TOTAL;
      setToast(
        completed
          ? { id: Date.now(), title: '¡CV completado!', text: 'Ya conoces todo mi perfil. ¿Conversamos?', link: true }
          : { id: Date.now(), title: '+1 moneda', text: `${SECTIONS[section]} desbloqueado (${next.length}/${TOTAL})` },
      );
      setTimeout(() => playSound(completed ? 'enter' : 'pickUpCoin', 0.4), 250);
    },
    [playSound],
  );

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(null), toast.link ? 6000 : 3000);
    return () => clearTimeout(id);
  }, [toast]);

  const value = useMemo(() => ({ visited, total: TOTAL, markVisited }), [visited, markVisited]);

  return (
    <ProgressContext.Provider value={value}>
      {children}
      <div className="toast-region" role="status" aria-live="polite">
        {toast && (
          <div key={toast.id} className="toast nes-container is-dark is-rounded">
            <i className={`nes-icon ${toast.link ? 'trophy' : 'coin'} is-small`} aria-hidden="true"></i>
            <div>
              <p className="toast-title">{toast.title}</p>
              <p className="toast-text">{toast.text}</p>
              {toast.link && (
                <Link to="/contacto" className="nes-btn is-success toast-link" onClick={() => setToast(null)}>
                  Ir a Contacto
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </ProgressContext.Provider>
  );
};
