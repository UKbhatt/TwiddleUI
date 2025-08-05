const bgColors = [
  "bg-blue-600", "bg-purple-600", "bg-green-600", "bg-red-600",
  "bg-yellow-500", "bg-gray-700", "bg-white"
];
const textColors = [
  "text-white", "text-black", "text-blue-700", "text-yellow-800", "text-purple-300"
];
const hoverColors = [
  "hover:bg-blue-700", "hover:bg-purple-700", "hover:bg-green-700", "hover:bg-red-700"
];
const roundedOptions = [
  "rounded-none", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-full"
];
const shadowOptions = [
  "shadow-none", "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl"
];

export default function CustomizationPanel({ customization, setCustomization, componentType }) {
  const handleChange = (key, value) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="text-slate-300 block mb-1">Background Color</label>
        <div className="flex gap-2">
          {bgColors.map(bg => (
            <button
              key={bg}
              className={`w-7 h-7 rounded ${bg} border-2 ${customization.bgColor === bg ? 'border-blue-400' : 'border-transparent'}`}
              onClick={() => handleChange("bgColor", bg)}
            />
          ))}
        </div>
      </div>
      <div>
        <label className="text-slate-300 block mb-1">Text Color</label>
        <div className="flex gap-2">
          {textColors.map(tc => (
            <button
              key={tc}
              className={`w-7 h-7 rounded flex items-center justify-center ${tc} border-2 ${customization.textColor === tc ? 'border-blue-400' : 'border-transparent'} bg-slate-900`}
              onClick={() => handleChange("textColor", tc)}
            >
              A
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-slate-300 block mb-1">Hover Effect</label>
        <select
          className="rounded p-2 bg-white/20 text-white"
          value={customization.hover}
          onChange={e => handleChange("hover", e.target.value)}
        >
          {hoverColors.map(h => (
            <option value={h} key={h}>{h.replace('hover:', '')}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-slate-300 block mb-1">Rounded</label>
        <select
          className="rounded p-2 bg-white/20 text-white"
          value={customization.rounded}
          onChange={e => handleChange("rounded", e.target.value)}
        >
          {roundedOptions.map(r => (
            <option value={r} key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-slate-300 block mb-1">Shadow</label>
        <select
          className="rounded p-2 bg-white/20 text-white"
          value={customization.shadow}
          onChange={e => handleChange("shadow", e.target.value)}
        >
          {shadowOptions.map(s => (
            <option value={s} key={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
