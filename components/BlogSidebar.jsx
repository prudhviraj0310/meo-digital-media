'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * BlogSidebar Component
 * FIXED: Removed inline <style jsx> injection issue
 * Blog sidebar with search, recent posts, categories, tags, and CTA
 */
export default function BlogSidebar({ recentPosts, categories, tags }) {
  const [searchQuery, setSearchQuery] = useState('');

  const defaultRecentPosts = [
    { title: 'Getting Started with Next.js', slug: 'getting-started-nextjs' },
    { title: '10 UI/UX Best Practices', slug: 'ui-ux-best-practices' },
    { title: 'Building Accessible Websites', slug: 'accessible-websites' },
  ];

  const defaultCategories = [
    { name: 'Design', count: 12 },
    { name: 'Development', count: 18 },
    { name: 'Business', count: 8 },
  ];

  const defaultTags = [
    'Next.js',
    'React',
    'Design',
    'UX',
    'Performance',
    'SEO',
    'Accessibility',
  ];

  const postsList = recentPosts || defaultRecentPosts;
  const categoriesList = categories || defaultCategories;
  const tagsList = tags || defaultTags;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-[#111827]">Search</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5569ff]"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#5569ff]"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-[#111827]">Recent Posts</h3>
        <ul className="space-y-3">
          {postsList.map((post, index) => (
            <li key={index}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-gray-700 hover:text-[#5569ff] transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-[#111827]">Categories</h3>
        <ul className="space-y-2">
          {categoriesList.map((category, index) => (
            <li key={index} className="flex items-center justify-between">
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="text-gray-700 hover:text-[#5569ff] transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-sm text-gray-500">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-[#111827]">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tagsList.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-[#5569ff] hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="bg-gradient-to-br from-[#5569ff] to-[#3b47f5] p-6 rounded-lg text-white"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-lg font-bold mb-2">Need Help?</h3>
        <p className="text-sm text-gray-100 mb-4">
          Get expert advice for your project.
        </p>
        <Link
          href="/contact"
          className="inline-block px-4 py-2 bg-white text-[#5569ff] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </motion.div>
    </aside>
  );
}
