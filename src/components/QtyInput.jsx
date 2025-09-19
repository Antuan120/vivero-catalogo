export default function QtyInput({ value, onChange, min = 1, max = Infinity }) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  const onType = (e) => {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    onChange(Math.max(min, Math.min(max, v)));
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button className="chip" onClick={dec} disabled={value <= min}>-</button>
      <input
        className="w-14 text-center rounded-lg border border-slate-300 px-2 py-1"
        type="number"
        min={min}
        max={max === Infinity ? undefined : max}
        value={value}
        onChange={onType}
      />
      <button className="chip" onClick={inc} disabled={value >= max}>+</button>
    </div>
  );
}
