"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * HeroCinematic Component
 * 
 * Premium cinematic hero section inspired by MakeReign, Obys Studio, and Apple.
 * Features 60fps parallax tilt, particle effects, and staggered text animations.
 */
export default function HeroCinematic({
  title = "Transforming Brands\ninto Digital Experiences",
  subtitle = "We build high-performance digital ecosystems driven by strategy, creativity, and technology.",
  primaryCta = { text: "Get in Touch", href: "/contact" },
  secondaryCta = { text: "View Our Work", href: "/portfolio" },
  backgroundVideo = null,
  backgroundImage = null,
  alignment = "center",
  overlay = true,
}) {
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Parallax tilt effect on mouse move (60fps with RAF)
  useEffect(() => {
    if (shouldReduceMotion) return;

    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate tilt (-20 to +20 range)
        const x = ((clientY / innerHeight) - 0.5) * 20;
        const y = ((clientX / innerWidth) - 0.5) * -20;
        
        setTilt({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  // Split title into words for stagger animation
  const titleLines = title.split("\n");
  const allWords = titleLines.flatMap((line, lineIndex) => 
    line.split(" ").map((word, wordIndex) => ({
      word,
      lineIndex,
      wordIndex,
      globalIndex: titleLines.slice(0, lineIndex).join(" ").split(" ").length + wordIndex
    }))
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.4 + (i * 0.1),
        ease: [0.4, 0.0, 0.2, 1], // ease-out-expo
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.0 + (i * 0.1),
        ease: [0.4, 0.0, 0.2, 1],
      },
    }),
  };

  const alignmentClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-[#5569ff] via-[#4556ee] to-[#3b47f5]"
      style={{
        willChange: shouldReduceMotion ? "auto" : "transform",
      }}
    >
      {/* Animated Gradient Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#5569ff] via-[#4556ee] to-[#3b47f5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          transform: shouldReduceMotion 
            ? "none" 
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.1)`,
          transition: "transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
      />

      {/* Video Background (if provided) */}
      {backgroundVideo && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 1.0 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: overlay ? "brightness(0.7) blur(2px)" : "none",
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Image Background (fallback or primary) */}
      {backgroundImage && !backgroundVideo && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            priority
            quality={90}
            className="object-cover"
            style={{
              filter: overlay ? "brightness(0.7) blur(2px)" : "none",
            }}
          />
        </motion.div>
      )}

      {/* Overlay Darkening Layer */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
      )}

      {/* Particle/Bokeh Layer */}
      <Particles shouldReduceMotion={shouldReduceMotion} />

      {/* Spotlight Glow Behind Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[150px]" />
      </motion.div>

      {/* Hero Content */}
      <div className={`relative z-10 h-full flex flex-col justify-center ${alignmentClasses[alignment]} px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto`}>
        {/* Title with Word-by-Word Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8"
        >
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
                {line.split(" ").map((word, wordIndex) => {
                  const globalIndex = allWords.findIndex(
                    w => w.lineIndex === lineIndex && w.wordIndex === wordIndex
                  );
                  return (
                    <motion.span
                      key={`${lineIndex}-${wordIndex}`}
                      custom={globalIndex}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block mr-3 sm:mr-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-normal max-w-3xl mb-10 sm:mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <motion.a
            href={primaryCta.href}
            custom={0}
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-[#5569ff] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5569ff]"
          >
            <span className="relative z-10">{primaryCta.text}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href={secondaryCta.href}
            custom={1}
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#5569ff] hover:shadow-2xl hover:shadow-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5569ff]"
          >
            <span className="relative z-10">{secondaryCta.text}</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
          <svg
            className="w-6 h-6"
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
      </div>
    </section>
  );
}

/**
 * Particles Component
 * Creates subtle bokeh/particle effects for depth
 */
function Particles({ shouldReduceMotion }) {
  if (shouldReduceMotion) return null;

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
