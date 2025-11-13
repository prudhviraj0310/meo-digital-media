'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

/**
 * TestimonialsCarousel Component
 * Testimonial slider with drag support and autoplay
 * Uses AnimatePresence for smooth transitions
 */
export default function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const defaultTestimonials = [
    {
      quote: 'World Class Digital transformed our online presence. The results exceeded our expectations!',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '/testimonials/sarah.jpg',
    },
    {
      quote: 'Professional, creative, and incredibly responsive. Highly recommend their services.',
      author: 'Michael Chen',
      role: 'Founder, Design Studio',
      image: '/testimonials/michael.jpg',
    },
    {
      quote: 'The attention to detail and user experience is unmatched. Our conversion rates doubled!',
      author: 'Emily Rodriguez',
      role: 'Marketing Director, E-Shop',
      image: '/testimonials/emily.jpg',
    },
  ];

  const testimonialsList = testimonials || defaultTestimonials;

  // Autoplay functionality
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, shouldReduceMotion]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: shouldReduceMotion ? 0 : direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: shouldReduceMotion ? 0 : direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Testimonials carousel"
      aria-live="polite"
    >
      {/* Carousel Container */}
      <div className="overflow-hidden relative min-h-[300px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: shouldReduceMotion ? 0.01 : 0.2 },
            }}
            drag={shouldReduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextTestimonial();
              } else if (swipe > swipeConfidenceThreshold) {
                prevTestimonial();
              }
            }}
            className="w-full text-center px-8"
          >
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-6">
                {testimonialsList[currentIndex].image && (
                  <Image
                    src={testimonialsList[currentIndex].image}
                    alt={testimonialsList[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                )}
                {!testimonialsList[currentIndex].image && (
                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-400">
                    👤
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-[#111827] mb-6 max-w-2xl">
                "{testimonialsList[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#111827]">
                  {testimonialsList[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonialsList[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl text-[#5569ff] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff]"
        aria-label="Previous testimonial"
      >
        ‹
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl text-[#5569ff] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff]"
        aria-label="Next testimonial"
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff] focus-visible:ring-offset-2 ${
              index === currentIndex
                ? 'bg-[#5569ff] w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
