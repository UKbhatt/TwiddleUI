import { useState } from "react";

export default function ExportCode({ classString, componentType }) {
  const [copied, setCopied] = useState(false);

  let jsxCode = "";
  if (componentType === "button") {
    jsxCode = `<button className="${classString}">Button</button>`;
  } else if (componentType === "card") {
    jsxCode = `<div className="p-6 max-w-xs ${classString}">
  <div className="font-bold mb-2">Card Title</div>
  <div>This is a sample card content.</div>
</div>`;
  } else if (componentType === "input") {
    jsxCode = `<input className="${classString}" placeholder="Input" />`;
  }

  const copyCode = () => {
    navigator.clipboard.writeText(jsxCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full bg-white/10 rounded-lg p-4 mt-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-mono">JSX Code</span>
        <button
          onClick={copyCode}
          className="px-3 py-1 rounded text-sm bg-blue-500 text-white font-semibold hover:bg-blue-600"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="text-xs text-blue-200 whitespace-pre-line font-mono bg-slate-800 rounded p-2">{jsxCode}</pre>
    </div>
  );
}
