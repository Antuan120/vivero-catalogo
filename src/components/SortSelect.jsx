export default function SortSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-slate-300 px-3 py-2"
    >
      <option value="relevancia">Orden: Relevancia</option>
      <option value="precioAsc">Precio ↑</option>
      <option value="precioDesc">Precio ↓</option>
    </select>
  );
}
