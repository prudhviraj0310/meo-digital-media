'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import { slideUp, staggerContainer } from '@/lib/motion-variants';

/**
 * PricingTable Component
 * Displays pricing plans in a responsive grid
 */
export default function PricingTable({ plans }) {
  const shouldReduceMotion = useReducedMotion();

  const defaultPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page website',
        'Responsive design',
        'Basic SEO',
        'Contact form',
        '30-day support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        '10-page website',
        'Advanced animations',
        'SEO optimization',
        'CMS integration',
        'E-commerce ready',
        '90-day support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom features',
        'Advanced integrations',
        'Performance optimization',
        'Dedicated support',
        '1-year maintenance',
      ],
      highlighted: false,
    },
  ];

  const pricingPlans = plans || defaultPlans;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      variants={staggerContainer(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={index}
          className={`p-8 rounded-2xl border-2 ${
            plan.highlighted
              ? 'border-[#5569ff] bg-[#5569ff] text-white scale-105'
              : 'border-gray-200 bg-white'
          } transition-all duration-300`}
          variants={slideUp(shouldReduceMotion)}
          whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
        >
          {plan.highlighted && (
            <div className="text-sm font-semibold mb-4 text-white">
              MOST POPULAR
            </div>
          )}
          <h3
            className={`text-2xl font-bold mb-2 ${
              plan.highlighted ? 'text-white' : 'text-[#111827]'
            }`}
          >
            {plan.name}
          </h3>
          <div className="mb-4">
            <span
              className={`text-4xl font-bold ${
                plan.highlighted ? 'text-white' : 'text-[#5569ff]'
              }`}
            >
              {plan.price}
            </span>
          </div>
          <p
            className={`mb-6 ${
              plan.highlighted ? 'text-gray-100' : 'text-gray-600'
            }`}
          >
            {plan.description}
          </p>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className={`flex items-start ${
                  plan.highlighted ? 'text-white' : 'text-gray-700'
                }`}
              >
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <Button
            href="/contact"
            variant={plan.highlighted ? 'outline' : 'primary'}
            fullWidth
            className={
              plan.highlighted
                ? 'border-white text-white hover:bg-white hover:text-[#5569ff]'
                : ''
            }
          >
            Get Started
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
