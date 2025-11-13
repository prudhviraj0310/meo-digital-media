"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/**
 * AmbientParticles Component
 * Subtle floating particles behind navbar for premium depth
 */
function AmbientParticles({ shouldReduceMotion }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (shouldReduceMotion || !mounted) return null;

  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/40 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: '50%',
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
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

/**
 * NavbarCinematic Component
 * 
 * Ultra-premium glassmorphic navbar inspired by MakeReign, Obys, Locomotive, and Apple.
 * Features cinematic depth, smart scroll behavior, and seamless hero integration.
 */
export default function NavbarCinematic({ logo = null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const navRef = useRef(null);

  // Menu items
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Smart scroll behavior with enhanced smoothness
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Update transparency state after 40px
          setIsScrolled(currentScrollY > 40);

          // Hide/show navbar based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsHidden(true); // Scrolling down
          } else {
            setIsHidden(false); // Scrolling up
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isHidden ? 0 : 1,
          y: isHidden ? -100 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          ease: [0.16, 1, 0.3, 1], // Custom cinematic easing
        }}
        className={`fixed top-4 left-4 right-4 lg:left-8 lg:right-8 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-[0_8px_48px_rgba(0,0,0,0.25)]"
            : "bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
        } rounded-xl overflow-hidden`}
      >
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
        
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient Particles */}
        <AmbientParticles shouldReduceMotion={shouldReduceMotion} />

        {/* Main Navbar Content */}
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              {logo ? (
                <Image
                  src={logo}
                  alt="MEO Digital"
                  width={140}
                  height={40}
                  className="h-9 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                  priority
                />
              ) : (
                <span className="text-xl lg:text-2xl font-black text-white tracking-tight transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
                  MEO Digital
                </span>
              )}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="group relative text-white/90 font-medium text-[15px] lg:text-base tracking-wide transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-1"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Underline with blur reveal effect */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                      whileHover={{
                        width: "100%",
                        filter: shouldReduceMotion ? "blur(0px)" : "blur(0.5px)",
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button with Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="#contact"
                  className="group relative px-7 py-3 rounded-xl text-white font-semibold text-[15px] lg:text-base bg-white/[0.08] backdrop-blur-md border border-white/20 transition-all duration-400 hover:bg-white/[0.12] hover:border-white/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  {/* Gradient Border Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(85,105,255,0.15) 100%)",
                    }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-24 left-4 right-4 z-50 lg:hidden bg-white/[0.08] backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
              
              {/* Noise Texture */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              <nav className="relative flex flex-col p-6 gap-1">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-5 py-4 text-white/90 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_16px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : navLinks.length * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-4 pt-4 border-t border-white/15"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-center text-white font-bold text-lg bg-gradient-to-r from-[#5569ff] to-[#3b47f5] rounded-xl shadow-lg shadow-[#5569ff]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#5569ff]/50 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
