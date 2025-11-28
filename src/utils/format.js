export const price = (n) =>
  new Intl.NumberFormat("es-CO", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(Number(n));
