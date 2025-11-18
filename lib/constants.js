// Design System Constants
// Centralized constants for consistency across the application

// Animation Delays
export const ANIMATION_DELAY = {
  NONE: 0,
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
  EXTRA_LONG: 0.5,
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.8,
  EXTRA_SLOW: 1.2,
};

// Easing Functions
export const EASING = {
  EASE_OUT_EXPO: 'cubic-bezier(0.16, 1, 0.3, 1)',
  EASE_IN_OUT_QUART: 'cubic-bezier(0.76, 0, 0.24, 1)',
  SPRING: { type: 'spring', stiffness: 300, damping: 30 },
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Z-Index Layers
export const Z_INDEX = {
  BEHIND: -1,
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 100,
  FIXED: 200,
  MODAL_BACKDROP: 1000,
  MODAL: 1001,
  POPOVER: 2000,
  TOAST: 3000,
  TOOLTIP: 4000,
  CUSTOM_CURSOR: 9999,
};

// Color Palette (from CSS variables)
export const COLORS = {
  PRIMARY: '#5569ff',
  PRIMARY_DARK: '#3b47f5',
  BLACK: '#111827',
  WHITE: '#ffffff',
};

// Typography Scale
export const FONT_SIZES = {
  DISPLAY_XL: 'clamp(6rem, 12vw, 12rem)',
  DISPLAY_LG: 'clamp(4rem, 8vw, 9rem)',
  DISPLAY_MD: 'clamp(3rem, 6vw, 6rem)',
  HEADING_XL: 'clamp(2.5rem, 5vw, 4.5rem)',
  HEADING_LG: 'clamp(2rem, 4vw, 3.5rem)',
  HEADING_MD: 'clamp(1.5rem, 3vw, 2.5rem)',
  BODY_LG: 'clamp(1.25rem, 2vw, 1.75rem)',
  BODY: '1.125rem',
  BODY_SM: '0.875rem',
};

// Spacing Scale
export const SPACING = {
  SECTION: 'clamp(5rem, 10vw, 10rem)',
  ELEMENT: 'clamp(3rem, 6vw, 6rem)',
};

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT_FORM: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  PROJECTS: '/api/projects',
};

// Social Media Links (fallback)
export const SOCIAL_LINKS = {
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
  INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
  TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  DRIBBBLE: process.env.NEXT_PUBLIC_DRIBBBLE_URL || '#',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@meodigitalmedia.com',
  PHONE: '+919884721844',
  ADDRESS: {
    CITY: 'Chennai',
    STATE: 'Tamil Nadu',
    COUNTRY: 'India',
  },
};

// Site Configuration
export const SITE_CONFIG = {
  NAME: 'MEO Digital Media',
  TAGLINE: '360° Digital Marketing Agency',
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://meodigitalmedia.com',
  DESCRIPTION: 'Leading digital marketing agency in Chennai offering branding, social media marketing, SEO, web development, and creative services.',
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

// Feature Flags
export const FEATURES = {
  CUSTOM_CURSOR: true,
  ANALYTICS: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEWSLETTER: false,
  DARK_MODE: false,
  MULTI_LANGUAGE: false,
};

// Performance Thresholds
export const PERFORMANCE = {
  LARGE_FILE_WARNING_SIZE: 1024 * 1024, // 1MB
  MAX_IMAGE_WIDTH: 1920,
  MAX_IMAGE_HEIGHT: 1080,
  LAZY_LOAD_THRESHOLD: 0.1,
};

// Form Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
};

// Analytics Events
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  VIDEO_PLAY: 'video_play',
  PROJECT_VIEW: 'project_view',
  DOWNLOAD: 'download',
  EXTERNAL_LINK: 'external_link',
  SCROLL_DEPTH: 'scroll_depth',
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  VALIDATION: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  SERVER: 'Server error. Please try again later.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMIT: 'Thank you! We will get back to you soon.',
  NEWSLETTER: 'Successfully subscribed to newsletter!',
  DOWNLOAD: 'Download started successfully.',
};
