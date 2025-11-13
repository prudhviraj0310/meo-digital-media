'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { slideUp } from '@/lib/motion-variants';

/**
 * FAQAccordion Component
 * Expandable FAQ accordion with smooth animations
 */
export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const defaultFaqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects take 4-8 weeks depending on complexity. We provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like Next.js, React, TailwindCSS, and Framer Motion to build fast, scalable applications.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We offer maintenance packages with ongoing support, updates, and optimization services.',
    },
    {
      question: 'Can you work with my existing brand?',
      answer: 'Absolutely! We can work with your existing brand guidelines or help you create a new brand identity.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer fixed-price packages and custom quotes based on project scope. Contact us for a personalized estimate.',
    },
  ];

  const faqList = faqs || defaultFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqList.map((faq, index) => (
        <motion.div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff] focus-visible:ring-inset"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-lg text-[#111827]">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
              className="text-2xl text-[#5569ff] flex-shrink-0 ml-4"
            >
              ⌄
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
