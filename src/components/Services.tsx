import { FaBath, FaShower, FaWrench, FaToilet, FaTint, FaPaintBrush, FaTools } from 'react-icons/fa'

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Bathroom Remodeling Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your bathroom with our comprehensive remodeling services. From complete renovations 
            to specific upgrades, we deliver exceptional craftsmanship and attention to detail in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaBath />
            </div>
            <h3 className="text-xl font-semibold mb-3">Complete Bathroom Remodeling</h3>
            <p className="text-gray-600">
              Full-service bathroom renovations including custom shower installations, 
              bathtub replacements, vanity upgrades, tile work, plumbing updates, 
              and complete bathroom transformations. We handle everything from demolition 
              to final touches, ensuring a seamless renovation process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaShower />
            </div>
            <h3 className="text-xl font-semibold mb-3">Shower & Tub Installation</h3>
            <p className="text-gray-600">
              Expert installation of walk-in showers, custom shower enclosures, 
              freestanding tubs, and jetted bathtubs. We specialize in waterproofing, 
              custom tile work, glass shower doors, and modern shower systems with 
              the latest fixtures and features.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaToilet />
            </div>
            <h3 className="text-xl font-semibold mb-3">Plumbing & Fixtures</h3>
            <p className="text-gray-600">
              Professional plumbing services including toilet installation, sink upgrades, 
              faucet replacement, and water heater installation. We handle all plumbing 
              updates, repairs, and ensure proper drainage and water pressure in your 
              bathroom renovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaTint />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tile & Flooring</h3>
            <p className="text-gray-600">
              Custom tile work for showers, floors, and walls using premium materials. 
              We offer ceramic, porcelain, natural stone, and glass tile installation 
              with expert waterproofing and grouting services for lasting durability 
              and beautiful results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Design & Finishing</h3>
            <p className="text-gray-600">
              Personalized bathroom design services including custom vanity installation, 
              lighting upgrades, mirror installation, and decorative finishes. We help 
              create your dream bathroom with attention to every detail and finish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-3">Repair & Maintenance</h3>
            <p className="text-gray-600">
              Comprehensive repair services for leaks, water damage, mold issues, 
              and general maintenance. We provide emergency repairs, preventive 
              maintenance, and solutions for common bathroom problems to keep your 
              space in perfect condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 