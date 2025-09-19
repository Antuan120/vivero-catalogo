export default function TypeFilters({ tipos, activos, onToggle, onClear }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tipos.map((t) => {
        const activo = activos.has(t);
        return (
          <button
            key={t}
            onClick={() => onToggle(t)}
            className={`chip ${activo ? "bg-leaf-600 text-white border-leaf-600 hover:bg-leaf-700" : ""}`}
          >
            {t}
          </button>
        );
      })}
      {activos.size > 0 && (
        <button onClick={onClear} className="chip">Limpiar filtros</button>
      )}
    </div>
  );
}
