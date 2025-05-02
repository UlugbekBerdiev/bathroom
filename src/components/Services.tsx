import { FaBath, FaShower, FaPlus } from 'react-icons/fa'

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Professional Bathroom Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your bathroom with our expert services. From complete renovations to custom additions, 
            we deliver premium quality and innovative solutions for your dream bathroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaBath className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Bathroom Renovation</h3>
            <p className="text-gray-600">
              Complete bathroom transformations featuring:
              • Large format porcelain tiles (24"x48", 36"x36")
              • Custom shower systems with linear drains
              • Frameless glass shower enclosures
              • Smart bathroom technology integration
              • Luxury fixtures and fittings
              • Custom vanity designs with premium materials
              • Heated flooring solutions
              • Modern LED lighting systems
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaShower className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">New Bathroom Construction</h3>
            <p className="text-gray-600">
              Expert new bathroom installations including:
              • Custom shower bases and waterproofing
              • Sliding glass shower doors
              • Custom shower niches and shelves
              • Luxury freestanding tubs
              • Smart toilet installations
              • Custom cabinetry and storage solutions
              • Premium faucet and fixture installation
              • Ventilation and moisture control systems
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                <FaPlus className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bathroom Additions & Upgrades</h3>
            <p className="text-gray-600">
              Specialized bathroom enhancements featuring:
              • Custom tile patterns and designs
              • Glass mosaic accent walls
              • Custom shower door installations
              • Luxury vanity upgrades
              • Smart mirror installations
              • Custom lighting solutions
              • Storage and organization systems
              • Accessibility modifications
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 