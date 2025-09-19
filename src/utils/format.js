// Muestra 16.000, 1.250.000, etc. (sin $ ni COP)
export const price = (n) =>
  new Intl.NumberFormat("es-CO", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(Number(n));
