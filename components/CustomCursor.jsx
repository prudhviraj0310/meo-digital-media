"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseout", handleMouseOut);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor - Glassmorphic */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Glass Effect Circle */}
          <div className="w-5 h-5 rounded-full backdrop-blur-sm bg-white/80 border border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/40 blur-md"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.6 : 0.3,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring - Enhanced Glass */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border-2 border-white/40"
          animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isHovering ? 0.7 : 1,
            borderColor: isHovering ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        
        {/* Trailing Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent blur-xl"
          animate={{
            scale: isHovering ? 2 : 1.2,
            opacity: isHovering ? 0.5 : 0.2,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </>
  );
}
