# 🎬 Cinematic Hero Video Background - Integration Guide

## **✅ COMPLETED SETUP**

Your project now has all the components and styles needed for a world-class video hero section.

---

## **📁 FILE STRUCTURE**

```
world-class-digital/
├── public/
│   └── video/                    ← YOU NEED TO ADD VIDEO FILES HERE
│       ├── hero.mp4              ← Primary video (H.264)
│       ├── hero.webm             ← Modern browsers (VP9)
│       ├── hero-poster.jpg       ← Fallback/loading image
│       └── hero-poster-blur.jpg  ← Reduced motion fallback
├── components/
│   ├── HeroBackgroundVideo.jsx   ✅ Created
│   ├── HeroCinematicVideo.jsx    ✅ Created
│   └── NavbarMinimal.jsx         ✅ Updated (glassmorphism)
└── app/
    └── globals.css               ✅ Updated (video styles)
```

---

## **🎥 STEP 1: Process Your Video**

### A. Export from iMovie
1. Open iMovie with your trimmed clip (4-7 seconds)
2. **File** → **Share** → **File...**
3. Settings:
   - Resolution: **1080p**
   - Quality: **High**
   - Format: **Video and Audio**
4. Save as: `hero-flash-master.mov`

### B. Convert to Web Formats

**Run these commands in Terminal:**

```bash
# Navigate to your downloads folder
cd /Users/prudhviraj/Downloads

# 1. Convert to MP4 (H.264) - Universal compatibility
ffmpeg -i hero-flash-master.mov \
  -vf "scale=1920:1080:flags=lanczos" \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -profile:v high \
  -level 4.2 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  "/Users/prudhviraj/world clas/world-class-digital/public/video/hero.mp4"

# 2. Convert to WEBM (VP9) - Better compression
ffmpeg -i hero-flash-master.mov \
  -vf "scale=1920:1080:flags=lanczos" \
  -c:v libvpx-vp9 \
  -b:v 1.5M \
  -maxrate 2M \
  -bufsize 4M \
  -cpu-used 2 \
  -row-mt 1 \
  -tile-columns 2 \
  -tile-rows 1 \
  -pix_fmt yuv420p \
  -an \
  "/Users/prudhviraj/world clas/world-class-digital/public/video/hero.webm"

# 3. Generate poster image (first frame)
ffmpeg -i hero-flash-master.mov \
  -vf "select=eq(n\,0),scale=1920:1080" \
  -frames:v 1 \
  -q:v 2 \
  "/Users/prudhviraj/world clas/world-class-digital/public/video/hero-poster.jpg"

# 4. Generate blurred poster (reduced motion fallback)
ffmpeg -i hero-flash-master.mov \
  -vf "select=eq(n\,0),scale=1920:1080,gblur=sigma=20" \
  -frames:v 1 \
  -q:v 2 \
  "/Users/prudhviraj/world clas/world-class-digital/public/video/hero-poster-blur.jpg"
```

**Expected Results:**
- ✅ `hero.mp4` - ~2-3MB (H.264, universal compatibility)
- ✅ `hero.webm` - ~1.5-2MB (VP9, modern browsers)
- ✅ `hero-poster.jpg` - ~200-300KB (loading placeholder)
- ✅ `hero-poster-blur.jpg` - ~150KB (reduced motion fallback)

---

## **🚀 STEP 2: Update Your Homepage**

Open `app/page.js` and replace the current hero with the cinematic video hero:

```jsx
import HeroCinematicVideo from '@/components/HeroCinematicVideo';
// ... other imports

export default function Home() {
  return (
    <main>
      {/* Replace your current hero with this */}
      <HeroCinematicVideo
        headline="Creating Visual Stories"
        subtitle="We craft cinematic digital experiences that captivate and inspire."
        primaryCTA={{ text: 'Start a Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/projects' }}
        showScrollIndicator={true}
      />
      
      {/* Rest of your sections */}
      {/* ... */}
    </main>
  );
}
```

---

## **🎨 CUSTOMIZATION OPTIONS**

### Change Video Overlay Color

Edit `app/globals.css` line with `.hero-video-overlay`:

```css
/* Current: Electric Indigo (#4C45F5) blend */
.hero-video-overlay {
  background: linear-gradient(
    135deg,
    rgba(17, 24, 39, 0.85) 0%,      /* Dark gray */
    rgba(76, 69, 245, 0.3) 50%,     /* Electric Indigo - CHANGE THIS */
    rgba(17, 24, 39, 0.95) 100%
  );
}

/* Example: Purple brand color */
rgba(139, 92, 246, 0.3) 50%,  /* Violet */

/* Example: Blue brand color */
rgba(59, 130, 246, 0.3) 50%,  /* Sky Blue */

/* Example: Red brand color */
rgba(239, 68, 68, 0.3) 50%,   /* Red */
```

### Adjust Overlay Darkness

```css
/* Lighter overlay (more video visible) */
rgba(17, 24, 39, 0.65) 0%,  /* Was 0.85 */
rgba(17, 24, 39, 0.75) 100% /* Was 0.95 */

/* Darker overlay (more contrast for text) */
rgba(17, 24, 39, 0.95) 0%,
rgba(17, 24, 39, 1) 100%
```

### Remove Film Grain

In `components/HeroBackgroundVideo.jsx`, comment out:

```jsx
{/* <div className="hero-video-grain" /> */}
```

---

## **⚡ PERFORMANCE OPTIMIZATIONS**

### Already Implemented:
✅ **GPU Acceleration** - `transform: translate3d()` for smooth video
✅ **Preload Strategy** - `preload="auto"` for instant playback
✅ **No Audio** - `-an` flag in FFmpeg saves 30-40% file size
✅ **Fast Start** - `-movflags +faststart` enables streaming
✅ **Reduced Motion** - Automatic fallback to static poster
✅ **Mobile Optimization** - Reduced resolution on small screens
✅ **Multiple Formats** - WEBM (modern) + MP4 (fallback)

### File Size Targets:
- ✅ 5 seconds @ 1080p = **~2-3MB total** (both formats)
- ✅ Under 3MB for hero video = **Fast loading even on 4G**

### Loading Strategy:
1. **Poster image loads first** (instant visual)
2. **Video streams in background** (no blocking)
3. **Fade-in animation** when ready (smooth transition)
4. **GPU-accelerated playback** (60fps smooth)

---

## **📱 RESPONSIVE BEHAVIOR**

### Desktop (1920px+)
- Full 1080p video playback
- Film grain texture overlay
- Smooth 60fps animation

### Tablet (768px - 1919px)
- 1080p video (scaled down)
- Film grain removed for performance
- Smooth playback maintained

### Mobile (<768px)
- Video scaled to 120% (covers safe area)
- No film grain (performance)
- Fallback to poster on slow connections

### Reduced Motion
- Automatic fallback to blurred poster image
- No video playback
- Maintains visual design

---

## **🧪 TESTING CHECKLIST**

Before going live, test:

- [ ] Video plays automatically on desktop Chrome
- [ ] Video plays automatically on desktop Safari
- [ ] Video loops seamlessly (no visible jump)
- [ ] Poster image shows before video loads
- [ ] Mobile Safari shows fallback (iOS blocks autoplay)
- [ ] Reduced motion preference shows static image
- [ ] Navbar glassmorphism blurs video background
- [ ] Text is readable over video (contrast check)
- [ ] File sizes are under 3MB total
- [ ] Page loads in under 3 seconds on 4G

---

## **🔧 TROUBLESHOOTING**

### Video doesn't play automatically
**Solution:** Check browser console for autoplay policy errors. Ensure:
- Video has `muted` attribute
- Video has `playsInline` for iOS
- Video has `autoplay` attribute

### Video looks blurry
**Solution:** Check compression settings:
- Increase quality: `-crf 20` (lower = better quality)
- Increase bitrate: `-b:v 2M` (higher = better quality)

### File size too large (>5MB)
**Solution:** Reduce quality:
- Lower resolution: `scale=1280:720` (720p)
- Increase compression: `-crf 25`
- Reduce bitrate: `-b:v 1M`

### Video has a visible loop jump
**Solution:** In iMovie, trim the video so first and last frames match:
- Zoom into timeline
- Trim edges carefully
- Preview loop multiple times

### Navbar doesn't blur video
**Solution:** Check CSS support:
- Some browsers need `-webkit-backdrop-filter`
- Already included in `globals.css`
- Test in Chrome/Safari (best support)

---

## **🎯 FINAL RESULT**

You now have:
- ✅ **Cinematic video hero** with camera-flash background
- ✅ **Glassmorphic navbar** that blurs video
- ✅ **Smooth animations** (fade-in, scroll indicator)
- ✅ **Performance optimized** (GPU-accelerated, <3MB)
- ✅ **Accessible** (reduced motion support)
- ✅ **Mobile-friendly** (fallback to poster)
- ✅ **World-class design** (Apple/Portfolio Studio aesthetic)

---

## **📚 NEXT STEPS**

1. **Run FFmpeg commands** to generate video files
2. **Update app/page.js** to use `<HeroCinematicVideo />`
3. **Test locally** at http://localhost:3000
4. **Adjust overlay color** to match your brand
5. **Deploy** and enjoy your cinematic hero! 🎬

---

**Questions?** The component is fully documented with inline comments.
**Need help?** Check the troubleshooting section above.
