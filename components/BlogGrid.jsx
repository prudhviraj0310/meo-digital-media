'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BlogCard from './BlogCard';
import { staggerContainer } from '@/lib/motion-variants';

/**
 * BlogGrid Component
 * Displays blog posts in a grid with optional filtering
 */
export default function BlogGrid({ posts, showFilters = true }) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(posts.map((post) => post.category))];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      {/* Category Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff] ${
                selectedCategory === category
                  ? 'bg-[#5569ff] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Blog Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer(shouldReduceMotion)}
        initial="hidden"
        animate="visible"
        key={selectedCategory} // Re-animate on filter change
      >
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </motion.div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No posts found in this category.
        </div>
      )}
    </div>
  );
}
