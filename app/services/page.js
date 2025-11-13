import ServicesGrid from '@/components/ServicesGrid';
import PricingTable from '@/components/PricingTable';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive web development and design services.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#5569ff] to-[#3b47f5] text-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100">
            Comprehensive solutions to bring your digital vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            What We Offer
          </h2>
          <ServicesGrid />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#111827]">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose the perfect plan for your needs
          </p>
          <PricingTable />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        title="Ready to Get Started?"
        description="Let's discuss your project and create something amazing together."
      />
    </div>
  );
}
