export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-slate-700 border-slate-200">
      {children}
    </span>
  );
}
