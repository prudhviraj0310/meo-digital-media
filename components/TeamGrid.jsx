'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { slideUp, staggerContainer } from '@/lib/motion-variants';

/**
 * TeamGrid Component
 * Displays team members in a responsive grid
 */
export default function TeamGrid({ members }) {
  const shouldReduceMotion = useReducedMotion();

  const defaultMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: '/team/alex.jpg',
      bio: 'Visionary leader with 10+ years in digital innovation.',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: '/team/sarah.jpg',
      bio: 'Award-winning designer passionate about user experience.',
    },
    {
      name: 'Michael Brown',
      role: 'Senior Developer',
      image: '/team/michael.jpg',
      bio: 'Full-stack expert specializing in modern web technologies.',
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: '/team/emily.jpg',
      bio: 'Ensures every project is delivered on time and on budget.',
    },
  ];

  const teamMembers = members || defaultMembers;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerContainer(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="text-center"
          variants={slideUp(shouldReduceMotion)}
          whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
        >
          <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            )}
            {!member.image && (
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                👤
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-1 text-[#111827]">
            {member.name}
          </h3>
          <p className="text-[#5569ff] font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 text-sm">{member.bio}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
