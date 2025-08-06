import {
    FaRegSquare, FaRegUser, FaRegEdit, FaRegBell, FaRegStar, FaRegCheckCircle, FaRegClock,
    FaRegListAlt, FaRegSun, FaRegCommentDots, FaRegEye, FaRegImage, FaRegFileAlt, FaRegCalendarAlt,
    FaRegHeart, FaRegSmile, FaRegBookmark, FaRegChartBar, FaRegDotCircle, FaRegCircle, FaRegPaperPlane,
    FaRegLightbulb, FaRegThumbsUp, FaRegMinusSquare, FaRegQuestionCircle, FaRegEnvelope
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const COMPONENTS = [
    { label: "Button", value: "button", color: "from-blue-500 to-blue-400", icon: <FaRegSquare /> },
    { label: "Card", value: "card", color: "from-purple-500 to-fuchsia-400", icon: <FaRegUser /> },
    { label: "Input", value: "input", color: "from-cyan-500 to-blue-400", icon: <FaRegEdit /> },
    { label: "Badge", value: "badge", color: "from-yellow-400 to-orange-400", icon: <FaRegBell /> },
    { label: "Alert", value: "alert", color: "from-red-400 to-pink-400", icon: <FaRegStar /> },
    { label: "Avatar", value: "avatar", color: "from-pink-500 to-rose-400", icon: <FaRegSmile /> },
    { label: "Chip", value: "chip", color: "from-green-500 to-teal-400", icon: <FaRegCheckCircle /> },
    { label: "Progress", value: "progress", color: "from-sky-400 to-blue-300", icon: <FaRegChartBar /> },
    { label: "List", value: "list", color: "from-lime-400 to-green-500", icon: <FaRegListAlt /> },
    { label: "Tab", value: "tab", color: "from-violet-500 to-indigo-400", icon: <FaRegDotCircle /> },
    { label: "Stat", value: "stat", color: "from-emerald-400 to-green-400", icon: <FaRegChartBar /> },
    { label: "Timeline", value: "timeline", color: "from-fuchsia-500 to-pink-400", icon: <FaRegClock /> },
    { label: "Stepper", value: "stepper", color: "from-orange-500 to-yellow-500", icon: <FaRegCircle /> },
    { label: "Switch", value: "switch", color: "from-blue-500 to-cyan-400", icon: <FaRegSun /> },
    { label: "Toast", value: "toast", color: "from-yellow-400 to-amber-500", icon: <FaRegCommentDots /> },
    { label: "Tooltip", value: "tooltip", color: "from-slate-400 to-gray-600", icon: <FaRegEye /> },
    { label: "Modal", value: "modal", color: "from-pink-600 to-purple-500", icon: <FaRegFileAlt /> },
    { label: "Drawer", value: "drawer", color: "from-stone-500 to-gray-400", icon: <FaRegCalendarAlt /> },
    { label: "Dropdown", value: "dropdown", color: "from-teal-400 to-green-500", icon: <FaRegBookmark /> },
    { label: "Accordion", value: "accordion", color: "from-indigo-500 to-blue-500", icon: <FaRegMinusSquare /> },
    { label: "Calendar", value: "calendar", color: "from-orange-400 to-amber-400", icon: <FaRegCalendarAlt /> },
    { label: "Image", value: "image", color: "from-pink-400 to-rose-300", icon: <FaRegImage /> },
    { label: "AvatarGroup", value: "avatargroup", color: "from-teal-500 to-cyan-500", icon: <FaRegUser /> },
    { label: "Message", value: "message", color: "from-blue-400 to-indigo-400", icon: <FaRegEnvelope /> },
    { label: "Notification", value: "notification", color: "from-amber-400 to-yellow-500", icon: <FaRegBell /> },
    { label: "Rating", value: "rating", color: "from-yellow-400 to-yellow-300", icon: <FaRegStar /> },
    { label: "Popover", value: "popover", color: "from-green-400 to-lime-400", icon: <FaRegPaperPlane /> },
    { label: "FAQ", value: "faq", color: "from-purple-400 to-violet-400", icon: <FaRegQuestionCircle /> },
    { label: "Feature", value: "feature", color: "from-emerald-500 to-teal-400", icon: <FaRegLightbulb /> },
    { label: "Like Button", value: "like", color: "from-pink-500 to-red-500", icon: <FaRegThumbsUp /> }
];

export default function ComponentList({ value, onChange }) {
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 h-screen flex flex-col items-start gap-2 py-10 px-4 bg-black/20 border-r border-white/10 min-w-[200px] z-10 overflow-y-auto">
            <button
                className="mb-5 px-4 py-1 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow hover:scale-105 transition-all duration-200 absolute left-6 top-6"
                onClick={() => { navigate('/') }}
            >
                <p className="font-bold text-2xl z-10">←</p>
            </button>
            <h2 className="mb-5 mt-15 font-bold text-lg text-slate-200 tracking-wider">Components</h2>
            <div className="flex flex-col gap-2 w-full">
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
        </div>
    );
}
