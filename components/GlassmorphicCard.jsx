"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

/**
 * GlassmorphicCard Component
 * Reusable card component with glassmorphic design
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hoverable - Enable hover effects (default: true)
 * @param {Object} props.hoverScale - Scale on hover (default: 1.02)
 * @param {boolean} props.animate - Enable animation (default: true)
 * @param {Function} props.onClick - Click handler
 * @param {string} props.as - HTML element or 'link' (default: 'div')
 * @param {string} props.href - Link href (when as='link')
 */
const GlassmorphicCard = forwardRef(({
  children,
  className = "",
  hoverable = true,
  hoverScale = 1.02,
  animate = true,
  onClick,
  as = "div",
  href,
  ...props
}, ref) => {
  const Component = as === "link" ? "a" : motion[as] || motion.div;
  
  const baseClasses = `
    relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 
    border border-white/10 rounded-2xl overflow-hidden
    transition-all duration-500
    ${hoverable ? 'hover:border-white/30 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]' : ''}
    ${className}
  `;

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
    ...(hoverable && {
      whileHover: { 
        y: -8, 
        scale: hoverScale,
        transition: { type: "spring", stiffness: 300 }
      }
    })
  } : {};

  return (
    <Component
      ref={ref}
      className={baseClasses}
      onClick={onClick}
      href={href}
      {...motionProps}
      {...props}
    >
      {children}
      
      {/* Animated Glow Effect */}
      {hoverable && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </Component>
  );
});

GlassmorphicCard.displayName = "GlassmorphicCard";

export default GlassmorphicCard;
