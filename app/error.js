"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="w-32 h-32 border-4 border-red-500/30 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-16 h-16 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Error Message */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 lg:p-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Something Went Wrong
            </h2>
            <p className="text-xl lg:text-2xl text-white/60 mb-4 leading-relaxed">
              We encountered an unexpected error. Don't worry, our team has been notified.
            </p>
            
            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === "development" && error?.message && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-400 font-mono text-left break-all">
                  {error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                onClick={() => reset()}
                className="group relative overflow-hidden inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 block px-8 py-4 text-lg font-bold text-white">
                  Try Again
                </span>
                <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 group-hover:bg-white/30 transition-all duration-300 rounded-full" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full" />
              </motion.button>

              <Link href="/">
                <motion.div
                  className="group relative overflow-hidden inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 block px-8 py-4 text-lg font-bold text-white/80">
                    Go Home
                  </span>
                  <div className="absolute inset-0 backdrop-blur-md bg-white/5 border border-white/20 group-hover:bg-white/10 transition-all duration-300 rounded-full" />
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/40"
          >
            If the problem persists, please{" "}
            <Link href="/contact" className="text-white/60 hover:text-white underline">
              contact our support team
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
