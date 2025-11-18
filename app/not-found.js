"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <h1 className="text-[12rem] lg:text-[16rem] font-bold text-white/10 leading-none mb-8">
            404
          </h1>

          {/* Message */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 lg:p-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Page Not Found
            </h2>
            <p className="text-xl lg:text-2xl text-white/60 mb-8 leading-relaxed">
              Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <motion.div
                  className="group relative overflow-hidden inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 block px-8 py-4 text-lg font-bold text-white">
                    Go Home
                  </span>
                  <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 group-hover:bg-white/30 transition-all duration-300 rounded-full" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full" />
                </motion.div>
              </Link>

              <Link href="/contact">
                <motion.div
                  className="group relative overflow-hidden inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 block px-8 py-4 text-lg font-bold text-white/80">
                    Contact Us
                  </span>
                  <div className="absolute inset-0 backdrop-blur-md bg-white/5 border border-white/20 group-hover:bg-white/10 transition-all duration-300 rounded-full" />
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Navigation Suggestions */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Projects', href: '/projects' },
              { name: 'Contact', href: '/contact' },
            ].map((link, index) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 rounded-xl p-4"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
