'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { slideUp } from '@/lib/motion-variants';

/**
 * BlogCard Component
 * Individual blog post card with image, title, excerpt, and metadata
 */
export default function BlogCard({ post }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      variants={slideUp(shouldReduceMotion)}
      whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className="relative w-full h-48 bg-gray-200">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {post.category && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#5569ff] bg-[#f0f4ff] rounded-full mb-3">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-[#111827] hover:text-[#5569ff] transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime || '5 min read'}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
