'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { slideUp, staggerContainer } from '@/lib/motion-variants';

/**
 * ServicesGrid Component
 * Displays services in a responsive grid with animations
 */
export default function ServicesGrid({ services }) {
  const shouldReduceMotion = useReducedMotion();

  const defaultServices = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      icon: '🎨',
    },
    {
      title: 'E-Commerce',
      description: 'Powerful online stores that drive sales and growth.',
      icon: '🛒',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search rankings and organic traffic.',
      icon: '🔍',
    },
    {
      title: 'Consulting',
      description: 'Strategic guidance for your digital transformation.',
      icon: '💡',
    },
  ];

  const servicesList = services || defaultServices;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {servicesList.map((service, index) => (
        <motion.div
          key={index}
          className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#5569ff] hover:shadow-lg transition-all duration-300"
          variants={slideUp(shouldReduceMotion)}
          whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
        >
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-3 text-[#111827]">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
