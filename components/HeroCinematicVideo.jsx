"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import HeroBackgroundVideo from './HeroBackgroundVideo';

/**
 * HeroCinematicVideo Component
 * World-class cinematic hero with camera-flash video background
 * Apple + Portfolio Studio aesthetic
 */
export default function HeroCinematicVideo({
  headline = 'Creating Visual Stories',
  subtitle = 'We craft cinematic digital experiences that captivate and inspire.',
  primaryCTA = { text: 'Start a Project', href: '/contact' },
  secondaryCTA = { text: 'View Our Work', href: '/projects' },
  showScrollIndicator = true,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 1.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth motion
      },
    },
  };

  const scrollIndicatorVariants = {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.8,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.5,
      }
    },
  };

  return (
    <section
      id="home"
      className={`relative w-full min-h-[100dvh] flex items-center justify-center overflow-x-hidden ${className}`}
    >
      {/* Video Background Layer - Behind Everything */}
      <HeroBackgroundVideo />

      {/* Content Container - Above Video */}
      <motion.div
        className="relative z-10 container-custom text-center text-white px-4 max-w-6xl py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight"
          variants={itemVariants}
          style={{
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
          }}
        >
          {headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed"
          variants={itemVariants}
          style={{
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
          }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            href={primaryCTA.href}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] md:min-w-[220px] !bg-white !text-black hover:!bg-gray-100 font-bold shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4"
          >
            {primaryCTA.text}
          </Button>

          <Button
            href={secondaryCTA.href}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] md:min-w-[220px] border-2 !border-white !text-white hover:!bg-white hover:!text-black backdrop-blur-sm font-bold hover:scale-105 transition-all duration-300 px-8 py-4"
          >
            {secondaryCTA.text}
          </Button>
        </motion.div>

        {/* Stats Bar (Optional) */}
        <motion.div
          className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {[
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '15+', label: 'Team Members' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && !shouldReduceMotion && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <span className="text-white/60 text-xs uppercase tracking-wider">
              Scroll
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
