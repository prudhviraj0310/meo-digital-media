"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WorkShowcase({ projects }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal scroll based on number of projects
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 85}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111827]"
      style={{ height: `${projects.length * 80}vh` }}
    >
      {/* Sticky container that holds everything */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Section label - fixed on left */}
        <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="flex flex-col items-start">
            <span className="text-[#5569ff] text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Selected Works
            </span>
            <h2
              className="text-6xl font-black text-white uppercase tracking-tight"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Portfolio
            </h2>
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <motion.div
          style={{ x }}
          className="flex gap-8 pl-32 lg:pl-48 pr-12"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] lg:w-[70vw] h-[75vh]"
            >
              {/* Project card */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1f35] to-[#0f1118] group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image area - top 60% */}
                <div className="relative w-full h-[60%] bg-gradient-to-br from-[#5569ff]/30 to-[#3b47f5]/20 flex items-center justify-center">
                  {/* Category badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-white text-xs lg:text-sm font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Placeholder icon/number */}
                  <div className="text-white/10 text-[8rem] lg:text-[12rem] font-black leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content area - bottom 40% */}
                <div className="p-8 lg:p-10 h-[40%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl lg:text-5xl font-black text-[#5569ff]/50 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-[#5569ff] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-base lg:text-lg text-white/60 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* View project link */}
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-3 text-white font-bold text-base lg:text-lg group-hover:text-[#5569ff] transition-colors duration-300 mt-4"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </motion.div>
            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-12"></div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 right-12 text-white/40 text-xs lg:text-sm uppercase tracking-wider hidden lg:block">
          <div className="flex items-center gap-3">
            <span>Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

