'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { slideUp, staggerContainer } from '@/lib/motion-variants';

/**
 * FeatureList Component
 * Displays a list of features with icons and descriptions
 * FIXED: Removed conditional wrapper bug - always uses motion components
 */
export default function FeatureList({ features, columns = 2 }) {
  const shouldReduceMotion = useReducedMotion();

  const defaultFeatures = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for performance and speed',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect on any device or screen size',
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'WCAG 2.1 AA compliant for all users',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Built with security best practices',
    },
  ];

  const featureList = features || defaultFeatures;

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <motion.ul
      className={`grid ${gridCols[columns]} gap-6`}
      variants={staggerContainer(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {featureList.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          variants={slideUp(shouldReduceMotion)}
        >
          <div className="text-4xl flex-shrink-0">{feature.icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#111827]">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
