import { useParams, Link } from "react-router-dom";
import plants from "../data/plants.js";
import Badge from "../components/Badge.jsx";
import { price } from "../utils/format.js";
import { useCart } from "../context/CartContext.jsx";
import QtyInput from "../components/QtyInput.jsx";
import { useMemo, useState } from "react";

export default function PlantDetail() {
  const { id } = useParams();
  const planta = plants.find((p) => p.id === id);
  const { items, addItem } = useCart();

  const cartQty = useMemo(
    () => (items.find((i) => i.id === id)?.qty || 0),
    [items, id]
  );
  const available = Math.max((planta?.stock ?? 0) - cartQty, 0);
  const [qty, setQty] = useState(available > 0 ? 1 : 0);

  if (!planta) return <div className="mx-auto max-w-6xl p-6">Planta no encontrada.</div>;

  return (
    <div className="mx-auto max-w-6xl p-4">
      <Link className="text-sm text-emerald-700 hover:underline" to="/catalogo">← Volver al catálogo</Link>
      <div className="mt-4 grid md:grid-cols-2 gap-5">
        <div className="card overflow-hidden">
          <img src={planta.img} alt={planta.nombre} className="w-full h-full object-cover" />
        </div>
        <div className="card p-6">
          <h2 className="text-3xl font-bold">{planta.nombre}</h2>
          <p className="mt-2 text-slate-600">{planta.descripcion}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge>{planta.tipo}</Badge>
            <Badge>☀️ {planta.luz}</Badge>
            <Badge>💧 {planta.riego}</Badge>
            <Badge>📦 Disponible: {available}</Badge>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-extrabold">{price(planta.precio)}</span>
            <QtyInput value={qty} onChange={setQty} min={available > 0 ? 1 : 0} max={available} />
          </div>

          <button
            className="btn-primary mt-4"
            onClick={() => addItem(planta, qty)}
            disabled={available === 0 || qty === 0}
            title={available === 0 ? "Sin stock disponible" : "Añadir al carrito"}
          >
            Añadir {qty > 0 ? `(${qty})` : ""} al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
