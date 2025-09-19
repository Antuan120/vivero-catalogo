import { useMemo, useState } from "react";

export default function useCatalog(PLANTS) {
  const [q, setQ] = useState("");
  const [seleccionTipos, setSeleccionTipos] = useState(new Set());
  const [orden, setOrden] = useState("relevancia");

  const tipos = useMemo(() => [...new Set(PLANTS.map((p) => p.tipo))], [PLANTS]);

  const toggleTipo = (t) => {
    setSeleccionTipos((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  };

  const clearTipos = () => setSeleccionTipos(new Set());

  const resultados = useMemo(() => {
    let list = PLANTS.filter((p) =>
      (p.nombre + " " + p.tipo + " " + p.descripcion)
        .toLowerCase()
        .includes(q.toLowerCase())
    );
    if (seleccionTipos.size) list = list.filter((p) => seleccionTipos.has(p.tipo));
    switch (orden) {
      case "precioAsc": list.sort((a, b) => a.precio - b.precio); break;
      case "precioDesc": list.sort((a, b) => b.precio - a.precio); break;
      case "stock": list.sort((a, b) => b.stock - a.stock); break;
      default: break; // relevancia: orden original
    }
    return list;
  }, [PLANTS, q, seleccionTipos, orden]);

  return {
    // state
    q, setQ,
    tipos, seleccionTipos, orden, setOrden,
    // actions
    toggleTipo, clearTipos,
    // derived
    resultados,
  };
}
