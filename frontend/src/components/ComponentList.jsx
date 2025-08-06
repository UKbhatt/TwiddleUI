import { FaRegSquare, FaRegUser, FaRegEdit, FaRegBell, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const COMPONENTS = [
    { label: "Button", value: "button", color: "from-blue-500 to-blue-400", icon: <FaRegSquare /> },
    { label: "Card", value: "card", color: "from-purple-500 to-fuchsia-400", icon: <FaRegUser /> },
    { label: "Input", value: "input", color: "from-cyan-500 to-blue-400", icon: <FaRegEdit /> },
    { label: "Badge", value: "badge", color: "from-yellow-400 to-orange-400", icon: <FaRegBell /> },
    { label: "Alert", value: "alert", color: "from-red-400 to-pink-400", icon: <FaRegStar /> }
];
export default function ComponentList({ value, onChange }) {
    const navigate = useNavigate() ; 
    return (
        <div className="sticky top-0 h-screen flex flex-col items-start gap-2 py-10 px-4 bg-black/20 border-r border-white/10 min-w-[180px] z-10">
            <button
                className="mb-5 px-4 py-1  rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow hover:scale-105 transition-all duration-200 absolute left-6 top-6"
                onClick={() => {navigate('/')}}
            >
                <p className="font-bold text-2xl z-10">←</p>
            </button>
            <h2 className="mb-5 mt-15 font-bold text-lg text-slate-200 tracking-wider">Components</h2>
            {COMPONENTS.map((comp) => (
                <button
                    key={comp.value}
                    className={`
            group flex items-center gap-3 px-3 py-2 w-full rounded-lg font-semibold border-2
            bg-gradient-to-r ${comp.color}
            transition-all text-base
            ${value === comp.value
                            ? "scale-105 ring-2 ring-white text-white border-white shadow-lg"
                            : "bg-opacity-80 border-transparent text-white/90 hover:bg-opacity-100 hover:border-blue-300"
                        }`}
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
