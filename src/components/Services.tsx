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
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive bathroom remodeling services with attention to detail
            and quality craftsmanship that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 