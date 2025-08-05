import RightPanel from "./components/Rightpanel";
import DragBall from "./components/Dragball";

export default function Home({ onStart }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <DragBall />

      <div className="min-h-screen w-full flex flex-col md:flex-row ">
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="backdrop-blur-2xl rounded-3xl p-10 max-w-xl w-full flex flex-col gap-6 animate-fadeIn ">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-400 drop-shadow-lg">
              TwiddleUI Playground
            </h1>
            <p className="text-slate-200 text-lg text-start max-w-md">
              Effortlessly design, customize, and preview beautiful UI components in real time.<br />
              Save your creations, copy code, and get inspired!
            </p>
            <div className="flex flex-row gap-5">
              <button
                onClick={onStart}
                className="px-8 py-3 rounded-2xl font-bold text-xl bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-lg hover:scale-105 hover:shadow-fuchsia-600/40 transition-all duration-200"
              >
                🚀 Get Started
              </button>
              <button
                onClick={onStart}
                className="px-8 py-3 rounded-2xl font-bold text-xl border-2 border-yellow-400
                text-white hover:bg-yellow-400 hover:text-black"
              >
                ⭐ Give a Star
              </button>
            </div>
            <div className="pt-4 text-xs text-slate-400">
              Made with <span className="text-fuchsia-400">♥</span> by a Developer for a Developer
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
