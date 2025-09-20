import { price } from "./format.js";

export function buildWhatsappLink({ phone, items, total }) {
  const lines = [
    "Hola 👋, quiero hacer un pedidooo:",
    "",
    ...items.map(
      (it) =>
        `• ${it.nombre} x${it.qty} — ${price(it.precio)} c/u = ${price(it.precio * it.qty)}`
    ),
    "",
    `Total: ${price(total)}`,
    "",
    "¿Me confirmas disponibilidad y forma de entrega? ¡Gracias!",
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${3142475575}?text=${text}`;
}
