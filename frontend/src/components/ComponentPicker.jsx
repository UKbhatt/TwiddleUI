const COMPONENTS = [
  { label: "Button", value: "button" },
  { label: "Card", value: "card" },
  { label: "Input", value: "input" },
];

export default function ComponentPicker({ value, onChange }) {
  return (
    <div className="mb-5">
      <label className="text-slate-300 mb-2 block">Component Type</label>
      <div className="flex gap-4">
        {COMPONENTS.map((c) => (
          <button
            key={c.value}
            className={`px-4 py-2 rounded-lg font-semibold border
              ${value === c.value
                ? "bg-blue-600 text-white border-blue-700 scale-105"
                : "bg-white/10 text-white border-transparent hover:bg-white/20"}
              transition-all`}
            onClick={() => onChange(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
