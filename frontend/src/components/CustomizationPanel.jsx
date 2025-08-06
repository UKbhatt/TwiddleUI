import {
    bgColors,
    textColors,
    hoverColors,
    roundedOptions,
    shadowOptions,
    fontSizes,
    fontStyles,
    fontWeights,
    borderWidths,
    borderColors,
    pxOptions,
    pyOptions,
    animations
} from "../data/styleData" ;

export default function CustomizationPanel({ customization, setCustomization, componentType }) {
  const handleChange = (key, value) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };


  return (
    <div className="w-full bg-gradient-to-b from-white/10 via-white/5 to-slate-900/30 backdrop-blur-md rounded-2xl 
    shadow-xl p-6 space-y-7 border border-white/10 transition-all">
      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">🎨 Customize Style</h3>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <div className="flex-1">
          <label className="text-slate-200 font-semibold mb-1 block">Background</label>
          <div className="flex gap-2 flex-wrap">
            {bgColors.map(bg => (
              <button
                key={bg}
                title={bg.replace('bg-', '').replace('-', ' ')}
                className={`w-8 h-8 rounded-full border-2 
                  ${bg} 
                  ${customization.bgColor === bg ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/10'} 
                  hover:scale-105 transition-all`}
                onClick={() => handleChange("bgColor", bg)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <label className="text-slate-200 font-semibold mb-1 block">Text</label>
          <div className="flex gap-2 flex-wrap">
            {textColors.map(tc => (
              <button
                key={tc}
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${tc}
                 ${customization.textColor === tc ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/10'} bg-slate-900 font-bold hover:scale-105 transition-all`}
                onClick={() => handleChange("textColor", tc)}
              >
                A
              </button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-white/10 my-2" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Hover Effect</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.hover}
            onChange={e => handleChange("hover", e.target.value)}
          >
            {hoverColors.map(h => (
              <option value={h} key={h}>{h.replace('hover:', '')}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Rounded</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.rounded}
            onChange={e => handleChange("rounded", e.target.value)}
          >
            {roundedOptions.map(r => (
              <option value={r} key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Shadow</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.shadow}
            onChange={e => handleChange("shadow", e.target.value)}
          >
            {shadowOptions.map(s => (
              <option value={s} key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Font Size</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.fontSize || "text-base"}
            onChange={e => handleChange("fontSize", e.target.value)}
          >
            {fontSizes.map(f => (
              <option value={f} key={f}>{f.replace('text-', '')}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Font Style</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.fontStyle || "not-italic"}
            onChange={e => handleChange("fontStyle", e.target.value)}
          >
            {fontStyles.map(fs => (
              <option value={fs} key={fs}>{fs === "not-italic" ? "Normal" : "Italic"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Font Weight</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.font || "font-normal"}
            onChange={e => handleChange("font", e.target.value)}
          >
            {fontWeights.map(fw => (
              <option value={fw} key={fw}>{fw.replace('font-', '')}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Border Width</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.borderWidth || "border"}
            onChange={e => handleChange("borderWidth", e.target.value)}
          >
            {borderWidths.map(bw => (
              <option value={bw} key={bw}>{bw.replace('border-', '') || "Default"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Border Color</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.borderColor || "border-transparent"}
            onChange={e => handleChange("borderColor", e.target.value)}
          >
            {borderColors.map(bc => (
              <option value={bc} key={bc}>{bc.replace('border-', '')}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Padding X</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.px || "px-6"}
            onChange={e => handleChange("px", e.target.value)}
          >
            {pxOptions.map(px => (
              <option value={px} key={px}>{px}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Padding Y</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.py || "py-2"}
            onChange={e => handleChange("py", e.target.value)}
          >
            {pyOptions.map(py => (
              <option value={py} key={py}>{py}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-slate-200 font-semibold mb-1 block">Animation</label>
          <select
            className="rounded-lg p-2 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={customization.animation || "none"}
            onChange={e => handleChange("animation", e.target.value)}
          >
            {animations.map(a => (
              <option value={a} key={a}>{a === "none" ? "None" : a.replace("animate-", "")}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
