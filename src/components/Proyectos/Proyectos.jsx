import { useState } from 'react';
import Screen from '../Screen/Screen';
import { useSound } from '../Sounds/Sounds';
import { useVisit } from '../Progress/Progress';
import { proyectos } from '../../data/cv';

const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'ia', label: 'Automatización & IA' },
];

const TIPO_LABEL = { web: 'Web', ia: 'Automatización & IA' };

const Proyectos = () => {
  useVisit('proyectos');
  const { playSound } = useSound();
  const [filtro, setFiltro] = useState('todos');

  const visibles = filtro === 'todos' ? proyectos : proyectos.filter((p) => p.tipo === filtro);

  const elegir = (id) => {
    if (id === filtro) return;
    playSound('hit', 0.15);
    setFiltro(id);
  };

  return (
    <Screen title="Proyectos">
      <p className="screen-intro">Algunos de los proyectos que he construido o en los que he participado.</p>

      <div className="project-filters" role="group" aria-label="Filtrar proyectos">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`nes-btn ${filtro === f.id ? 'is-warning' : ''}`}
            aria-pressed={filtro === f.id}
            onClick={() => elegir(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {visibles.length} proyectos
      </p>

      {/* La key cambia con el filtro para repetir la animación de entrada. */}
      <ul className="projects" key={filtro}>
        {visibles.map((p, index) => (
          <li key={p.nombre} className={`project is-${p.tipo}`} style={{ '--i': index }}>
            <article className="nes-container is-dark with-title">
              <p className="title">{p.anio || TIPO_LABEL[p.tipo]}</p>
              <h2 className="project-name">{p.nombre}</h2>
              <p className="project-client">{p.cliente}</p>
              <p className="project-desc">{p.descripcion}</p>
              <ul className="tags" aria-label="Tecnologías">
                {p.tecnologias.map((tec) => (
                  <li key={tec} className="tag">
                    {tec}
                  </li>
                ))}
              </ul>
              {p.url && (
                <a className="nes-btn is-primary project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                  Ver código <span className="visually-hidden">(abre en otra pestaña)</span>
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Screen>
  );
};

export default Proyectos;
