import { useState, useEffect } from "react";
import ComponentPicker from "./components/ComponentPicker";
import CustomizationPanel from "./components/customizationPanel";
import LivePreview from "./components/LivePreview";
import ExportCode from "./components/ExportCode";

export default function Playground({ onBack }) {
  const [componentType, setComponentType] = useState("button");
  const [customization, setCustomization] = useState({
    bgColor: "bg-blue-600",
    textColor: "text-white",
    hover: "hover:bg-blue-700",
    rounded: "rounded-lg",
    shadow: "shadow-lg",
    px: "px-6",
    py: "py-2",
    font: "font-semibold"
  });

  const [saved, setSaved] = useState([]);
  const [savedAnim, setSavedAnim] = useState(false);
  const classString = Object.values(customization).join(" ");

  useEffect(() => {
    fetch("http://localhost:5000/api/components")
      .then(res => res.json())
      .then(setSaved)
      .catch(() => {});
  }, []);

  const saveConfig = () => {
    fetch("http://localhost:5000/api/components", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ componentType, customization }),
    })
      .then(res => res.json())
      .then(data => {
        setSaved([...saved, data.component]);
        setSavedAnim(true);
        setTimeout(() => setSavedAnim(false), 1200);
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 px-2 sm:px-4 animate-fadeIn">
      <button
        className="mb-5 px-4 py-1 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow hover:scale-105 transition-all duration-200 absolute left-6 top-6"
        onClick={onBack}
      >
        ← Back
      </button>
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-400 mb-1 tracking-tight drop-shadow-lg">
        Playground
      </h1>
      <p className="text-slate-300 mb-7 text-center max-w-xl">
        Customize and preview beautiful Tailwind components. Save, export, repeat!
      </p>
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row gap-7 mb-10 border border-white/10 transition duration-300">
        {/* Left: Customization */}
        <div className="flex-1 flex flex-col gap-5">
          <ComponentPicker value={componentType} onChange={setComponentType} />
          <CustomizationPanel
            customization={customization}
            setCustomization={setCustomization}
            componentType={componentType}
          />
        </div>
        {/* Divider for md+ */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="h-60 w-px bg-gradient-to-b from-white/10 via-slate-700/60 to-white/10"></div>
        </div>
        {/* Right: Preview + Export + Save */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <LivePreview componentType={componentType} classString={classString} />
          <ExportCode classString={classString} componentType={componentType} />
          <button
            className="relative mt-1 px-7 py-2 rounded-xl font-bold text-lg shadow-xl transition-all
              bg-gradient-to-r from-blue-600 to-fuchsia-500 hover:from-blue-500 hover:to-violet-500
              focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50
              active:scale-95 duration-150"
            onClick={saveConfig}
          >
            Save Component
            {savedAnim && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-emerald-500/90 text-white text-xs rounded-full px-3 py-1 animate-bounce shadow-md">
                Saved!
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Saved Components */}
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-2 text-white/90 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Saved Components
        </h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2 ${saved.length > 6 ? "max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700/80 scrollbar-track-transparent" : ""}`}>
          {saved.length === 0 && (
            <div className="text-slate-500 col-span-full py-8 text-center italic tracking-wide">
              No components saved yet. Try saving one!
            </div>
          )}
          {saved.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-2xl shadow-xl hover:shadow-fuchsia-600/20 p-4 flex flex-col items-center transition-all duration-200 border border-white/10 hover:scale-105 cursor-pointer group"
            >
              <LivePreview
                componentType={s.componentType}
                classString={Object.values(s.customization).join(" ")}
                small
              />
              <div className="mt-2 flex gap-2 items-center justify-center opacity-80 text-xs text-slate-400 group-hover:opacity-100">
                <span className="bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
                  {s.componentType.charAt(0).toUpperCase() + s.componentType.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full py-6 mt-8 text-center text-xs text-slate-500">
        Made with <span className="text-fuchsia-400">❤</span> | Tailwind Playground &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
