"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * HeroMassive Component
 * 
 * Viewport-filling hero with MASSIVE typography inspired by:
 * - MakeReign's spaced lettering
 * - Obys Agency's bold headlines
 * - Locomotive's minimal elegance
 */
export default function HeroMassive() {
  const words = ["TRANSFORMING", "BRANDS", "INTO", "DIGITAL", "EXPERIENCES"];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] overflow-hidden pt-32">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5569ff]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b47f5]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Headline */}
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
          {words.map((word, index) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(3rem,12vw,12rem)] font-black leading-[0.9] tracking-[-0.04em] text-white uppercase"
              style={{
                textShadow: "0 0 80px rgba(85, 105, 255, 0.3)",
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 text-xl sm:text-2xl lg:text-3xl font-light text-white/80 tracking-wide max-w-4xl mx-auto"
        >
          From strategy to storytelling, we craft performance-driven digital journeys that make your brand unforgettable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 sm:mt-16 lg:mt-20"
        >
          <Link
            href="#contact"
            className="group relative px-10 py-5 text-lg sm:text-xl font-bold text-white bg-[#5569ff] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(85,105,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#111827]"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <motion.div
              className="absolute inset-0 bg-[#3b47f5]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <Link
            href="#work"
            className="px-10 py-5 text-lg sm:text-xl font-bold text-white border-2 border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#111827]"
          >
            VIEW OUR WORK
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">Scroll</span>
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
