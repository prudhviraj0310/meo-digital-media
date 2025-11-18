"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
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

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    // Load video and set it up for scrubbing
    const setupVideo = async () => {
      try {
        // Pause video - we'll control it with scroll
        video.pause();
        
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
  }, [prefersReducedMotion]);

  // Sync video playback with scroll position within hero section
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || !isLoaded) return;

    const unsubscribe = videoProgress.on('change', (latest) => {
      // Map progress (0-1) to video duration
      if (video.duration) {
        // Clamp between 0 and duration
        const targetTime = Math.min(Math.max(latest * video.duration, 0), video.duration);
        video.currentTime = targetTime;
      }
    });

    return () => unsubscribe();
  }, [videoProgress, prefersReducedMotion, isLoaded]);

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
