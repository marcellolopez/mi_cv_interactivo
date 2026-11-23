// Todo el contenido del CV vive aquí. Para actualizar el CV basta con editar este archivo.

export const perfil = {
  nombre: 'Marcello López',
  nombreCompleto: 'Marcello López Cáceres',
  titulo: 'Desarrollador Full Stack y Especialista en RPA',
  ubicacion: 'Santiago, Chile',
  aniosExperiencia: '10+',
  bio: [
    'Desarrollador Full Stack y especialista en automatización RPA con más de 10 años de experiencia creando plataformas web, integraciones y soluciones de automatización para sectores como salud, servicios, estudios de mercado y multicanal.',
    'Experto en PHP/Laravel, Python, Robot Framework, Selenium y OCR, con un fuerte enfoque en la integración de Inteligencia Artificial para optimizar procesos complejos y reducir costos operativos.',
    'Destaco por mi enfoque analítico, creatividad técnica y capacidad para transformar necesidades de negocio en soluciones mantenibles.',
  ],
};

// color: is-primary | is-success | is-warning | is-error
export const competencias = [
  {
    categoria: 'Automatización & IA',
    color: 'is-success',
    items: ['Robot Framework', 'Selenium', 'RPA', 'OCR', 'n8n', 'OpenAI', 'Gemini'],
  },
  {
    categoria: 'Backend',
    color: 'is-primary',
    items: ['PHP (Laravel)', 'Python', 'C# (.NET)', 'Node.js', 'APIs REST'],
  },
  {
    categoria: 'Frontend',
    color: 'is-warning',
    items: ['React', 'Vue 3', 'JavaScript', 'HTML5', 'CSS', 'Tailwind', 'Vite'],
  },
  {
    categoria: 'Datos & Infraestructura',
    color: 'is-error',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'Power BI', 'Docker', 'Git'],
  },
  {
    categoria: 'Metodologías & Otros',
    color: 'is-primary',
    items: ['Scrum', 'Kanban', 'MVC', 'BPMN', 'Linux', 'cPanel', 'VS Code'],
  },
];

export const fortalezas = ['Resolución de problemas', 'Innovación técnica', 'Autonomía'];

export const experiencias = [
  {
    puesto: 'Desarrollador RPA',
    fecha: 'jun 2025 - Actualidad',
    actual: true,
    empresa: 'BC Digital Services',
    proyectos: [
      'Liderazgo técnico en 4 proyectos de alta complejidad, diseñando automatizaciones robustas para procesos críticos.',
      'Implementación de Robot Framework, Python y OCR con integraciones avanzadas en SQL.',
      'Optimización de costos y tiempos mediante el uso estratégico de IA y n8n.',
    ],
    tecnologias: ['Robot Framework', 'Python', 'OCR', 'SQL', 'IA', 'n8n'],
  },
  {
    puesto: 'Desarrollador Senior',
    fecha: 'ene 2024 - dic 2024',
    empresa: 'Celmedia Mobile',
    proyectos: [
      'Desarrollo multicanal con Laravel y Vue 3 para clientes corporativos.',
      'Integración de LLMs (OpenAI/Gemini) en soluciones de mensajería y chatbots automatizados.',
    ],
    tecnologias: ['Laravel', 'Vue 3', 'OpenAI', 'Gemini'],
  },
  {
    puesto: 'Desarrollador',
    fecha: 'jun 2023 - ene 2024',
    empresa: 'RedSalud CCHC',
    proyectos: [
      'Ejecución del 60% de las mejoras en la plataforma interna de honorarios médicos.',
      'Resolución de incidencias críticas en entornos de salud utilizando Laravel y PostgreSQL.',
    ],
    tecnologias: ['Laravel', 'PostgreSQL'],
  },
  {
    puesto: 'Programador Senior',
    fecha: 'nov 2022 - jun 2023',
    empresa: 'EOL Research',
    proyectos: ['Desarrollo de plataformas de estudios de mercado y mantenimiento de sistemas legacy en PHP/Laravel.'],
    tecnologias: ['PHP', 'Laravel'],
  },
  {
    puesto: 'Analista Programador',
    fecha: 'feb 2020 - nov 2022',
    empresa: 'Grupo Cetep',
    proyectos: [
      'Evolución de plataforma de teleconsultas médicas con PHP y Laravel.',
      'Integraciones con botones de pago, Power BI y RPA. Liderazgo de equipo de innovación.',
    ],
    tecnologias: ['PHP', 'Laravel', 'Power BI', 'RPA'],
  },
  {
    puesto: 'Desarrollador PHP',
    fecha: 'may 2019 - feb 2020',
    empresa: 'Ingenia Global / Inveb Chile',
    proyectos: ['Creación de APIs para sector salud y desarrollo de proyectos con Laravel y PostgreSQL.'],
    tecnologias: ['APIs', 'Laravel', 'PostgreSQL'],
  },
];

export const formacion = [{ titulo: 'Analista Programador', fecha: '2013 - 2015', institucion: 'INACAP' }];

// fecha e institucion son opcionales.
export const cursos = [
  { titulo: 'React JS', fecha: 'sep 2023', institucion: 'Coderhouse' },
  { titulo: 'IA para Programadores', fecha: 'dic 2023', institucion: 'Coderhouse' },
  { titulo: 'C# Avanzado', fecha: 'ene 2024', institucion: 'LinkedIn Learning' },
  { titulo: 'Fundamentos de IA' },
  { titulo: 'Laravel', fecha: 'abr 2019', institucion: 'Udemy' },
  { titulo: 'JavaScript', fecha: 'ago 2017', institucion: 'CodeAcademy' },
];

export const contacto = {
  email: 'mlc74163322@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marcellolc/',
  github: 'https://github.com/marcellolopez',
};
