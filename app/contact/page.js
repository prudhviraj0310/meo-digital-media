import ContactSection from '@/components/ContactSection';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with World Class Digital. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#5569ff] to-[#3b47f5] text-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100">
            Have a project in mind? Let's talk about how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find answers to common questions
          </p>
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-lg mb-2 text-[#111827]">Email</h3>
              <a
                href="mailto:hello@worldclassdigital.com"
                className="text-[#5569ff] hover:underline"
              >
                hello@worldclassdigital.com
              </a>
            </div>
            <div>
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold text-lg mb-2 text-[#111827]">Phone</h3>
              <a href="tel:+11234567890" className="text-[#5569ff] hover:underline">
                +1 (123) 456-7890
              </a>
            </div>
            <div>
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-semibold text-lg mb-2 text-[#111827]">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
