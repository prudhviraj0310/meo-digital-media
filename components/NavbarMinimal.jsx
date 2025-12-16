"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMinimal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-glass ${isScrolled ? 'scrolled' : ''
        }`}
    >
      <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="flex items-center justify-between py-6">
          {/* Logo with Glass Effect */}
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="text-2xl font-bold text-white tracking-tight relative group cursor-pointer"
          >
            <span className="relative z-10">MEO</span>
            <motion.div
              className="absolute inset-0 -z-10 rounded-lg bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="relative text-white/80 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop - Glassmorphic */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="relative px-6 py-3 text-sm font-bold uppercase tracking-wider overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white">Get in Touch</span>
              {/* Glass Background */}
              <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300" />
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/20 to-transparent transition-opacity duration-300" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 8 }
                    : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={
                  mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                }
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-white block"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] lg:hidden overflow-hidden"
          >
            {/* Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 backdrop-blur-2xl bg-black/95"
            />

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[120px]"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px]"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, -50, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => smoothScroll(e, item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className="group relative"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                      {item.label}
                    </span>
                    {/* Underline */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white to-white/0"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, "#contact")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8 relative group overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 block px-10 py-5 text-lg font-bold text-white uppercase tracking-wider">
                    Get in Touch
                  </span>
                  <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full" />
                </motion.a>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="p-8 border-t border-white/10"
              >
                <div className="text-center mb-4">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Follow Us</span>
                </div>
                <div className="flex items-center justify-center gap-6">
                  {[
                    { name: 'LinkedIn', href: '#' },
                    { name: 'Instagram', href: '#' },
                    { name: 'Twitter', href: '#' },
                    { name: 'Dribbble', href: '#' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
