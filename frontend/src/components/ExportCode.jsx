import { useState } from "react";

export default function ExportCode({ classString, componentType }) {
  const [copied, setCopied] = useState(false);

  let jsxCode = "";

  switch (componentType) {
    case "button":
      jsxCode = `<button className="${classString}">Button</button>`;
      break;
    case "card":
      jsxCode = `<div className="p-6 max-w-xs ${classString}">
    <div className="font-bold mb-2">Card Title</div>
    <div>This is a sample card content.</div>
  </div>`;
      break;
    case "input":
      jsxCode = `<input className="${classString}" placeholder="Input" />`;
      break;
    case "badge":
      jsxCode = `<span className="inline-block px-3 py-1 rounded-full font-semibold text-xs ${classString}">
    Badge
  </span>`;
      break;
    case "alert":
      jsxCode = `<div className="flex items-center gap-3 px-4 py-3 rounded-lg ${classString}">
    <svg width="24" height="24" fill="none" className="text-yellow-300 shrink-0"><circle cx="12" cy="12" r="10" 
    fill="currentColor" opacity="0.3"/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    <span className="font-medium">This is an alert message.</span>
  </div>`;
      break;
    case "avatar":
      jsxCode = `<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white shadow ${classString}" />`;
      break;
    case "chip":
      jsxCode = `<span className="inline-block px-3 py-1 rounded-full font-semibold ${classString}">
    Chip
  </span>`;
      break;
    case "progress":
      jsxCode = `<div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden shadow-inner">
    <div className="${classString} h-4 rounded-full" style={{ width: "65%" }} />
  </div>`;
      break;
    case "list":
      jsxCode = `<ul className="${classString} rounded-xl px-4 py-3">
    <li>• List item one</li>
    <li>• List item two</li>
    <li>• List item three</li>
  </ul>`;
      break;
    case "tab":
      jsxCode = `<div className="flex gap-2">
    <button className="${classString} px-4 py-2 rounded-t-lg font-bold shadow">Active Tab</button>
    <button className="px-4 py-2 rounded-t-lg bg-white/10 text-slate-300 font-bold">Tab 2</button>
  </div>`;
      break;
    case "stat":
      jsxCode = `<div className="px-6 py-4 rounded-xl flex flex-col items-center shadow-lg ${classString}">
    <span className="text-2xl font-bold">98.5%</span>
    <span className="text-sm text-slate-200">Completion Rate</span>
  </div>`;
      break;
    case "timeline":
      jsxCode = `<div className="border-l-2 border-slate-400 pl-4 space-y-3 ${classString}">
    <div><span className="font-semibold">09:00</span> - Project Started</div>
    <div><span className="font-semibold">12:00</span> - Code Review</div>
    <div><span className="font-semibold">16:00</span> - Deployed!</div>
  </div>`;
      break;
    case "stepper":
      jsxCode = `<div className="flex items-center gap-4 ${classString}">
    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
    <div className="h-1 w-8 bg-blue-300" />
    <span className="w-8 h-8 rounded-full bg-gray-300 text-slate-800 flex items-center justify-center">2</span>
    <div className="h-1 w-8 bg-blue-300" />
    <span className="w-8 h-8 rounded-full bg-gray-300 text-slate-800 flex items-center justify-center">3</span>
  </div>`;
      break;
    case "switch":
      jsxCode = `<label className="relative inline-block w-12 h-6">
    <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
    <span className="absolute cursor-pointer inset-0 bg-slate-500 peer-checked:bg-green-400 rounded-full transition-all"></span>
    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-6"></span>
  </label>`;
      break;
    case "toast":
      jsxCode = `<div className="flex items-center gap-3 px-4 py-3 rounded-lg ${classString} shadow-lg">
    <span className="font-medium">This is a toast message.</span>
  </div>`;
      break;
    case "tooltip":
      jsxCode = `<div className="relative group w-fit">
    <button className="px-4 py-2 rounded bg-blue-700 text-white font-semibold ${classString}">
      Hover me
    </button>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800 
    text-white px-3 py-1 rounded shadow-lg">
      Tooltip text!
    </div>
  </div>`;
      break;
    case "modal":
      jsxCode = `<div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center">
    <div className="bg-white/90 rounded-xl p-6 shadow-2xl w-[320px] ${classString}">
      <div className="font-bold text-lg mb-2">Modal Title</div>
      <div className="text-slate-700 mb-4">This is modal content.</div>
      <button className="px-4 py-1 rounded bg-pink-500 text-white font-bold">Close</button>
    </div>
  </div>`;
      break;
    case "drawer":
      jsxCode = `<div className="fixed inset-0 z-40 flex">
    <div className="w-72 bg-white/90 h-full shadow-2xl p-6 ${classString}">
      <div className="font-bold text-lg mb-2">Drawer</div>
      <div className="mb-4">This is a side drawer panel.</div>
      <button className="px-4 py-1 rounded bg-gray-700 text-white font-bold">Close</button>
    </div>
    <div className="flex-1" />
  </div>`;
      break;
    case "dropdown":
      jsxCode = `<div className="relative">
    <button className="px-5 py-2 rounded font-bold bg-gradient-to-r from-teal-400 to-green-500 text-white shadow-lg
     ${classString}">
      Dropdown
    </button>
    <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 z-20 min-w-[150px]">
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
    </div>
  </div>`;
      break;
    case "accordion":
      jsxCode = `<div className="w-full max-w-xs rounded-lg border shadow ${classString}">
    <button className="w-full text-left font-bold px-4 py-2">
      ▼ Accordion Title
    </button>
    <div className="px-4 py-2 border-t bg-white/5">
      Accordion content goes here.
    </div>
  </div>`;
      break;
    case "calendar":
      jsxCode = `<div className="w-64 rounded-xl p-4 shadow ${classString}">
    <div className="text-center font-bold text-lg mb-3">July 2025</div>
    <div className="grid grid-cols-7 gap-1 text-xs text-center">
      {/* Days */}
      <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
      {/* Dates */}
      {/* ...1 to 31 */}
    </div>
  </div>`;
      break;
    case "image":
      jsxCode = `<div className="w-48 h-32 rounded-lg overflow-hidden border-2 shadow ${classString}">
    <img src="https://source.unsplash.com/random/300x200" alt="Sample" className="object-cover w-full h-full" />
  </div>`;
      break;
    case "avatargroup":
      jsxCode = `<div className="flex -space-x-3">
    <img src="https://randomuser.me/api/portraits/men/75.jpg" className="w-10 h-10 rounded-full border-2 border-white shadow ${classString}" alt="Avatar" />
    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white shadow ${classString}" alt="Avatar" />
    <img src="https://randomuser.me/api/portraits/men/16.jpg" className="w-10 h-10 rounded-full border-2 border-white shadow ${classString}" alt="Avatar" />
  </div>`;
      break;
    case "message":
      jsxCode = `<div className="p-3 rounded-xl max-w-xs shadow ${classString}">
    <div className="font-bold">Utkarsh Bhatt</div>
    <div className="text-sm">Hello! This is a message bubble.</div>
  </div>`;
      break;
    case "notification":
      jsxCode = `<div className="px-4 py-2 rounded-lg shadow flex items-center gap-3 ${classString}">
    <svg width="20" height="20" fill="currentColor" className="text-yellow-400"><circle cx="10" cy="10" r="10" opacity="0.3"/><path d="M10 6v4m0 4h.01" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    <span className="font-semibold">New Notification</span>
  </div>`;
      break;
    case "rating":
      jsxCode = `<div className="flex items-center gap-1">
    <span className="text-yellow-400 text-2xl">★</span>
    <span className="text-yellow-400 text-2xl">★</span>
    <span className="text-yellow-400 text-2xl">★</span>
    <span className="text-yellow-400 text-2xl">★</span>
    <span className="text-gray-400 text-2xl">★</span>
  </div>`;
      break;
    case "popover":
      jsxCode = `<div className="relative group">
    <button className="px-4 py-2 rounded bg-green-500 text-white font-semibold ${classString}">
      Click me
    </button>
    <div className="absolute left-1/2 mt-2 -translate-x-1/2 w-40 bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg">
      Popover content!
    </div>
  </div>`;
      break;
    case "faq":
      jsxCode = `<div className="w-full max-w-md rounded-xl border shadow ${classString} p-4">
    <div className="mb-3 font-bold text-lg">FAQ</div>
    <div className="mb-2">
      <button className="font-semibold w-full text-left mb-1 hover:text-blue-400 transition-all">
        ❓ What is TwiddleUI?
      </button>
      <div className="text-slate-300 text-sm ml-3">A playground to create, customize, and preview Tailwind UI components.</div>
    </div>
    {/* Add more Q&A here */}
  </div>`;
      break;
    case "feature":
      jsxCode = `<div className="w-full max-w-sm p-4 rounded-xl shadow-lg flex items-center gap-4 ${classString}">
    <span className="text-3xl text-emerald-400">💡</span>
    <div>
      <div className="font-bold">AI Powered</div>
      <div className="text-xs text-slate-300">Automate your workflow with intelligent features.</div>
    </div>
  </div>`;
      break;
    case "like":
      jsxCode = `<button className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow ${classString}">
    <span className="text-lg">❤️</span>
    Like
  </button>`;
      break;
    default:
      jsxCode = "<!-- Select a component to see code! -->";
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
          className="px-3 py-1 rounded text-sm bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="text-xs text-blue-200 whitespace-pre-line font-mono bg-slate-800 rounded p-2">
        {jsxCode}
      </pre>
    </div>
  );
}
