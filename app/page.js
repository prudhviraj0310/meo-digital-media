"use client";

import HeroMakeReign from "@/components/HeroMakeReign";
import HeroCinematicVideo from "@/components/HeroCinematicVideo";
import WorkGrid from "@/components/WorkGrid";
import ScrollReveal, { ScrollRevealLeft } from "@/components/ScrollReveal";
import CounterAnimation from "@/components/CounterAnimation";
import AnimatedHeading from "@/components/AnimatedHeading";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const serviceTiles = [
    {
      title: "Digital Marketing Services",
      description: "Social Media Marketing, SEO & SEM, AI-Powered Digital Marketing, and E-commerce Marketing to boost your brand visibility and drive measurable growth.",
      href: "#services",
    },
    {
      title: "Branding & Creative Services",
      description: "Content Creation, Copywriting, Content Production, and Creative Strategy to build a brand that stands out and truly connects.",
      href: "#services",
    },
    {
      title: "Media & Advertising",
      description: "Strategic Media Planning & Buying, Print & OOH Advertising to maximize your brand's reach across all platforms.",
      href: "#services",
    },
    {
      title: "Technology & Development",
      description: "Custom Website & App Development, SaaS Development for scalable, user-friendly digital solutions.",
      href: "#services",
    },
    {
      title: "Photography & Videography",
      description: "Stunning visual content from product shoots to social media reels and ad films that bring your brand to life.",
      href: "#services",
    },
    {
      title: "Influencer & Movie Marketing",
      description: "Powerful influencer collaborations and creative movie marketing campaigns that capture audience attention.",
      href: "#services",
    },
  ];

  const featuredProjects = [
    {
      title: "Luxury Fashion Brand Launch",
      description: "Complete digital transformation including brand identity, e-commerce platform, and influencer campaign that generated $2M in first quarter sales.",
      category: "Branding",
      href: "/projects",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Blockbuster Movie Campaign",
      description: "Viral meme marketing strategy and social media campaign that reached 50M+ impressions and drove record opening weekend sales.",
      category: "Marketing",
      href: "/projects",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "SaaS Platform Development",
      description: "End-to-end product design and development for B2B SaaS platform with 10K+ active users and 98% satisfaction rate.",
      category: "Technology",
      href: "/projects",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Restaurant Chain Rebranding",
      description: "Complete brand refresh, menu design, and digital marketing that increased foot traffic by 150% across 20 locations.",
      category: "Branding",
      href: "/projects",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "E-commerce Growth Strategy",
      description: "Performance marketing campaign and conversion optimization that achieved 400% ROI and 5x revenue growth in 6 months.",
      category: "Marketing",
      href: "/projects",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section - Cinematic Video Background */}
      <HeroCinematicVideo
        headline="Creating Visual Stories"
        subtitle="We craft cinematic digital experiences that captivate and inspire."
        primaryCTA={{ text: 'Start a Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '#work' }}
        showScrollIndicator={true}
      />

      {/* About Snapshot Section */}
      <section className="section-padding bg-black">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Expressive and enduring digital experiences.
                </h2>
              </div>
              <div>
                <p className="text-xl lg:text-2xl text-white/60 leading-relaxed mb-8">
                  We are MEO Digital Media - your 360° digital partner. We blend creativity, technology, and strategy to help brands grow smarter, faster, and stronger.
                </p>
                <p className="text-lg lg:text-xl text-white/50 leading-relaxed">
                  Through collaboration with companies across industries, we build scalable brand systems and products that leverage emerging behaviors and technologies, and ultimately unlock potential.
                </p>
              </div>
            </div>

            {/* About Image Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section - Minimal */}
      <section id="services" className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-4">SERVICES</span>
              <AnimatedHeading className="text-5xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
                Our Offerings
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {serviceTiles.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href={service.href}
                  className="group block relative overflow-hidden rounded-2xl"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphic Container */}
                  <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
                    {/* Service Image */}
                    <div className="aspect-[16/9] overflow-hidden mb-6 rounded-xl relative">
                      <img
                        src={service.image || `https://images.unsplash.com/photo-${[
                          '1460925895917-afdab827c52f',
                          '1558655146-9f40138edfeb',
                          '1557804506-669a67965ba0',
                          '1611162617474-5b21e879e113',
                          '1551434678-e076c223a692',
                          '1557804506-669a67965ba0',
                        ][index % 6]
                          }?q=80&w=800&auto=format&fit=crop`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Image Glow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base lg:text-lg text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Grid - Instrument Style */}
      <WorkGrid projects={featuredProjects} />

      {/* Case Studies Section - MakeReign Style */}
      <section id="case-studies" className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-4">RECENT LAUNCHES</span>
              <AnimatedHeading className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Work and Engagements
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          {/* Case Study Grid - Alternating Layout */}
          <div className="space-y-32">
            {[
              {
                client: "LUXURY FASHION BRAND",
                title: "Delivering a complete digital transformation for one of India's fastest-growing fashion retailers.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
                align: "left",
              },
              {
                client: "TECH STARTUP",
                title: "In-depth product strategy and user experience development for India's leading SaaS provider.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
                align: "right",
              },
              {
                client: "RESTAURANT CHAIN",
                title: "Complete brand refresh and digital marketing campaign driving 150% foot traffic increase.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
                align: "left",
              },
              {
                client: "E-COMMERCE PLATFORM",
                title: "Innovative performance marketing strategy achieving 400% ROI and 5x revenue growth.",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
                align: "right",
              },
            ].map((caseStudy, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${caseStudy.align === "right" ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Image Side */}
                  <motion.div
                    className={`relative ${caseStudy.align === "right" ? "lg:order-2" : "lg:order-1"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                      <motion.img
                        src={caseStudy.image}
                        alt={caseStudy.client}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Glassmorphic Overlay on Hover */}
                      <div className="absolute inset-0 backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white text-lg font-bold uppercase tracking-wider">View Case Study</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className={caseStudy.align === "right" ? "lg:order-1" : "lg:order-2"}
                    initial={{ opacity: 0, x: caseStudy.align === "right" ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Glassmorphic Container */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-10 lg:p-12 rounded-2xl hover:border-white/20 transition-all duration-500">
                      <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-6">
                        {caseStudy.client}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
                        {caseStudy.title}
                      </h3>
                      <motion.a
                        href="/projects"
                        className="inline-flex items-center gap-3 text-white text-lg font-semibold group"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span>Explore Project</span>
                        <svg
                          className="w-6 h-6 transition-transform group-hover:translate-x-2"
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
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases / Insights Section */}
      <section id="insights" className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-4">LATEST NEWS</span>
              <AnimatedHeading className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Insights & Press
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {[
              {
                category: "PRESS RELEASE",
                date: "NOV 2024",
                title: "MEO Digital Media Expands Leadership Team with Appointment of Creative Technology Director",
                excerpt: "Announcing new leadership to drive AI-powered growth and innovation in digital experiences.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
              },
              {
                category: "PRESS RELEASE",
                date: "OCT 2024",
                title: "MEO Partners with Leading Fashion Brands to Revolutionize E-commerce Experiences",
                excerpt: "Strategic partnership brings cutting-edge digital solutions to fashion retail sector.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
              },
              {
                category: "CASE STUDY",
                date: "SEP 2024",
                title: "How We Achieved 50M+ Impressions for Blockbuster Movie Campaign",
                excerpt: "Deep dive into our viral meme marketing strategy that broke records.",
                image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
              },
              {
                category: "INSIGHTS",
                date: "AUG 2024",
                title: "The Future of Digital Marketing: AI-Powered Personalization at Scale",
                excerpt: "Exploring how artificial intelligence is transforming brand-consumer connections.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
              },
            ].map((article, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href="/insights"
                  className="group block"
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphic Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/20 px-4 py-2 rounded-lg">
                        <span className="text-white/90 text-xs uppercase tracking-wider font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="text-white/40 text-sm uppercase tracking-wider mb-4">
                        {article.date}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* View All CTA */}
          <ScrollReveal>
            <div className="text-center">
              <motion.a
                href="/insights"
                className="inline-block group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 block px-10 py-5 text-base lg:text-lg font-bold text-white">
                  View All Insights
                </span>
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-12">INDUSTRIES WE SERVE</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {['Fashion', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Entertainment', 'Food & Beverage', 'Education', 'Real Estate', 'Automotive', 'Sports', 'Travel'].map((industry, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <motion.div
                    className="group relative"
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Glassmorphic Container */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 flex items-center justify-center aspect-square hover:border-white/30 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]">
                      <span className="text-white/40 text-base lg:text-lg font-bold uppercase tracking-wide group-hover:text-white transition-all duration-300 group-hover:scale-110 text-center">
                        {industry}
                      </span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section - Minimal */}
      <section id="about" className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: '200+', label: 'Projects Delivered' },
              { number: '150+', label: 'Happy Clients' },
              { number: '50', label: 'Impressions Generated', suffix: 'M+' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -12, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphic Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]">
                    <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-none mb-4 tabular-nums group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                      <CounterAnimation value={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/40 text-sm lg:text-base uppercase tracking-wider group-hover:text-white/70 transition-colors duration-300">
                      {stat.label}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
          alt="Creative team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h3 className="text-4xl lg:text-6xl font-bold mb-4">
              Building Tomorrow's Brands Today
            </h3>
            <p className="text-xl lg:text-2xl text-white/80">
              Where creativity meets performance
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Clean */}
      <section className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-6xl">
          <ScrollReveal>
            <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-12">CLIENT STORIES</span>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                quote: "MEO Digital Media transformed our brand completely. Their meme marketing strategy for our movie launch generated over 50 million impressions!",
                author: "Rajesh Kumar",
                role: "Marketing Director, Major Film Studio",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
              },
              {
                quote: "The team's expertise in influencer marketing and content creation helped us achieve a 400% increase in e-commerce sales within 6 months.",
                author: "Priya Sharma",
                role: "Founder, Fashion Brand",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
              },
              {
                quote: "From branding to development, MEO Digital handled everything seamlessly. Our SaaS platform launch exceeded all expectations.",
                author: "Vikram Patel",
                role: "CEO, Tech Startup",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  className="max-w-4xl relative group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphic Container */}
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-10 lg:p-12 hover:border-white/30 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]">
                    <p className="text-2xl lg:text-4xl font-normal text-white leading-relaxed mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 relative z-10">
                      {/* Profile Image with Glow */}
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                        />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                          {testimonial.author}
                        </div>
                        <div className="text-base text-white/40 group-hover:text-white/60 transition-colors">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/10" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Let's Work Together Style */}
      <section id="contact" className="section-padding bg-black border-t border-white/10">
        <div className="container-custom mx-auto px-6 lg:px-16 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-white/40 text-sm uppercase tracking-[0.2em] block mb-8">GET IN TOUCH</span>
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight">
                Let's Work Together
              </h2>
            </div>
          </ScrollReveal>

          {/* Multi-Option Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Discuss a Project",
                description: "Have a project in mind? Let's talk about your vision and how we can bring it to life.",
                link: "mailto:projects@meodigitalmedia.com",
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Scale Your Team",
                description: "Need specialized talent? Our experts can seamlessly integrate with your team.",
                link: "mailto:talent@meodigitalmedia.com",
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Grow Your Career",
                description: "Join our team of creative thinkers and digital innovators. View open positions.",
                link: "mailto:careers@meodigitalmedia.com",
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
                title: "Just Want to Say Hi?",
                description: "We love connecting with fellow creatives. Drop us a message anytime!",
                link: "mailto:hello@meodigitalmedia.com",
              },
            ].map((option, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href={option.link}
                  className="group block"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphic Card */}
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-10 lg:p-12 rounded-2xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.2)] min-h-[280px] flex flex-col">
                    {/* Icon */}
                    <div className="text-white/60 mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {option.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                      {option.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {option.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-2"
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
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* Location & Time Section */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-12 border-t border-white/10">
            <ScrollReveal>
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 lg:p-10 rounded-2xl">
                <div className="flex items-baseline gap-4 mb-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">CHENNAI</h3>
                  <span className="text-xl text-white/60 tabular-nums">
                    {new Date().toLocaleTimeString('en-US', {
                      timeZone: 'Asia/Kolkata',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    })}
                  </span>
                </div>

                <a
                  href="https://maps.app.goo.gl/1PUNCPG9p8V5w7Nq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300 block mb-6"
                >
                  Chennai, Tamil Nadu<br />
                  India
                </a>

                <div className="space-y-4">
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-2">NEW BUSINESS</div>
                    <a href="mailto:info@meodigitalmedia.com" className="text-white hover:text-white/70 transition-colors">
                      info@meodigitalmedia.com
                    </a>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-2">PHONE</div>
                    <a href="tel:+919884721844" className="text-white hover:text-white/70 transition-colors">
                      +91 98847 21844
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 lg:p-10 rounded-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Connect With Us</h3>

                <div className="space-y-4">
                  {[
                    { name: 'LinkedIn', href: '#' },
                    { name: 'Instagram', href: '#' },
                    { name: 'Twitter', href: '#' },
                    { name: 'Dribbble', href: '#' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex items-center justify-between py-3 border-b border-white/10 group"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                      <svg
                        className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
