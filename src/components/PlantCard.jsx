import Badge from "./Badge.jsx";
import { price } from "../utils/format.js";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function PlantCard({ p, onOpen }) {
  const { addItem } = useCart();

  return (
    <div className="card overflow-hidden">
      <Link to={`/planta/${p.id}`} className="block">
        <div className="relative aspect-[4/3] bg-cream">
          <img src={p.img} alt={p.nombre} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute bottom-2 right-2 rounded-xl bg-white/90 px-3 py-1 text-xs md:text-sm font-semibold ring-1 ring-slate-200 whitespace-nowrap">
            {price(p.precio)}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-bark">{p.nombre}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.descripcion}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge>{p.tipo}</Badge>
          <Badge>☀️ {p.luz}</Badge>
          <Badge>💧 {p.riego}</Badge>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button className="btn-primary" onClick={() => onOpen?.(p)}>Ver rápido</button>
          <button className="chip" onClick={() => addItem(p, 1)}>Añadir</button>
        </div>
      </div>
    </div>
  );
}
