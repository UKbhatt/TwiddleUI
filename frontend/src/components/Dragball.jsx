import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function DragBall() {
  const x = useSpring(0, { damping: 10, stiffness: 100 });
  const y = useSpring(0, { damping: 10, stiffness: 100 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      x.set(e.clientX - 18); 
      y.set(e.clientY - 18);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
      <motion.div
      style={{ x, y }}
      className="
      fixed top-0 left-0 z-30 w-15 h-15 
      bg-gradient-to-tr from-fuchsia-500 via-blue-400 to-fuchsia-400 
      rounded-full shadow-2xl border-4 border-fuchsia-300/30 
      pointer-events-none mix-blend-lighten opacity-80"
      />     
    );
}
