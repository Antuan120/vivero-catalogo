export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar por nombre, tipo, uso…"
      className="w-full max-w-md rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
}
