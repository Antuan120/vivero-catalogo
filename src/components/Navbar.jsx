export default function Navbar({ rightSlot }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/catalogo" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold shadow">
            V
          </span>
          <span className="font-bold">Vivero</span>
        </a>
        <nav className="flex items-center gap-3 text-sm text-slate-600">
          <a className="chip" href="/catalogo">Catálogo</a>
          <a className="chip" href="/contacto">Contacto</a>
          {rightSlot}
        </nav>
      </div>
    </header>
  );
}
