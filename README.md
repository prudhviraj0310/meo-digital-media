# MEO Digital Media - Official Website

A premium digital marketing agency website built with Next.js 16, featuring cinematic animations, glassmorphic design, and optimized performance.

## 🚀 Features

- **Cinematic Hero** with background video support
- **Glassmorphic UI** with modern blur effects
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** mobile-first approach
- **SEO Optimized** with meta tags and structured data
- **Performance Focused** with React Compiler & Turbopack
- **Accessibility** WCAG compliant
- **Image Optimization** using Next.js Image component

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.2 (App Router)
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Build Tool:** Turbopack
- **Optimization:** React Compiler

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/prudhviraj0310/meo-digital-media.git

# Navigate to project directory
cd world-class-digital

# Install dependencies
npm install

# Copy environment variables
cp .env.local .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
world-class-digital/
├── app/                    # Next.js App Router
│   ├── page.js            # Homepage
│   ├── layout.js          # Root layout
│   ├── globals.css        # Global styles
│   ├── loading.js         # Loading UI
│   ├── error.js           # Error boundary
│   ├── not-found.js       # 404 page
│   └── [routes]/          # Route pages
├── components/            # React components
│   ├── Hero*.jsx         # Hero sections
│   ├── Navbar*.jsx       # Navigation
│   └── [others]/         # Other components
├── data/                  # Static data & content
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── video/           # Video files
└── next.config.mjs       # Next.js config
```

## 🎨 Key Components

### Hero Sections
- `HeroCinematicVideo` - Video background hero
- `HeroMakeReign` - Minimal agency hero
- `HeroMassive` - Large typography hero

### Navigation
- `NavbarCinematic` - Glassmorphic navbar
- `NavbarMinimal` - Clean minimal navbar

### Animations
- `ScrollReveal` - Scroll-triggered animations
- `PageTransition` - Route transitions
- `CounterAnimation` - Number counting

## 🌐 Environment Variables

Create a `.env.local` file in the root:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="MEO Digital Media"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Contact Form
CONTACT_EMAIL=info@meodigitalmedia.com

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_TWITTER_URL=
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📈 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **React Compiler:** Enabled for optimal rendering
- **Turbopack:** Fast development builds

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader compatible
- Color contrast WCAG AA compliant

## 🔒 Security

- No sensitive data in client code
- CSP headers configured
- XSS protection enabled
- HTTPS enforced in production

## 📝 License

Copyright © 2025 MEO Digital Media. All rights reserved.

## 👥 Team

**MEO Digital Media**
- Website: [meodigitalmedia.com](https://meodigitalmedia.com)
- Email: info@meodigitalmedia.com
- Phone: +91 98847 21844
- Location: Chennai, Tamil Nadu, India

## 🤝 Contributing

This is a private project. For inquiries, please contact the team.

## 📞 Support

For support, email info@meodigitalmedia.com or call +91 98847 21844.

---

Built with ❤️ by MEO Digital Media
