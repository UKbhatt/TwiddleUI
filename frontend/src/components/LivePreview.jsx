import { useState } from "react";

export default function LivePreview({ componentType, classString, small }) {
  const [showAlert, setShowAlert] = useState(false);

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
          className={`px-5 py-2 rounded font-bold bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-105 duration-200`}
          onClick={() => setShowAlert(true)}
        >
          Show Alert
        </button>
        {showAlert && (
          <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${classString} shadow-md animate-fadeIn`}>
            <svg width="24" height="24" fill="none" className="text-yellow-300 shrink-0"><circle cx="12" cy="12" r="10" 
            fill="currentColor" opacity="0.3"/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <span className="font-medium">{small ? "Alert!" : "This is an alert message."}
            </span>
            <button
              className="ml-auto text-xs text-white bg-red-500 rounded-full px-2 py-0.5 hover:bg-red-700"
              onClick={() => setShowAlert(false)}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
}
