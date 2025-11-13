import { Metadata } from 'next';

export const metadata = {
  title: 'About Us',
  description: 'Learn about World Class Digital and our mission to create exceptional digital experiences.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#5569ff] to-[#3b47f5] text-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-100">
            We're a team of passionate designers and developers creating world-class digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#111827]">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At World Class Digital, we believe that exceptional digital experiences have the power to transform businesses. 
            Our mission is to craft websites and applications that not only look stunning but also deliver measurable results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We combine cutting-edge technology with thoughtful design to create solutions that are fast, accessible, 
            and built to scale. Every project we take on is an opportunity to push boundaries and exceed expectations.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every line of code, every pixel matters.',
              },
              {
                title: 'User-Centric',
                description: 'We design with empathy, ensuring every user has a seamless experience.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of trends and continuously explore new technologies.',
              },
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-3 text-[#5569ff]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#5569ff] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
