// Duración de un trabajo a partir de su fecha en texto, p. ej. "jun 2025 - Actualidad".
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const parse = (texto) => {
  const match = texto.trim().toLowerCase().match(/^([a-z]{3})\w*\s+(\d{4})$/);
  if (!match) return null;
  const mes = MESES.indexOf(match[1]);
  return mes === -1 ? null : { mes, anio: Number(match[2]) };
};

// Meses incluyendo el mes de inicio y el de término.
export const monthsBetween = (fecha) => {
  const [desde, hasta = ''] = fecha.split(' - ');
  const inicio = parse(desde);
  if (!inicio) return 1;
  const hoy = new Date();
  const fin = parse(hasta) ?? { mes: hoy.getMonth(), anio: hoy.getFullYear() };
  return Math.max(1, (fin.anio - inicio.anio) * 12 + (fin.mes - inicio.mes) + 1);
};

export const formatDuration = (meses) => {
  const anios = Math.floor(meses / 12);
  const resto = meses % 12;
  const partes = [];
  if (anios) partes.push(`${anios} ${anios === 1 ? 'año' : 'años'}`);
  if (resto) partes.push(`${resto} ${resto === 1 ? 'mes' : 'meses'}`);
  return partes.join(' ');
};
