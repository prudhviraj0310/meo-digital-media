"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["ALL", "BRAND", "MARKETING", "PRODUCT", "DIGITAL"];

export default function WorkGrid({ projects }) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category.toUpperCase() === activeFilter);

  return (
    <section id="work" className="section-padding bg-black border-t border-white/10">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-8">
            RECENT WORK
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
              Projects that define excellence
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 border ${activeFilter === category
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/20 hover:border-white/60"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Work Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="group block relative"
            >
              {/* Glassmorphic Card Container */}
              <motion.div
                className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Project Image */}
                  <Image
                    src={project.image || `https://images.unsplash.com/photo-${1600000000000 + index}0-000000000000?q=80&w=1200&auto=format&fit=crop`}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 backdrop-blur-md bg-black/60 border border-white/20 rounded-lg">
                    <span className="text-white text-xs uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Arrow with Glass Effect */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-12 h-12 backdrop-blur-md bg-white/20 border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: -45 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Project Info with Glass Background */}
                <div className="p-5 sm:p-6 backdrop-blur-sm bg-black/20">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3 sm:line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/20" />
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* View All Link */}
        <div className="mt-20 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white text-black text-base sm:text-lg font-bold hover:bg-white/90 transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
