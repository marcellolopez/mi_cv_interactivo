// Personaje original en pixel art (desarrollador con polera azul), dibujado
// con un solo elemento y box-shadow: cada carácter del mapa es un píxel.
const PX = 3;

const COLORS = {
  H: '#3b2314', // pelo
  S: '#f2c39b', // piel
  E: '#0a0b23', // ojos
  B: '#209cee', // polera
  W: '#ffffff', // detalle de la polera
  P: '#2c2a66', // pantalón
  K: '#0a0b23', // zapatos
};

const SPRITE = [
  '..HHHH..',
  '.HHHHHH.',
  '.HSSSSH.',
  '.SESSES.',
  '..SSSS..',
  '.BBWWBB.',
  'BBBBBBBB',
  'SBBBBBBS',
  '.BBBBBB.',
  '.PP..PP.',
  '.KK..KK.',
];

const shadow = SPRITE.flatMap((row, y) =>
  [...row].map((c, x) => (COLORS[c] ? `${(x + 1) * PX}px ${(y + 1) * PX}px 0 ${COLORS[c]}` : null)),
)
  .filter(Boolean)
  .join(',');

const PixelHero = () => (
  <span className="pixel-hero" style={{ width: SPRITE[0].length * PX, height: SPRITE.length * PX }}>
    <span style={{ width: PX, height: PX, boxShadow: shadow, marginLeft: -PX, marginTop: -PX }} />
  </span>
);

export default PixelHero;
