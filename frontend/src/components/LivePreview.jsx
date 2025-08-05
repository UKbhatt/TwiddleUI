export default function LivePreview({ componentType, classString, small }) {
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
  return null;
}
