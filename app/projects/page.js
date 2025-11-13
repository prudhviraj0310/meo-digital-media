import FeatureList from '@/components/FeatureList';

export const metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of successful projects and client work.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with advanced filtering and checkout.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization.',
      image: '/projects/saas.jpg',
      tags: ['React', 'D3.js', 'Node.js'],
    },
    {
      title: 'Portfolio Website',
      description: 'Beautiful portfolio for a creative agency.',
      image: '/projects/portfolio.jpg',
      tags: ['Next.js', 'Framer Motion', 'CMS'],
    },
    {
      title: 'Mobile App Landing',
      description: 'Marketing site for a mobile application launch.',
      image: '/projects/mobile.jpg',
      tags: ['Next.js', 'SEO', 'Performance'],
    },
    {
      title: 'Corporate Website',
      description: 'Enterprise website with multi-language support.',
      image: '/projects/corporate.jpg',
      tags: ['Next.js', 'i18n', 'Accessibility'],
    },
    {
      title: 'Booking Platform',
      description: 'Online booking system with calendar integration.',
      image: '/projects/booking.jpg',
      tags: ['React', 'Calendar', 'Payments'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#5569ff] to-[#3b47f5] text-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-100">
            A showcase of our work and the results we've delivered.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#5569ff] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-48 bg-gray-200">
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                    🎨
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#111827]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-[#f0f4ff] text-[#5569ff] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-custom mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#111827]">
            What Makes Our Projects Stand Out
          </h2>
          <FeatureList columns={2} />
        </div>
      </section>
    </div>
  );
}
