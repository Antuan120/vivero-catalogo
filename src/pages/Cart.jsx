import { useCart } from "../context/CartContext.jsx";
import { price } from "../utils/format.js";
import { buildWhatsappLink } from "../utils/whatsapp.js";
import { COMPANY } from "../config/company.js";

export default function Cart() {
  const { items, totalQty, totalPrice, setQty, removeItem, clear } = useCart();

  if (!items.length) {
    return (
      <div className="mx-auto max-w-6xl p-6">
        <div className="card p-8 text-center">
          <h2 className="text-xl font-semibold">Tu carrito está vacío</h2>
          <p className="mt-2 text-slate-600">Explora el catálogo y agrega tus plantas favoritas.</p>
          <a href="/catalogo" className="btn-primary mt-4">Ir al catálogo</a>
        </div>
      </div>
    );
  }

  const wa = buildWhatsappLink({
    phone: COMPANY.whatsapp,
    items,
    total: totalPrice,
  });

  return (
    <div className="mx-auto max-w-6xl p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
      {/* Lista de items */}
      <div className="card p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Carrito ({totalQty})</h2>
          <button className="chip" onClick={clear}>Vaciar</button>
        </div>
        <ul className="mt-4 divide-y divide-slate-200">
          {items.map((it) => {
            const max = Number(it.stock) || 0; // stock original de la planta
            const setQtySafe = (q) => setQty(it.id, Math.max(1, Math.min(max, q)));

            return (
              <li key={it.id} className="py-3 flex gap-3 items-center">
                <img src={it.img} alt={it.nombre} className="h-16 w-16 rounded-lg object-cover ring-1 ring-slate-200" />
                <div className="flex-1">
                  <div className="font-medium">{it.nombre}</div>
                  <div className="text-sm text-slate-600">
                    {price(it.precio)} c/u · Subtotal: {price(it.precio * it.qty)}
                  </div>
                  <div className="text-xs text-slate-500">Disponible: {max}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="chip" onClick={() => setQtySafe(it.qty - 1)} disabled={it.qty <= 1}>-</button>
                  <input
                    className="w-12 text-center rounded-lg border border-slate-300 px-2 py-1"
                    type="number"
                    min="1"
                    max={max}
                    value={it.qty}
                    onChange={(e) => setQtySafe(Number(e.target.value))}
                  />
                  <button className="chip" onClick={() => setQtySafe(it.qty + 1)} disabled={it.qty >= max}>+</button>
                </div>

                <button className="chip" onClick={() => removeItem(it.id)}>Quitar</button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Resumen y contacto */}
      <aside className="card p-4 h-max">
        <h3 className="text-lg font-semibold">Resumen</h3>
        <div className="mt-3 flex items-center justify-between">
          <span>Total</span>
          <span className="text-xl font-bold">{price(totalPrice)}</span>
        </div>

        <a href={wa} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full text-center">
          Enviar pedido por WhatsApp
        </a>

        <div className="mt-5 border-t border-slate-200 pt-4 text-sm">
          <div className="font-semibold">Contacto</div>
          <div className="mt-1 text-slate-600">
            <div>{COMPANY.name}</div>
            <div>{COMPANY.address}</div>
            <div>Horario: {COMPANY.hours}</div>
            <div>WhatsApp: {COMPANY.whatsapp}</div>
            <div>Email: {COMPANY.email}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
