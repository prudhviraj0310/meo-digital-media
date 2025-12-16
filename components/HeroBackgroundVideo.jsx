"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll progress within hero section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to video time
  const videoProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check for mobile device (touch or small screen)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    // Load video
    const setupVideo = async () => {
      try {
        if (!isMobile) {
          // Pause video - we'll control it with scroll on desktop
          video.pause();
        } else {
          // Play video normally on mobile
          video.play().catch(() => { });
        }

        // Wait for video to be ready
        if (video.readyState < 3) {
          await new Promise((resolve) => {
            video.addEventListener('canplaythrough', resolve, { once: true });
          });
        }

        setIsLoaded(true);
      } catch (error) {
        console.log('Video setup error:', error);
        setIsLoaded(true);
      }
    };

    setupVideo();
  }, [prefersReducedMotion, isMobile]);

  // Sync video playback with scroll position within hero section (Desktop Only)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || !isLoaded || isMobile) return;

    const unsubscribe = videoProgress.on('change', (latest) => {
      // Map progress (0-1) to video duration
      if (video.duration) {
        // Clamp between 0 and duration
        const targetTime = Math.min(Math.max(latest * video.duration, 0), video.duration);
        video.currentTime = targetTime;
      }
    });

    return () => unsubscribe();
  }, [videoProgress, prefersReducedMotion, isLoaded, isMobile]);

  // Don't render video if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="hero-video-fallback">
        <div
          className="hero-video-poster"
          style={{ backgroundImage: 'url(/video/hero-poster-blur.jpg)' }}
        />
        <div className="hero-video-overlay" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="hero-video-container">
      {/* Video Element */}
      <motion.video
        ref={videoRef}
        className="hero-video"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        muted
        playsInline
        loop={true} // Always loop, relevant for mobile autoplay
        autoPlay={true} // Autoplay on mobile
        preload="auto"
        poster="/video/hero-poster.jpg"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </motion.video>

      {/* Dark Gradient Overlay - Blends with Electric Indigo */}
      <div className="hero-video-overlay" />

      {/* Subtle Grain Texture (Optional - adds film quality) */}
      <div className="hero-video-grain" />
    </div>
  );
}
