import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 5,
      ease: "easeInOut",
      onComplete: () => {
        setIsComplete(true);
        setTimeout(onComplete, 1000);
      },
    });

    return () => controls.stop();
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Background Elements */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer glow circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle glow circle */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-primary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/10 via-primary/20 to-primary/10 blur-xl" />

          {/* Percentage text */}
          <motion.div className="relative text-center">
            <motion.div className="text-5xl md:text-6xl font-bold text-primary font-secondary">
              {rounded}
            </motion.div>
            <div className="text-sm md:text-base text-foreground/80 font-secondary">
              Loading
            </div>
          </motion.div>
        </div>

        {/* Animated progress bar */}
        <div className="w-48 md:w-64 h-1 bg-primary/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-primary via-primary/80 to-primary rounded-full shadow-[0_0_15px_rgba(0,225,255,0.5)]"
            style={{
              scaleX: useTransform(count, [0, 100], [0, 1]),
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Subtle text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5 }}
          className="text-primary font-secondary"
        >
          Initializing experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
