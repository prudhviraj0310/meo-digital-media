# HeroCinematic Component Documentation

## Overview
Production-ready cinematic hero component for MEO Digital Media, featuring 60fps parallax tilt, particle effects, and staggered text animations.

## Features
- ✅ Full-screen cinematic hero with animated gradient
- ✅ 60fps parallax tilt using requestAnimationFrame
- ✅ Subtle bokeh/particle layer for depth
- ✅ Soft spotlight glow behind text
- ✅ Word-by-word staggered animation
- ✅ Video or image background support with fallback
- ✅ Fully accessible (WCAG AA compliant)
- ✅ Mobile-responsive
- ✅ Respects prefers-reduced-motion
- ✅ SEO-friendly

## Component Usage

```jsx
import HeroCinematic from "@/components/HeroCinematic";

<HeroCinematic
  title="Transforming Brands
into Digital Experiences"
  subtitle="We build high-performance digital ecosystems driven by strategy, creativity, and technology."
  primaryCta={{ text: "Get in Touch", href: "/contact" }}
  secondaryCta={{ text: "View Our Work", href: "/portfolio" }}
  backgroundVideo="/videos/hero.mp4"
  backgroundImage="/images/hero.jpg"
  alignment="center"
  overlay={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Transforming Brands\ninto Digital Experiences" | Hero headline (supports \n for line breaks) |
| `subtitle` | string | "We build high-performance..." | Subheadline text |
| `primaryCta` | object | `{ text: "Get in Touch", href: "/contact" }` | Primary CTA button |
| `secondaryCta` | object | `{ text: "View Our Work", href: "/portfolio" }` | Secondary CTA button |
| `backgroundVideo` | string \| null | null | Path to MP4 video file |
| `backgroundImage` | string \| null | null | Path to image file (fallback) |
| `alignment` | "center" \| "left" \| "right" | "center" | Content alignment |
| `overlay` | boolean | true | Dark overlay on background media |

## Animation Timeline

```
0.0s  — Gradient fades in
0.2s  — Particles appear
0.4s  — First word animates up
0.5s  — Second word
0.6s  — Third word
0.7s  — Additional words stagger
0.8s  — Subtitle fades in
1.0s  — CTAs slide in
1.5s  — Scroll indicator appears
```

## Recommended Assets

### Background Video
- Format: MP4 (H.264)
- Resolution: 1920x1080 or 4K
- Length: 10-30 seconds (looped)
- File size: <5MB (optimized)
- Style: Cinematic, subtle motion, not distracting

### Background Image (Fallback)
- Format: WebP or JPG
- Resolution: 2560x1440 minimum
- File size: <500KB (optimized)
- Style: Premium, editorial quality, aligned with brand

## Accessibility Features

✅ **Focus Management**: All interactive elements have visible focus rings  
✅ **Keyboard Navigation**: Full keyboard support (Tab, Enter)  
✅ **Motion Safety**: Respects `prefers-reduced-motion` system setting  
✅ **Color Contrast**: Meets WCAG AA standards (4.5:1)  
✅ **Screen Readers**: Proper semantic HTML and ARIA labels  

## Performance Optimizations

- Uses `requestAnimationFrame` for smooth 60fps parallax
- GPU-accelerated transforms with `will-change`
- Lazy-loaded video with poster image fallback
- Optimized particle count (20) for performance
- Efficient React hooks (useRef, useState, useEffect)

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 14+)
- Mobile browsers: ✅ Responsive + touch-optimized

## Notes

- Video auto-plays, muted, and loops (best practice)
- Particles automatically disabled on reduced-motion preference
- Component is "use client" for interactive features
- Works seamlessly with Next.js Image optimization
- Zero external dependencies except Framer Motion

## Integration Example

```jsx
// app/page.js
import HeroCinematic from "@/components/HeroCinematic";

export default function Home() {
  return (
    <div>
      <HeroCinematic
        title="Your Brand
Your Story"
        subtitle="Crafting digital experiences that drive results."
        primaryCta={{ text: "Start Project", href: "/contact" }}
        secondaryCta={{ text: "View Portfolio", href: "/work" }}
        backgroundVideo="/videos/agency-hero.mp4"
        alignment="center"
      />
      
      {/* Rest of your page content */}
    </div>
  );
}
```

## Customization Tips

### Change Colors
Edit the gradient in the component:
```jsx
className="relative w-full h-screen ... bg-gradient-to-br from-[#5569ff] via-[#4556ee] to-[#3b47f5]"
```

### Adjust Animation Speed
Modify delay values in variants:
```jsx
delay: 0.4 + (i * 0.1), // Increase 0.1 to slow down stagger
```

### Particle Density
Change particle count in Particles component:
```jsx
const particles = Array.from({ length: 20 }, ...) // Increase/decrease 20
```

---

**Built for MEO Digital Media** | Production-Ready | Nov 2025
