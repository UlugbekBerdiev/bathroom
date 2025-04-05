import { FaBath, FaShower, FaWrench } from 'react-icons/fa'

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive bathroom remodeling services to transform your
            space into a beautiful and functional area you'll love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaBath className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Bathroom Remodeling</h3>
            <p className="text-gray-600">
              Complete bathroom transformations with design services, demolition,
              installation, and finishing touches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaShower className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Shower & Tub Conversion</h3>
            <p className="text-gray-600">
              Convert your tub to a shower or vice versa, with custom designs and
              accessibility options available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaWrench className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bathroom Repairs & Updates</h3>
            <p className="text-gray-600">
              Fixture replacements, tile repair, vanity upgrades, and other smaller
              updates to refresh your bathroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 