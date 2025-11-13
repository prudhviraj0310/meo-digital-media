import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import PricingTable from '@/components/PricingTable';
import FeatureList from '@/components/FeatureList';
import TeamGrid from '@/components/TeamGrid';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BlogGrid from '@/components/BlogGrid';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Component Showcase',
  description: 'All components in one place for testing',
};

export default function ComponentsPage() {
  const mockBlogPosts = [
    {
      slug: 'getting-started',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of building modern web applications with Next.js.',
      category: 'Development',
      date: '2025-11-01',
      readTime: '5 min read',
    },
    {
      slug: 'ui-ux-tips',
      title: '10 UI/UX Best Practices',
      excerpt: 'Essential tips for creating user-friendly interfaces.',
      category: 'Design',
      date: '2025-10-28',
      readTime: '7 min read',
    },
    {
      slug: 'web-performance',
      title: 'Optimizing Web Performance',
      excerpt: 'Make your website blazing fast with these techniques.',
      category: 'Development',
      date: '2025-10-25',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Component */}
      <Hero
        headline="All Components Showcase"
        subtitle="Testing all components in production"
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
      />

      {/* ServicesGrid */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Services Grid
          </h2>
          <ServicesGrid />
        </div>
      </section>

      {/* FeatureList */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Feature List
          </h2>
          <FeatureList columns={2} />
        </div>
      </section>

      {/* PricingTable */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Pricing Table
          </h2>
          <PricingTable />
        </div>
      </section>

      {/* TestimonialsCarousel */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Testimonials Carousel
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* TeamGrid */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Team Grid
          </h2>
          <TeamGrid />
        </div>
      </section>

      {/* BlogGrid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            Blog Grid
          </h2>
          <BlogGrid posts={mockBlogPosts} />
        </div>
      </section>

      {/* FAQAccordion */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            FAQ Accordion
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ContactSection */}
      <ContactSection
        title="Contact Form"
        description="Test the contact form component"
      />
    </div>
  );
}
