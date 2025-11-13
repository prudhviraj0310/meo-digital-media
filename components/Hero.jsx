'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

/**
 * Hero Component
 * Full-screen hero section with headline, subtitle, CTAs, and background media
 */
export default function Hero({
  headline = 'World Class Digital Experiences',
  subtitle = 'We create stunning, accessible, and performant web applications that drive results.',
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA = { text: 'View Work', href: '/projects' },
  backgroundType = 'gradient', // 'gradient', 'image', 'video'
  backgroundImage = null,
  backgroundVideo = null,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (backgroundVideo) {
      const video = document.getElementById('hero-video');
      if (video) {
        video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    }
  }, [backgroundVideo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundType === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#5569ff] via-[#3b47f5] to-[#111827]" />
        )}

        {backgroundType === 'image' && backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}

        {backgroundType === 'video' && backgroundVideo && (
          <video
            id="hero-video"
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom text-center text-white px-4 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            href={primaryCTA.href}
            variant="primary"
            size="lg"
            className="min-w-[200px] bg-white text-[#5569ff] hover:bg-gray-100"
          >
            {primaryCTA.text}
          </Button>

          <Button
            href={secondaryCTA.href}
            variant="outline"
            size="lg"
            className="min-w-[200px] border-white text-white hover:bg-white hover:text-[#5569ff]"
          >
            {secondaryCTA.text}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 1,
          delay: shouldReduceMotion ? 0 : 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
