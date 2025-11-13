# 🎨 Instrument-Style Components

This directory contains components designed to match **Instrument.com's** dark, minimal, corporate aesthetic.

---

## 📦 Component Overview

### 1. **LoadingScreen.jsx**
Full-screen loading animation that appears on initial page load.

**Features:**
- Black background (#000000)
- "MEO" logo fade-in animation
- Animated progress bar (0-100%)
- Percentage counter
- Smooth slide-up exit after completion

**Usage:**
```jsx
import LoadingScreen from "@/components/LoadingScreen";

// In layout.js or page component
<LoadingScreen />
```

**How it works:**
- Uses `useState` to track loading state and progress
- `useEffect` with interval to increment progress by 2% every 30ms
- Exits automatically when progress reaches 100%
- Uses Framer Motion's `AnimatePresence` for smooth exit

---

### 2. **HeroInstrument.jsx**
Large image hero section with parallax scroll effect.

**Features:**
- Full-viewport height
- Large Unsplash background image
- Parallax scroll effect (image moves slower than page)
- Left-aligned headline text
- Accent color on "Digital" word
- Two CTA buttons (filled + outline)
- Scroll indicator at bottom

**Usage:**
```jsx
import HeroInstrument from "@/components/HeroInstrument";

// In page component
<HeroInstrument />
```

**Customization:**
- Change image URL in the `img` src
- Update headline text
- Modify button links
- Adjust parallax speed by changing `useTransform` output range

---

### 3. **WorkGrid.jsx**
Filterable grid of project cards.

**Features:**
- Category filter buttons (ALL / BRAND / MARKETING / PRODUCT / DIGITAL)
- 2-column responsive grid
- Large project images
- Category badges
- Hover effects (scale + opacity)
- Arrow indicator on hover
- "View All Projects" CTA

**Usage:**
```jsx
import WorkGrid from "@/components/WorkGrid";
import { portfolioProjects } from "@/data/portfolio";

// In page component
<WorkGrid projects={portfolioProjects} />
```

**Props:**
- `projects` (array): Array of project objects with:
  - `title` (string)
  - `description` (string)
  - `category` (string): BRAND | MARKETING | PRODUCT | DIGITAL
  - `image` (string): Image URL
  - `href` (string): Link to project

**Customization:**
- Add/remove filter categories in `categories` array
- Change grid columns: `grid-cols-2` → `grid-cols-3`
- Adjust aspect ratio: `aspect-[4/3]` → `aspect-[16/9]`

---

### 4. **NavbarMinimal.jsx**
Minimal black navigation bar with smooth scroll.

**Features:**
- Transparent at top, black when scrolled
- "MEO" text logo
- Clean uppercase menu items
- "Get in Touch" CTA button
- Smooth scroll to sections
- Mobile hamburger menu with full-screen overlay

**Usage:**
```jsx
import NavbarMinimal from "@/components/NavbarMinimal";

// In layout.js
<NavbarMinimal />
```

**Menu Items:**
Defined in `menuItems` array:
```javascript
const menuItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
```

**Customization:**
- Add/remove menu items
- Change logo text
- Adjust scroll threshold: `window.scrollY > 50`
- Modify mobile menu animations

---

### 5. **Footer.jsx** (Updated)
4-column Instrument-style footer with newsletter.

**Features:**
- "Get in Touch" - Contact info
- "See More" - Navigation links
- "Follow" - Social media
- "Newsletter" - Email subscription form
- Bottom bar with copyright
- Smooth scroll functionality

**Usage:**
```jsx
import Footer from "@/components/Footer";

// In layout.js
<Footer />
```

**Sections:**
Defined in `footerSections` object:
```javascript
const footerSections = {
  'Get in Touch': [...],
  'See More': [...],
  'Follow': [...],
  'Newsletter': [...],
};
```

**Customization:**
- Update contact information
- Add/remove social links
- Connect newsletter form to email service
- Adjust column layout

---

## 🎨 Design System

### Colors
```css
/* Pure black background */
bg-black (#000000)

/* White text with opacity */
text-white (100%)
text-white/80 (80%)
text-white/60 (60%)
text-white/40 (40%)

/* Borders */
border-white/10 (10%)

/* Accent (minimal use) */
#5569ff (Blue)
```

### Typography
```css
/* Headlines */
text-5xl lg:text-7xl (48px-72px)
font-bold

/* Body */
text-base lg:text-lg (16px-20px)

/* Labels */
text-xs uppercase tracking-[0.2em] (12px, uppercase, wide spacing)
```

### Spacing
```css
/* Section padding */
py-20 lg:py-32

/* Container */
max-w-7xl mx-auto px-6 lg:px-16

/* Grid gaps */
gap-8 lg:gap-12
```

### Animations
```css
/* Transitions */
transition-colors duration-300
transition-all duration-700

/* Hover effects */
hover:opacity-80
hover:scale-105
```

---

## 🖼️ Image Guidelines

### Sources
- **Unsplash API**: `https://images.unsplash.com/photo-{id}?q=80&w=1200&auto=format&fit=crop`
- **Local**: `/public/images/` (if using local files)

### Aspect Ratios
- **Hero**: Full viewport (100vh)
- **Project cards**: 4:3 (`aspect-[4/3]`)
- **Wide images**: 16:9 (`aspect-[16/9]`)

### Optimization
- Use Unsplash's `?q=80&w=1200&auto=format&fit=crop` parameters
- Next.js Image component for local files
- WebP format for better compression

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
default (< 640px)

/* Tablet */
md: (768px)

/* Desktop */
lg: (1024px)

/* Large desktop */
xl: (1280px)
```

---

## 🎯 Best Practices

### 1. **Keep it Minimal**
- Use generous whitespace
- Avoid decorative elements
- Simple hover effects only

### 2. **Typography**
- Use 60-96px for main headlines
- Body text 16-24px
- Uppercase labels with letter-spacing

### 3. **Colors**
- Stick to pure black (#000000)
- White text with opacity variations
- Minimal accent color usage

### 4. **Images**
- High-quality professional photography
- Consistent aspect ratios
- Subtle hover effects (scale + opacity)

### 5. **Animations**
- Smooth and subtle (300-700ms)
- No flashy effects
- Use Framer Motion for complex animations

---

## 🔧 Technical Notes

### Framer Motion Hooks

**useScroll**
```javascript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"],
});
```

**useTransform**
```javascript
const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
```

**AnimatePresence**
```javascript
<AnimatePresence>
  {isVisible && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>
```

### Smooth Scroll
```javascript
const smoothScroll = (e, targetId) => {
  e.preventDefault();
  document.querySelector(targetId)?.scrollIntoView({ 
    behavior: "smooth", 
    block: "start" 
  });
};
```

---

## 📚 Dependencies

```json
{
  "framer-motion": "^11.x",
  "next": "16.0.2",
  "react": "^18",
  "tailwindcss": "^3.x"
}
```

---

## 🚀 Quick Start

1. **Import component:**
```javascript
import Component from "@/components/Component";
```

2. **Use in page:**
```javascript
<Component props={data} />
```

3. **Customize styles:**
- Modify Tailwind classes
- Update colors in globals.css
- Adjust animations

---

## 💡 Tips

- **Loading Screen**: Adjust progress speed by changing interval time (30ms) and increment value (2%)
- **Hero Parallax**: Change parallax intensity by modifying `useTransform` output range
- **Work Grid**: Filter logic uses `toUpperCase()` for case-insensitive matching
- **Navbar**: Scroll threshold of 50px triggers background change
- **Footer**: Newsletter form needs backend integration

---

## 🎨 Instrument.com Match

These components replicate key Instrument.com features:
- ✅ Pure black background
- ✅ Large professional images
- ✅ Minimal white text
- ✅ Clean typography
- ✅ Subtle animations
- ✅ Grid layouts
- ✅ Category filtering
- ✅ Newsletter subscription

---

**Built with ❤️ for MEO Digital Media**
