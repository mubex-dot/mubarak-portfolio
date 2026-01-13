import { useMotionValue, useSpring } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function TorchCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMouseDevice] = useState(
    () => window.matchMedia("(pointer:fine)").matches
  );

  const springConfig = { damping: 20, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (isMouseDevice) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, isMouseDevice]);

  return (
    isMouseDevice && (
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: "-20%",
          translateY: "-20%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="flex items-center justify-center"
      >
        <div className="absolute w-50 h-50 rounded-full opacity-20 blur-80 bg-radial-[at_50%_75%] from-primary/70 via-primary to-primary to-90% mix-blend-screen  blur-2xl" />

        <div className="absolute w-30 h-30 rounded-full opacity-60 bg-radial-[at_50%_75%] from-primary/70 via-primary to-primary to-90% mix-blend-screen  blur-2xl" />

        {/* 3. Flashlight Icon  */}
        {/* <div className="relative rotate-45 drop-shadow-2xl"> */}
        {/* <Flashlight
            size={36}
            className="text-slate-300 fill-slate-700"
            strokeWidth={1.5}
          /> */}
        {/* Small "Bulb" Glow inside the icon tip */}
        {/* <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[2px] animate-pulse" /> */}
        {/* </div> */}
      </motion.div>
    )
  );
}
