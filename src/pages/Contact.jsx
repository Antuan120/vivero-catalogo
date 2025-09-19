import { COMPANY } from "../config/company.js";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl p-4 grid gap-4 md:grid-cols-2">
      <div className="card p-6">
        <h2 className="text-2xl font-bold">{COMPANY.name}</h2>
        <p className="mt-2 text-slate-600">
          Estamos para ayudarte a elegir la planta ideal para tu espacio.
        </p>
        <div className="mt-4 space-y-2 text-slate-700">
          <div><strong>Dirección:</strong> {COMPANY.address}</div>
          <div><strong>Horario:</strong> {COMPANY.hours}</div>
          <div><strong>Email:</strong> {COMPANY.email}</div>
          <div><strong>WhatsApp:</strong> {COMPANY.whatsapp}</div>
        </div>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hola, quiero más info sobre sus plantas 🌿")}`}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-5 inline-flex"
        >
          Escribir por WhatsApp
        </a>
      </div>

      <div className="card overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
          alt="Vivero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
