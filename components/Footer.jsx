'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Footer Component - MakeReign Enhanced Style
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/meodigitalmedia' },
    { name: 'Instagram', href: 'https://instagram.com/meodigitalmedia' },
    { name: 'Twitter', href: 'https://twitter.com/meodigitalmedia' },
    { name: 'Dribbble', href: '#' },
    { name: 'Medium', href: '#' },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-10%] sm:left-1/4 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full bg-purple-500/5 blur-[90px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] sm:right-1/4 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/5 blur-[90px] sm:blur-[120px]" />
      </div>

      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl py-16 sm:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Menu */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">MENU</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => link.href.startsWith('#') && smoothScroll(e, link.href)}
                    className="text-white/80 text-base hover:text-white transition-colors inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Social */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">SOCIAL</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-base hover:text-white transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
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
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">GET IN TOUCH</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@meodigitalmedia.com"
                  className="text-white/80 text-base hover:text-white transition-colors"
                >
                  info@meodigitalmedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919884721844"
                  className="text-white/80 text-base hover:text-white transition-colors"
                >
                  +91 98847 21844
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/1PUNCPG9p8V5w7Nq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-base hover:text-white transition-colors"
                >
                  Chennai, India
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">NEWSLETTER</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Get insights and updates delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                type="submit"
                className="text-white/80 text-sm font-semibold hover:text-white transition-colors inline-flex items-center gap-2 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Subscribe</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </motion.button>
            </form>
          </div>
        </div>

        {/* Branding Section */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-5 py-3">
              <Image
                src="/logo-gold.png"
                alt="MEO Digital Media"
                width={220}
                height={76}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm sm:text-base max-w-md">
              Creative-led strategic partner for modern companies who want to scale with speed and clarity.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-white/40 text-xs">
            <span>© {currentYear} MEO Digital Media.</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/40 text-xs uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
