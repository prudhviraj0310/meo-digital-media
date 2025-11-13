"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedHeading({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ 
        opacity: 0, 
        letterSpacing: "0.05em",
        y: 20
      }}
      animate={
        isInView
          ? { 
              opacity: 1, 
              letterSpacing: "0.02em",
              y: 0
            }
          : { 
              opacity: 0, 
              letterSpacing: "0.05em",
              y: 20
            }
      }
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
