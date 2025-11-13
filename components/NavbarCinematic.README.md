# NavbarCinematic Component Documentation

## Overview
Premium glassmorphic navigation bar for MEO Digital Media, inspired by Apple, MakeReign, and Obys Studio. Features smart scroll behavior, backdrop blur, and cinematic interactions.

## Features
- ✅ Glassmorphic design with backdrop blur
- ✅ Smart scroll behavior (hide on scroll down, show on scroll up)
- ✅ Dynamic transparency (10% → 30% after 40px scroll)
- ✅ Smooth underline reveal on menu hover
- ✅ Glass CTA button with glow effect
- ✅ Animated hamburger menu morphing
- ✅ Mobile glassmorphic slide-down menu
- ✅ Backdrop blur overlay on mobile
- ✅ Fully accessible (WCAG AA compliant)
- ✅ Respects prefers-reduced-motion

## Component Usage

```jsx
import NavbarCinematic from "@/components/NavbarCinematic";

// In layout.js or any page
<NavbarCinematic logo="/images/logo.png" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | string \| null | null | Path to logo image (optional). If null, uses text "MEO Digital" |

## Visual States

### At Top of Page (0-40px scroll)
```
Background: bg-white/10 (10% opacity)
Backdrop Blur: backdrop-blur-md (medium)
Border: border-white/10 (subtle)
Shadow: None
```

### After Scrolling (40px+)
```
Background: bg-white/30 (30% opacity)
Backdrop Blur: backdrop-blur-xl (extra large)
Border: border-white/20 (more visible)
Shadow: shadow-[0_8px_32px_rgba(0,0,0,0.1)]
```

### Hidden State (scrolling down)
```
Opacity: 0
Y Position: -100px
Transition: 300ms ease-out-expo
```

## Menu Items

Default navigation:
```javascript
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
```

**To customize:** Edit the `menuItems` array inside the component.

## Interaction Effects

### Menu Items (Desktop)
- **Default**: White text, medium font weight
- **Hover**: 
  - Color changes to Electric Indigo (#5569ff)
  - Underline expands from left to right (gradient)
  - Duration: 300ms
- **Focus**: White ring with offset (keyboard navigation)

### CTA Button
- **Default**: Glass background (10% white), white border
- **Hover**:
  - Background opacity increases (20% white)
  - Border brightens (40% white)
  - Blue glow shadow appears
  - Subtle gradient overlay
- **Focus**: White ring with offset

### Mobile Hamburger
- **Default**: 3 horizontal lines
- **Open State**: 
  - Top line rotates 45° and moves down
  - Middle line fades out
  - Bottom line rotates -45° and moves up
- **Hover**: Lines change to Electric Indigo

## Mobile Menu

### Behavior
- Slides down from top with fade-in
- Positioned below navbar (top-16)
- Glassmorphic panel (white/20 + backdrop-blur-xl)
- Rounded corners (rounded-2xl)
- Backdrop overlay with blur
- Body scroll locked when open

### Animation Timeline
```
Menu Items: Stagger 50ms per item (slide from left)
CTA Button: Appears last with slide up
Exit: Fade out + slide up (300ms)
```

## Smart Scroll Logic

```javascript
// Hide navbar when:
currentScrollY > lastScrollY && currentScrollY > 100

// Show navbar when:
currentScrollY < lastScrollY (scrolling up)
```

**Threshold**: 100px (prevents hiding on small scrolls)

## Accessibility Features

✅ **Keyboard Navigation**: Full Tab support  
✅ **Focus Indicators**: Visible white rings on all interactive elements  
✅ **ARIA Labels**: 
- `aria-label="Toggle menu"` on hamburger
- `aria-expanded={isMobileMenuOpen}` state
✅ **Reduced Motion**: Respects system preference (no animations)  
✅ **Touch Targets**: Minimum 44px for mobile  
✅ **Body Scroll Lock**: Prevents background scroll when menu open  

## Performance Optimizations

- Uses `requestAnimationFrame` for scroll listener
- Passive event listeners for better scroll performance
- Motion reduced mode for accessibility
- Efficient state management (3 states: isScrolled, isHidden, isMobileMenuOpen)
- CSS will-change hints for GPU acceleration

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 14+)
- backdrop-filter: ✅ Supported in all modern browsers

## Integration Example

### 1. Add to Layout (Recommended)

```jsx
// app/layout.js
import NavbarCinematic from "@/components/NavbarCinematic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarCinematic />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### 2. With Custom Logo

```jsx
<NavbarCinematic logo="/images/meo-logo.png" />
```

Place your logo image at: `/public/images/meo-logo.png`

**Recommended logo specs:**
- Format: PNG or SVG
- Dimensions: 140px × 40px (or similar aspect ratio)
- Background: Transparent
- Color: White or light (for dark hero backgrounds)

### 3. Without Logo (Text Only)

```jsx
<NavbarCinematic />
```

Will display "MEO Digital" in bold white text.

## Customization Guide

### Change Menu Items

Edit the `menuItems` array:
```jsx
const menuItems = [
  { label: "Custom Page", href: "/custom" },
  // ... add/remove items
];
```

### Change Colors

**Primary Color (Hover/Active):**
```jsx
// Change #5569ff to your brand color
hover:text-[#YOUR_COLOR]
from-[#YOUR_COLOR] to-[#YOUR_COLOR_DARK]
```

**Glass Opacity:**
```jsx
// Adjust transparency
bg-white/10  // Change 10 to desired percentage
bg-white/30  // Change 30 to desired percentage
```

### Change CTA Text

```jsx
// Find "Get Started" and replace
<Link href="/contact">
  Get Started  {/* Change to "Contact Us", "Book Demo", etc. */}
</Link>
```

### Adjust Scroll Threshold

```jsx
// Change when navbar becomes opaque
setIsScrolled(currentScrollY > 40); // Change 40 to desired px

// Change when navbar hides on scroll down
if (currentScrollY > lastScrollY && currentScrollY > 100) // Change 100
```

## Troubleshooting

### Navbar overlaps content
✅ **Solution**: Ensure your first section has `mt-16` or `pt-20` to account for navbar height.

### Blur effect not showing
✅ **Solution**: 
1. Check if `backdrop-blur` is supported in your browser
2. Ensure there's content behind the navbar to blur
3. Verify gradient/image is present in hero section

### Logo not displaying
✅ **Solution**:
1. Verify logo path is correct (relative to `/public`)
2. Check image dimensions (recommended: 140x40px)
3. Ensure Next.js Image optimization is working

### Mobile menu not closing
✅ **Solution**: 
1. Check if `setIsMobileMenuOpen(false)` is called on link click
2. Verify body scroll lock is releasing

## Design Tokens Used

```css
/* Colors */
--electric-indigo: #5569ff
--electric-indigo-dark: #3b47f5
--white: #ffffff

/* Glass Effect */
--glass-light: rgba(255, 255, 255, 0.1)
--glass-medium: rgba(255, 255, 255, 0.2)
--glass-strong: rgba(255, 255, 255, 0.3)

/* Blur Strength */
--blur-medium: 12px
--blur-extra: 24px

/* Shadows */
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.1)
--shadow-glass-strong: 0 8px 32px rgba(0, 0, 0, 0.2)
--shadow-glow: 0 8px 24px rgba(85, 105, 255, 0.3)
```

## Production Checklist

Before deploying, verify:
- [ ] Logo image is optimized (<50KB)
- [ ] All menu links point to correct routes
- [ ] CTA button href is correct
- [ ] Mobile menu works on touch devices
- [ ] Keyboard navigation tested
- [ ] Reduced motion preference works
- [ ] Scroll behavior smooth on all browsers
- [ ] No console errors
- [ ] Focus states visible
- [ ] Contrast ratios meet WCAG AA

---

**Built for MEO Digital Media** | Glassmorphic Design | Nov 2025
