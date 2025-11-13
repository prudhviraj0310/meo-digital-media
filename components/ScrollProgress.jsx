"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{ scaleX }}
    >
      {/* Glassmorphic Progress Bar */}
      <div className="w-full h-full backdrop-blur-md bg-gradient-to-r from-white/80 via-white/60 to-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
    </motion.div>
  );
}
