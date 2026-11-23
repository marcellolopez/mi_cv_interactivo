// Paisaje nocturno en pixel art, dibujado en SVG (sin imágenes externas):
// cielo degradado, estrellas que titilan, luna, nubes que avanzan y dos
// cordilleras escalonadas. Los tonos azul/violeta acompañan al recuadro oscuro.
//
// Rendimiento: cada parte animada es una capa propia y solo se anima con
// opacity/transform, así el navegador no redibuja el SVG en cada frame.

const W = 320;
const H = 180;
const viewBox = `0 0 ${W} ${H}`;

// Pseudoaleatorio determinista para que el paisaje sea siempre el mismo.
const rand = (seed) => {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
};

// Silueta escalonada (efecto pixel) a partir de ondas.
const ridge = (step, base, amp, seed) => {
  let d = `M0 ${H}`;
  for (let x = 0; x < W; x += step) {
    const wave = Math.sin((x + seed) / 26) * 0.6 + Math.sin((x + seed * 3) / 11) * 0.4;
    const y = Math.round(H - (base + amp * wave));
    d += ` V${y} H${x + step}`;
  }
  return `${d} V${H} Z`;
};

const stars = Array.from({ length: 70 }, (_, i) => ({
  x: Math.floor(rand(i + 1) * W),
  y: Math.floor(rand(i + 101) * 105),
  size: rand(i + 201) > 0.85 ? 2 : 1,
}));

const StarLayer = ({ odd }) => (
  <svg className={`bg-layer bg-stars ${odd ? 'is-odd' : ''}`} viewBox={viewBox} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges">
    {stars
      .filter((_, i) => i % 2 === (odd ? 1 : 0))
      .map((s) => (
        <rect key={`${s.x}-${s.y}`} x={s.x} y={s.y} width={s.size} height={s.size} fill="#fff" />
      ))}
  </svg>
);

const Clouds = () => (
  <svg viewBox="0 0 320 90" preserveAspectRatio="none" shapeRendering="crispEdges">
    {[
      [10, 40],
      [120, 18],
      [215, 52],
    ].map(([x, y]) => (
      <g key={x} transform={`translate(${x} ${y})`} fill="#5a5296" opacity="0.55">
        <rect x="4" y="0" width="16" height="4" />
        <rect x="0" y="4" width="32" height="4" />
        <rect x="8" y="8" width="20" height="2" />
      </g>
    ))}
  </svg>
);

const Background = () => (
  <div className="background" aria-hidden="true">
    {/* Cielo y luna (estático) */}
    <svg className="bg-layer" viewBox={viewBox} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a0b23" />
          <stop offset="0.55" stopColor="#1b1a4b" />
          <stop offset="1" stopColor="#3d2a63" />
        </linearGradient>
        <radialGradient id="moon-glow">
          <stop offset="0" stopColor="#f6f1c7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f6f1c7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill="url(#sky)" />
      <circle cx="262" cy="34" r="30" fill="url(#moon-glow)" />
      <circle cx="262" cy="34" r="11" fill="#f6f1c7" />
      <rect x="256" y="29" width="3" height="3" fill="#d8d1a0" />
      <rect x="264" y="37" width="4" height="3" fill="#d8d1a0" />
      <rect x="260" y="40" width="2" height="2" fill="#d8d1a0" />
    </svg>

    {/* Estrellas en dos capas que titilan alternadas */}
    <StarLayer />
    <StarLayer odd />

    {/* Nubes: dos copias seguidas que se desplazan en bucle */}
    <div className="bg-clouds">
      <Clouds />
      <Clouds />
    </div>

    {/* Montañas (estático, por delante de las nubes) */}
    <svg className="bg-layer" viewBox={viewBox} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges">
      <path d={ridge(6, 62, 22, 17)} fill="#2c2a66" />
      <path d={ridge(4, 34, 12, 83)} fill="#1a1945" />
      <rect y={H - 10} width={W} height="10" fill="#100f2c" />
    </svg>
  </div>
);

export default Background;
