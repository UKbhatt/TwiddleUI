import { useState } from "react";

export default function LivePreview({ componentType, classString, small }) {
  const [showAlert, setShowAlert] = useState(false);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);


  if (componentType === "button") {
    return (
      <div className="mb-6">
        <button className={`${classString} ${small ? "text-sm" : "text-lg"} transition-all`}>
          {small ? "Button" : "Button Preview"}
        </button>
      </div>
    );
  }

  if (componentType === "card") {
    return (
      <div className={`p-6 max-w-xs ${classString} ${small ? "text-xs" : "text-base"} mb-6`}>
        <div className="font-bold mb-2">Card Title</div>
        <div className="opacity-80">This is a sample card content.</div>
      </div>
    );
  }

  if (componentType === "input") {
    return (
      <div className="mb-6">
        <input
          className={`${classString} ${small ? "text-sm" : "text-lg"} transition-all outline-none`}
          placeholder={small ? "Input" : "Input Preview"}
        />
      </div>
    );
  }

  if (componentType === "badge") {
    return (
      <span
        className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${classString} shadow mb-6`}
      >
        {small ? "Badge" : "Badge Preview"}
      </span>
    );
  }

  if (componentType === "alert") {
    return (
      <div className="mb-6 flex flex-col items-start gap-4">
        <button
          className={`px-5 py-2 rounded font-bold bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg 
            hover:scale-105 duration-200`}
          onClick={() => setShowAlert(true)}
        >
          Show Alert
        </button>
        {showAlert && (
          <div className="fixed left-1/2 bottom-8 z-50 -translate-x-1/2 animate-fadeIn">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${classString} shadow-lg`}>
              <svg width="24" height="24" fill="none" className="text-yellow-300 shrink-0"><circle cx="12" cy="12" r="10"
                fill="currentColor" opacity="0.3" /><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              <span className="font-medium">{small ? "Alert!" : "This is an alert message."}</span>
              <button
                className="ml-auto text-xs text-white bg-red-500 rounded-full px-2 py-0.5 hover:bg-red-700"
                onClick={() => setShowAlert(false)}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (componentType === "avatar") {
    return (
      <div className="mb-6 flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Avatar"
          className={`w-12 h-12 rounded-full border-2 border-white shadow ${classString}`}
        />
        {!small && <span className="ml-4 font-semibold text-white/90">John Doe</span>}
      </div>
    );
  }

  if (componentType === "chip") {
    return (
      <span className={`inline-block px-3 py-1 rounded-full font-semibold ${classString} shadow mb-6`}>
        {small ? "Chip" : "Chip Preview"}
      </span>
    );
  }

  if (componentType === "progress") {
    return (
      <div className="mb-6 w-full max-w-xs">
        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden shadow-inner">
          <div className={`${classString} h-4 rounded-full`} style={{ width: small ? "45%" : "65%" }} />
        </div>
        {!small && <div className="text-xs text-slate-400 mt-1">Progress: {small ? "45%" : "65%"}</div>}
      </div>
    );
  }

  if (componentType === "list") {
    return (
      <ul className={`mb-6 ${classString} rounded-xl px-4 py-3`}>
        <li>• List item one</li>
        <li>• List item two</li>
        <li>• List item three</li>
      </ul>
    );
  }

  if (componentType === "tab") {
    return (
      <div className="mb-6 flex gap-2">
        <button className={`${classString} px-4 py-2 rounded-t-lg font-bold shadow`}>Active Tab</button>
        <button className="px-4 py-2 rounded-t-lg bg-white/10 text-slate-300 font-bold">Tab 2</button>
      </div>
    );
  }

  if (componentType === "stat") {
    return (
      <div className={`mb-6 px-6 py-4 rounded-xl flex flex-col items-center shadow-lg ${classString}`}>
        <span className="text-2xl font-bold">98.5%</span>
        <span className="text-sm text-slate-200">Completion Rate</span>
      </div>
    );
  }

  if (componentType === "timeline") {
    return (
      <div className={`mb-6 border-l-2 border-slate-400 pl-4 space-y-3 ${classString}`}>
        <div>
          <span className="font-semibold">09:00</span> - Project Started
        </div>
        <div>
          <span className="font-semibold">12:00</span> - Code Review
        </div>
        <div>
          <span className="font-semibold">16:00</span> - Deployed!
        </div>
      </div>
    );
  }

  if (componentType === "stepper") {
    return (
      <div className={`mb-6 flex items-center gap-4 ${classString}`}>
        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
        <div className="h-1 w-8 bg-blue-300" />
        <span className="w-8 h-8 rounded-full bg-gray-300 text-slate-800 flex items-center justify-center">2</span>
        <div className="h-1 w-8 bg-blue-300" />
        <span className="w-8 h-8 rounded-full bg-gray-300 text-slate-800 flex items-center justify-center">3</span>
      </div>
    );
  }

  if (componentType === "switch") {
    return (
      <div className="mb-6 flex items-center">
        <span className="mr-3">Off</span>
        <label className="relative inline-block w-12 h-6">
          <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
          <span className="absolute cursor-pointer inset-0 bg-slate-500 peer-checked:bg-green-400 rounded-full transition-all">
          </span>
          <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-6"></span>
        </label>
        <span className="ml-3">On</span>
      </div>
    );
  }
  if (componentType === "toast") {
    return (
      <div className="mb-6 flex flex-col items-start gap-3">
        <button
          className="px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white 
          shadow-lg hover:scale-105 duration-200"
          onClick={() => setShowAlert(true)}
        >
          Show Toast
        </button>
        {showAlert && (
          <div className="fixed left-1/2 bottom-6 z-50 -translate-x-1/2 animate-fadeIn">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${classString} shadow-lg`}>
              <span className="font-medium">This is a toast message.</span>
              <button
                className="ml-auto text-xs text-white bg-red-500 rounded-full px-2 py-0.5 hover:bg-red-700"
                onClick={() => setShowAlert(false)}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (componentType === "tooltip") {
    return (
      <div className="mb-6 flex items-center justify-center relative group w-fit">
        <button className={`px-4 py-2 rounded bg-blue-700 text-white font-semibold ${classString}`}>
          Hover me
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800
         text-white px-3 py-1 rounded shadow-lg">
          Tooltip text!
        </div>
      </div>
    );
  }

  if (componentType === "modal") {
    return (
      <div className="mb-6">
        <button
          className="px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-pink-600 to-purple-500 
          text-white shadow-lg hover:scale-105 duration-200"
          onClick={() => setShowAlert(true)}
        >
          Open Modal
        </button>
        {showAlert && (
          <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center">
            <div className={`bg-white/90 rounded-xl p-6 shadow-2xl w-[320px] ${classString}`}>
              <div className="font-bold text-lg mb-2">Modal Title</div>
              <div className="text-slate-700 mb-4">This is modal content.</div>
              <button
                className="px-4 py-1 rounded bg-pink-500 text-white font-bold"
                onClick={() => setShowAlert(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (componentType === "drawer") {
    return (
      <div className="mb-6">
        <button
          className="px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-gray-500 to-gray-300 
          text-white shadow-lg hover:scale-105 duration-200"
          onClick={() => setShowAlert(true)}
        >
          Open Drawer
        </button>
        {showAlert && (
          <div className="fixed inset-0 z-40 flex">
            <div className={`w-72 bg-white/90 h-full shadow-2xl p-6 ${classString}`}>
              <div className="font-bold text-lg mb-2">Drawer</div>
              <div className="mb-4">This is a side drawer panel.</div>
              <button
                className="px-4 py-1 rounded bg-gray-700 text-white font-bold"
                onClick={() => setShowAlert(false)}
              >
                Close
              </button>
            </div>
            <div className="flex-1" onClick={() => setShowAlert(false)} />
          </div>
        )}
      </div>
    );
  }

  if (componentType === "dropdown") {
    return (
      <div className="mb-6 relative">
        <button
          className={`px-5 py-2 rounded font-bold bg-gradient-to-r from-teal-400 to-green-500 
            text-white shadow-lg hover:scale-105 duration-200`}
          onClick={() => setShowAlert((open) => !open)}
        >
          {small ? "Dropdown" : "Open Dropdown"}
        </button>
        {showAlert && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 z-20 min-w-[150px]">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
          </div>
        )}
      </div>
    );
  }

  if (componentType === "accordion") {
    return (
      <div className={`mb-6 w-full max-w-xs rounded-lg border shadow ${classString}`}>
        <button
          className="w-full text-left font-bold px-4 py-2"
          onClick={() => setOpen(o => !o)}
        >
          {open ? "▼" : "►"} Accordion Title
        </button>
        {open && (
          <div className="px-4 py-2 border-t bg-white/5">Accordion content goes here.</div>
        )}
      </div>
    );
  }

  if (componentType === "calendar") {
    return (
      <div className={`mb-6 w-64 rounded-xl p-4 shadow ${classString}`}>
        <div className="text-center font-bold text-lg mb-3">July 2025</div>
        <div className="grid grid-cols-7 gap-1 text-xs text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map(day => (
            <span key={day} className="font-bold text-slate-500">{day}</span>
          ))}
          {[...Array(31).keys()].map(i => (
            <span key={i} className="py-1 rounded hover:bg-blue-500/30 cursor-pointer">{i + 1}</span>
          ))}
        </div>
      </div>
    );
  }

  if (componentType === "image") {
    return (
      <div className={`mb-6 w-48 h-32 rounded-lg overflow-hidden border-2 shadow ${classString}`}>
        <img src="https://source.unsplash.com/random/300x200" alt="Sample" className="object-cover w-full h-full" />
      </div>
    );
  }

  if (componentType === "avatargroup") {
    return (
      <div className="mb-6 flex -space-x-3">
        {[75, 32, 16].map((n, i) => (
          <img
            key={i}
            src={`https://randomuser.me/api/portraits/men/${n}.jpg`}
            className={`w-10 h-10 rounded-full border-2 border-white shadow ${classString}`}
            alt="Avatar"
            style={{ zIndex: 10 - i }}
          />
        ))}
      </div>
    );
  }

  if (componentType === "message") {
    return (
      <div className={`mb-6 p-3 rounded-xl max-w-xs shadow ${classString}`}>
        <div className="font-bold">Utkarsh Bhatt</div>
        <div className="text-sm">Hello! This is a message bubble.</div>
      </div>
    );
  }

  if (componentType === "notification") {
    return (
      <div className={`mb-6 px-4 py-2 rounded-lg shadow flex items-center gap-3 ${classString}`}>
        <svg width="20" height="20" fill="currentColor" className="text-yellow-400"><circle cx="10" cy="10" r="10" opacity="0.3" /><path d="M10 6v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        <span className="font-semibold">New Notification</span>
      </div>
    );
  }

  if (componentType === "rating") {
    return (
      <div className="mb-6 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(n => (
          <svg key={n} width="22" height="22" fill={n <= 4 ? "gold" : "gray"} className="inline">
            <polygon points="11,2 14,8 21,8 15,12 17,19 11,15 5,19 7,12 1,8 8,8" />
          </svg>
        ))}
      </div>
    );
  }

  if (componentType === "popover") {
    return (
      <div className="mb-6 relative group">
        <button className={`px-4 py-2 rounded bg-green-500 text-white font-semibold ${classString}`}>
          Click me
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg hidden group-focus-within:block group-active:block group-hover:block">
          Popover content!
        </div>
      </div>
    );
  }

  if (componentType === "faq") {
    return (
      <div className={`mb-6 w-full max-w-md rounded-xl border shadow ${classString} p-4`}>
        <div className="mb-3 font-bold text-lg">FAQ</div>
        <div className="mb-2">
          <button className="font-semibold w-full text-left mb-1 hover:text-blue-400 transition-all">
            ❓ What is TwiddleUI?
          </button>
          <div className="text-slate-300 text-sm ml-3">A playground to create, customize, and preview Tailwind UI components.</div>
        </div>
        <div className="mb-2">
          <button className="font-semibold w-full text-left mb-1 hover:text-blue-400 transition-all">
            ❓ How many components are included?
          </button>
          <div className="text-slate-300 text-sm ml-3">Over 25+ modern components with 10+ styling options each!</div>
        </div>
        <div>
          <button className="font-semibold w-full text-left mb-1 hover:text-blue-400 transition-all">
            ❓ Can I export code?
          </button>
          <div className="text-slate-300 text-sm ml-3">Yes, you can easily export ready-to-use JSX/Tailwind code.</div>
        </div>
      </div>
    );
  }
  if (componentType === "feature") {
    return (
      <div className={`mb-6 w-full max-w-sm p-4 rounded-xl shadow-lg flex items-center gap-4 ${classString}`}>
        <span className="text-3xl text-emerald-400">💡</span>
        <div>
          <div className="font-bold">AI Powered</div>
          <div className="text-xs text-slate-300">Automate your workflow with intelligent features.</div>
        </div>
      </div>
    );
  }
  if (componentType === "like") {
    return (
      <button
        className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow ${classString} transition-all
        ${liked ? 'scale-110 bg-pink-500 text-white' : ''}
      `}
        onClick={() => setLiked((v) => !v)}
      >
        <span className="text-lg">{liked ? "❤️" : "🤍"}</span>
        {small ? "Like" : liked ? "Liked!" : "Like Button"}
      </button>
    );
  }
}