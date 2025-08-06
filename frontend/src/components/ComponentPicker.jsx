import { FaRegSquare, FaRegUser, FaRegEdit } from "react-icons/fa";
const COMPONENTS = [
  { label: "Button", value: "button", color: "from-blue-500 to-blue-400", icon: <FaRegSquare /> },
  { label: "Card", value: "card", color: "from-purple-500 to-fuchsia-400", icon: <FaRegUser /> },
  { label: "Input", value: "input", color: "from-cyan-500 to-blue-400", icon: <FaRegEdit /> }
];

export default function ComponentList({ value, onChange }) {
  return (
    <div className="sticky top-0 h-screen flex flex-col items-start gap-2 py-10 px-4 bg-black/20 border-r border-white/10 min-w-[170px]">
      <h2 className="mb-5 font-bold text-lg text-slate-200 tracking-wider">Components</h2>
      {COMPONENTS.map((comp) => (
        <button
          key={comp.value}
          className={`
            group flex items-center gap-3 px-3 py-2 w-full rounded-lg font-semibold border-2
            bg-gradient-to-r ${comp.color}
            transition-all
            ${
              value === comp.value
                ? "scale-105 ring-2 ring-white text-white border-white shadow-lg"
                : "bg-opacity-80 border-transparent text-white/80 hover:bg-opacity-100 hover:border-blue-300"
            }
          `}
          tabIndex={0}
          onClick={() => onChange(comp.value)}
        >
          <span className="text-xl">{comp.icon}</span>
          <span className="tracking-wide">{comp.label}</span>
        </button>
      ))}
    </div>
  );
}
