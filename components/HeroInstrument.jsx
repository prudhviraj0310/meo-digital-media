"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroInstrument() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      {/* Large Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-start px-6 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-5xl"
        >
          Transforming
          <br />
          Brands Into
          <br />
          <span className="text-[#5569ff]">Digital</span>
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl lg:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed"
        >
          From strategy to storytelling, we craft performance-driven digital journeys that make your brand unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-6"
        >
          <Link
            href="#contact"
            className="px-10 py-5 bg-white text-black text-lg font-bold hover:bg-white/90 transition-all duration-300"
          >
            GET IN TOUCH
          </Link>
          
          <Link
            href="#work"
            className="px-10 py-5 border-2 border-white text-white text-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW WORK
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-white/40"
        ></motion.div>
      </motion.div>
    </section>
  );
}
