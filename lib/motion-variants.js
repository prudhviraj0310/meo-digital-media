/**
 * WORLD CLASS DIGITAL - MOTION VARIANTS LIBRARY
 * Centralized animation configurations for Framer Motion
 * All variants support reduced-motion accessibility
 */

export const fadeIn = (shouldReduceMotion = false) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: 'easeOut',
    },
  },
});

export const slideUp = (shouldReduceMotion = false) => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: 'easeOut',
    },
  },
});

export const slideLeft = (shouldReduceMotion = false) => ({
  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: 'easeOut',
    },
  },
});

export const scaleIn = (shouldReduceMotion = false) => ({
  hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.5,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (shouldReduceMotion = false) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.1,
      delayChildren: shouldReduceMotion ? 0 : 0.2,
    },
  },
});

export const hoverLift = (shouldReduceMotion = false) => ({
  scale: shouldReduceMotion ? 1 : 1.02,
  y: shouldReduceMotion ? 0 : -4,
  transition: {
    duration: shouldReduceMotion ? 0.01 : 0.3,
    ease: 'easeOut',
  },
});

export const hoverScale = (shouldReduceMotion = false) => ({
  scale: shouldReduceMotion ? 1 : 1.05,
  transition: {
    duration: shouldReduceMotion ? 0.01 : 0.3,
    ease: 'easeOut',
  },
});
