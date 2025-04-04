import { FaShower, FaSink, FaBath, FaTools } from 'react-icons/fa'

const services = [
  {
    icon: FaShower,
    title: 'Shower Remodeling',
    description: 'Custom shower designs, tiling, and modern fixtures installation.',
  },
  {
    icon: FaSink,
    title: 'Vanity & Sink',
    description: 'Stylish vanities, countertops, and efficient plumbing solutions.',
  },
  {
    icon: FaBath,
    title: 'Bathtub Installation',
    description: 'Luxurious bathtub options with professional installation.',
  },
  {
    icon: FaTools,
    title: 'Full Remodeling',
    description: 'Complete bathroom transformation from floor to ceiling.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive bathroom remodeling services with attention to detail
            and quality craftsmanship that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 