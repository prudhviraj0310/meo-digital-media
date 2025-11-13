'use client';

import ContactForm from './ContactForm';

/**
 * ContactSection Component
 * Wrapper for contact form with heading and description
 */
export default function ContactSection({ title, description, onSubmit }) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container-custom mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111827]">
            {title || 'Get In Touch'}
          </h2>
          <p className="text-xl text-gray-600">
            {description || "Have a project in mind? Let's talk about how we can help."}
          </p>
        </div>
        <ContactForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}
