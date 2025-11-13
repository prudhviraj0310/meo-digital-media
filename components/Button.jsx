'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Button Component
 * Variants: primary, secondary, outline, ghost
 * Sizes: sm, md, lg
 * Supports both button and link behavior
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false,
  external = false,
  ...props
}) {
  // Variant styles
  const variants = {
    primary: 'bg-[#5569ff] text-white hover:bg-[#3b47f5] focus-visible:ring-[#5569ff]',
    secondary: 'bg-[#111827] text-white hover:bg-[#374151] focus-visible:ring-[#111827]',
    outline: 'border-2 border-[#5569ff] text-[#5569ff] hover:bg-[#5569ff] hover:text-white focus-visible:ring-[#5569ff]',
    ghost: 'text-[#111827] hover:bg-[#f3f4f6] focus-visible:ring-[#111827]',
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const MotionComponent = motion.button;
  const MotionLink = motion.a;

  // Link behavior
  if (href) {
    if (external) {
      return (
        <MotionLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          {...props}
        >
          {children}
        </MotionLink>
      );
    }

    return (
      <Link href={href} className={baseStyles} {...props}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  // Button behavior
  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
