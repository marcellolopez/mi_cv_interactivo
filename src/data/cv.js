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
    items: ['Robot Framework', 'Selenium', 'RPA', 'OCR', 'n8n', 'OpenAI', 'Gemini', 'Alexa Skills'],
  },
  {
    categoria: 'Backend',
    color: 'is-primary',
    items: ['PHP (Laravel)', 'CodeIgniter', 'Python', 'C# (.NET)', 'Node.js', 'APIs REST'],
  },
  {
    categoria: 'Frontend',
    color: 'is-warning',
    items: ['React', 'Vue 3', 'JavaScript', 'jQuery', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind', 'Vite'],
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

// De la más reciente a la más antigua.
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
    proyectos: [
      'Desarrollo de plataformas de estudios de mercado y mantenimiento de sistemas legacy en PHP/Laravel.',
      'Integraciones con IA (ChatGPT) en distintos proyectos.',
    ],
    tecnologias: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'ChatGPT'],
  },
  {
    puesto: 'Analista Programador (DTI)',
    fecha: 'feb 2020 - nov 2022',
    empresa: 'Grupo Cetep',
    proyectos: [
      'Evolución de plataforma de teleconsultas médicas con PHP y Laravel.',
      'Integraciones con botones de pago, Power BI y RPA. Liderazgo de equipo de innovación.',
      'Desarrollo de Alexa Skills para altavoces inteligentes y automatizaciones con Robot Framework.',
    ],
    tecnologias: ['PHP', 'Laravel', 'Power BI', 'Robot Framework', 'Alexa Skills'],
  },
  {
    puesto: 'Analista de TI',
    fecha: 'dic 2019 - feb 2020',
    empresa: 'Ingenia Global',
    proyectos: ['Creación de APIs para un cliente del sector salud.'],
    tecnologias: ['Laravel', 'PostgreSQL', 'jQuery', 'Bootstrap'],
  },
  {
    puesto: 'Desarrollador PHP',
    fecha: 'may 2019 - nov 2019',
    empresa: 'Inveb Chile',
    proyectos: ['Diversos proyectos, desarrollados en su mayoría con Laravel y PostgreSQL.'],
    tecnologias: ['Laravel', 'PostgreSQL'],
  },
  {
    puesto: 'Encargado de Informática Latam',
    fecha: 'ago 2018 - abr 2019',
    empresa: 'Rimisp - Centro Latinoamericano para el Desarrollo Rural',
    proyectos: ['Encargado del área de informática para Latinoamérica.'],
    tecnologias: ['Soporte TI', 'Infraestructura'],
  },
  {
    puesto: 'Analista Programador',
    fecha: 'dic 2016 - feb 2018',
    empresa: 'EOL Research',
    proyectos: ['Programación de plataformas para diferentes clientes.'],
    tecnologias: ['PHP', '.NET', 'MySQL', 'Bootstrap', 'jQuery'],
  },
  {
    puesto: 'Desarrollador de plataformas web',
    fecha: 'abr 2016 - dic 2016',
    empresa: 'Soluciones Informáticas ADMSYS',
    proyectos: [
      'Cultivamente: trivia para preparar el SIMCE, con seguimiento para profesores y sostenedores.',
      'Cargofacil: plataforma de transporte de carga donde también se publican trabajos de fletes.',
    ],
    tecnologias: ['Laravel 4.2', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    puesto: 'Desarrollador web Full Stack',
    fecha: 'mar 2016 - jul 2016',
    empresa: 'Integriti',
    proyectos: ['Corrección de excepciones y nuevas funciones en la plataforma de la Cámara Chilena de la Construcción.'],
    tecnologias: ['PHP'],
  },
  {
    puesto: 'Jefe de proyectos, programador y analista',
    fecha: 'ene 2016 - may 2016',
    empresa: 'MoviIT',
    proyectos: [
      'Mejoras y correcciones en un sistema de encuestas vía SMS, desarrollado con CodeIgniter.',
      'Jefe de proyecto para la migración de la plataforma a apps nativas de iOS y Android.',
    ],
    tecnologias: ['PHP', 'CodeIgniter', 'iOS', 'Android'],
  },
  {
    puesto: 'Desarrollador',
    fecha: 'ene 2016 - feb 2016',
    empresa: '2pc.cl',
    proyectos: ['Centro Médico Padre Hurtado: registro de profesionales y pacientes y agenda de horas con cada especialista.'],
    tecnologias: ['Laravel 4.2', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    puesto: 'Desarrollador web',
    fecha: 'ene 2015 - ene 2016',
    empresa: 'Aguas Décima',
    proyectos: ['Sistema web de registro de clientes, facturación y pago en línea, con diseño responsive.'],
    tecnologias: ['PHP', 'Laravel', 'Bootstrap', 'CSS'],
  },
];

// tipo: 'web' | 'ia' (automatización e inteligencia artificial). url es opcional.
export const proyectos = [
  {
    nombre: 'Automatizaciones RPA críticas',
    cliente: 'BC Digital Services',
    anio: '2025',
    tipo: 'ia',
    descripcion: '4 proyectos de alta complejidad que automatizan procesos críticos, con OCR e integraciones SQL.',
    tecnologias: ['Robot Framework', 'Python', 'OCR', 'SQL'],
  },
  {
    nombre: 'Flujos inteligentes con n8n',
    cliente: 'BC Digital Services',
    anio: '2025',
    tipo: 'ia',
    descripcion: 'Uso estratégico de IA y n8n para reducir costos y tiempos de operación.',
    tecnologias: ['n8n', 'IA'],
  },
  {
    nombre: 'Chatbots con IA',
    cliente: 'Celmedia Mobile',
    anio: '2024',
    tipo: 'ia',
    descripcion: 'Integración de LLMs en soluciones de mensajería y chatbots automatizados para clientes corporativos.',
    tecnologias: ['OpenAI', 'Gemini', 'Laravel'],
  },
  {
    nombre: 'Plataforma multicanal',
    cliente: 'Celmedia Mobile',
    anio: '2024',
    tipo: 'web',
    descripcion: 'Desarrollo multicanal para clientes corporativos.',
    tecnologias: ['Laravel', 'Vue 3'],
  },
  {
    nombre: 'Honorarios médicos',
    cliente: 'RedSalud CCHC',
    anio: '2023',
    tipo: 'web',
    descripcion: 'Plataforma interna de honorarios médicos: ejecuté el 60% de sus mejoras y resolví incidencias críticas.',
    tecnologias: ['Laravel', 'PostgreSQL'],
  },
  {
    nombre: 'Estudios de mercado con IA',
    cliente: 'EOL Research',
    anio: '2023',
    tipo: 'ia',
    descripcion: 'Plataformas de estudios de mercado con integraciones de ChatGPT.',
    tecnologias: ['PHP', 'Laravel', 'MySQL', 'ChatGPT'],
  },
  {
    nombre: 'Teleconsultas médicas',
    cliente: 'Grupo Cetep',
    anio: '2020 - 2022',
    tipo: 'web',
    descripcion: 'Evolución de la plataforma de teleconsultas, con botones de pago e integración con Power BI.',
    tecnologias: ['PHP', 'Laravel', 'Power BI'],
  },
  {
    nombre: 'Alexa Skills',
    cliente: 'Grupo Cetep',
    anio: '2020 - 2022',
    tipo: 'ia',
    descripcion: 'Skills de voz para altavoces inteligentes, dentro del equipo de innovación.',
    tecnologias: ['Alexa Skills'],
  },
  {
    nombre: 'Robots RPA',
    cliente: 'Grupo Cetep',
    anio: '2020 - 2022',
    tipo: 'ia',
    descripcion: 'Automatización de procesos con robots de software.',
    tecnologias: ['Robot Framework', 'RPA'],
  },
  {
    nombre: 'APIs para el sector salud',
    cliente: 'Ingenia Global',
    anio: '2019',
    tipo: 'web',
    descripcion: 'Creación de APIs para un cliente del sector salud.',
    tecnologias: ['Laravel', 'PostgreSQL', 'jQuery', 'Bootstrap'],
  },
  {
    nombre: 'Cultivamente',
    cliente: 'ADMSYS',
    anio: '2016',
    tipo: 'web',
    descripcion: 'Trivia para que estudiantes de básica y media preparen el SIMCE, con seguimiento para profesores y sostenedores.',
    tecnologias: ['Laravel 4.2', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    nombre: 'Cargofacil',
    cliente: 'ADMSYS',
    anio: '2016',
    tipo: 'web',
    descripcion: 'Plataforma para transportistas y empresas de carga, donde también las personas publican trabajos de fletes.',
    tecnologias: ['Laravel 4.2', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    nombre: 'Encuestas vía SMS',
    cliente: 'MoviIT',
    anio: '2016',
    tipo: 'web',
    descripcion: 'Mejoras al sistema de encuestas por SMS y jefatura del proyecto de migración a apps nativas iOS y Android.',
    tecnologias: ['PHP', 'CodeIgniter'],
  },
  {
    nombre: 'Plataforma CCHC',
    cliente: 'Integriti',
    anio: '2016',
    tipo: 'web',
    descripcion: 'Corrección de excepciones y nuevas funciones para la Cámara Chilena de la Construcción.',
    tecnologias: ['PHP'],
  },
  {
    nombre: 'Centro Médico Padre Hurtado',
    cliente: '2pc.cl',
    anio: '2016',
    tipo: 'web',
    descripcion: 'Registro de profesionales y pacientes, con agenda de horas por especialista.',
    tecnologias: ['Laravel 4.2', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    nombre: 'Facturación y pago en línea',
    cliente: 'Aguas Décima',
    anio: '2015',
    tipo: 'web',
    descripcion: 'Registro de clientes, facturación y pago en línea, con diseño responsive.',
    tecnologias: ['PHP', 'Laravel', 'Bootstrap'],
  },
  {
    nombre: 'Este CV interactivo',
    cliente: 'Proyecto personal',
    tipo: 'web',
    descripcion: 'Currículum con estética de videojuego retro: sonidos, animaciones y monedas por cada sección visitada.',
    tecnologias: ['React', 'Vite', 'NES.css', 'Howler'],
    url: 'https://github.com/marcellolopez/mi_cv_interactivo',
  },
];

export const formacion = [{ titulo: 'Analista Programador', fecha: '2013 - 2015', institucion: 'INACAP' }];

// fecha e institucion son opcionales.
export const cursos = [
  { titulo: 'React JS', fecha: 'sep 2023', institucion: 'Coderhouse' },
  { titulo: 'IA para Programadores', fecha: 'dic 2023', institucion: 'Coderhouse' },
  { titulo: 'C# Avanzado', fecha: 'ene 2024', institucion: 'LinkedIn Learning' },
  { titulo: 'React esencial' },
  { titulo: 'Fundamentos de IA' },
  { titulo: 'Laravel', fecha: 'abr 2019', institucion: 'Udemy' },
  { titulo: 'jQuery' },
  { titulo: 'JavaScript', fecha: 'ago 2017', institucion: 'CodeAcademy' },
];

export const idiomas = [
  { titulo: 'Español', nivel: 'Nativo' },
  { titulo: 'Portugués', nivel: 'Básico' },
  { titulo: 'Inglés', nivel: 'Básico' },
];

export const contacto = {
  email: 'mlc74163322@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marcellolc/',
  github: 'https://github.com/marcellolopez',
};
