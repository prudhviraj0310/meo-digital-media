"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTagline, setShowTagline] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const width = useTransform(count, (v) => `${v}%`);

  useEffect(() => {
    // Animate counter from 0 to 100
    const animation = animate(count, 100, {
      duration: 3,
      ease: "easeOut",
      onComplete: () => {
        setShowTagline(true);
        setTimeout(() => setIsLoading(false), 1000);
      },
    });

    return () => animation.stop();
  }, [count]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[150px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with Letter Spacing Animation */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="text-7xl lg:text-9xl font-black text-white">
                MEO<sup className="text-3xl">®</sup>
              </h1>
            </motion.div>

            {/* Counter */}
            <div className="mb-8">
              <motion.div className="text-8xl lg:text-9xl font-black text-white tabular-nums">
                <motion.span>{rounded}</motion.span>
                <span className="text-white/40">%</span>
              </motion.div>
            </div>

            {/* Glassmorphic Progress Bar */}
            <div className="w-80 lg:w-[500px] relative mb-8">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-white/80 to-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  style={{ width }}
                />
              </div>
            </div>

            {/* Tagline Reveal */}
            <AnimatePresence>
              {showTagline && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-xl lg:text-2xl text-white/60 tracking-[0.2em] uppercase">
                    Creative-Led Digital Experiences
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
