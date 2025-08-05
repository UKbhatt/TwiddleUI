import { useEffect, useRef } from "react";

export default function AnimatedCube() {
  const ref = useRef();

  useEffect(() => {
    let frameId;

    const animate = (t) => {
      if (!ref.current) return;
      const rotate = Math.sin(t / 10000) * 200;
      const y = (1 + Math.sin(t / 1000)) * -50;
      ref.current.style.transform = `
        translateY(${y}px)
        rotateX(${rotate}deg)
        rotateY(${rotate}deg)
      `;
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="perspective-[800px] w-[200px] h-[200px] flex items-center justify-center">
      <div
        ref={ref}
        className="relative w-[200px] h-[200px] [transform-style:preserve-3d] transition-transform duration-300"
      >
        <div
          className="absolute w-full h-full bg-gradient-to-tr from-blue-500 to-fuchsia-500 opacity-80 rounded-xl [transform:rotateY(0deg)_translateZ(100px)] shadow-xl border border-white/20"
        />
        <div
          className="absolute w-full h-full bg-gradient-to-bl from-fuchsia-500 to-blue-700 opacity-70 rounded-xl [transform:rotateY(180deg)_translateZ(100px)] border border-white/20"
        />
        <div
          className="absolute w-full h-full bg-gradient-to-tr from-cyan-500 to-purple-600 opacity-80 rounded-xl [transform:rotateY(90deg)_translateZ(100px)] border border-white/20"
        />
        <div
          className="absolute w-full h-full bg-gradient-to-bl from-blue-700 to-cyan-400 opacity-80 rounded-xl [transform:rotateY(-90deg)_translateZ(100px)] border border-white/20"
        />
        <div
          className="absolute w-full h-full bg-gradient-to-t from-blue-400 to-cyan-300 opacity-90 rounded-xl [transform:rotateX(90deg)_translateZ(100px)] border border-white/20"
        />
        <div
          className="absolute w-full h-full bg-gradient-to-b from-fuchsia-300 to-blue-400 opacity-90 rounded-xl [transform:rotateX(-90deg)_translateZ(100px)] border border-white/20"
        />
      </div>
    </div>
  );
}
