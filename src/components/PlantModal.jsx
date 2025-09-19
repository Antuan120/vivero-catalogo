import { useEffect, useMemo, useState } from "react";
import Badge from "./Badge.jsx";
import { price } from "../utils/format.js";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import QtyInput from "./QtyInput.jsx";

export default function PlantModal({ open, planta, onClose }) {
  const { items, addItem } = useCart();
  const [added, setAdded] = useState(false);

  // qty en carrito para esta planta
  const cartQty = useMemo(
    () => (items.find((i) => i.id === planta?.id)?.qty || 0),
    [items, planta]
  );

  // stock disponible = stock original - lo que ya está en el carrito
  const available = Math.max((planta?.stock ?? 0) - cartQty, 0);

  // cantidad a agregar
  const [qty, setQty] = useState(available > 0 ? 1 : 0);
  useEffect(() => {
    setQty(available > 0 ? 1 : 0);
    setAdded(false);
  }, [available, planta?.id]);

  if (!open || !planta) return null;

  const handleAdd = () => {
    if (qty <= 0 || available <= 0) return;
    addItem(planta, qty);
    setAdded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="max-w-2xl w-full rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="grid md:grid-cols-2">
          <img src={planta.img} alt={planta.nombre} className="h-64 md:h-full w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold">{planta.nombre}</h2>
            <p className="mt-2 text-slate-600">{planta.descripcion}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Tipo: {planta.tipo}</Badge>
              <Badge>☀️ {planta.luz}</Badge>
              <Badge>💧 {planta.riego}</Badge>
              <Badge>📦 Disponible: {available}</Badge>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold">{price(planta.precio)}</span>
                <QtyInput value={qty} onChange={setQty} min={available > 0 ? 1 : 0} max={available} />
              </div>

              {!added ? (
                <button
                  className="btn-primary w-full"
                  onClick={handleAdd}
                  disabled={available === 0 || qty === 0}
                  title={available === 0 ? "Sin stock disponible" : "Añadir al carrito"}
                >
                  Añadir {qty > 0 ? `(${qty})` : ""} al carrito
                </button>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-semibold">✓ Añadido</span>
                  <Link to="/carrito" className="chip">Ir al carrito</Link>
                </div>
              )}
            </div>

            <button className="mt-6 text-sm text-slate-500 hover:text-slate-700" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
