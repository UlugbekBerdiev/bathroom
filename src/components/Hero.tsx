import { Link } from 'react-scroll'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 -z-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content - Main Text and Buttons */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="bg-white/70 backdrop-blur-sm py-6 px-4 rounded-lg mb-6">
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
                <div className="flex items-center justify-center gap-3 text-gray-800 text-center">
                  <FaMapMarkerAlt className="text-primary w-6 h-6 md:w-7 md:h-7" />
                  <span className="font-semibold text-lg md:text-xl lg:text-2xl">Serving: DC, MD & Northern VA</span>
                </div>
                <a 
                  href="tel:+14435370266" 
                  className="flex items-center justify-center gap-3 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaPhone className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="font-semibold text-lg md:text-xl">(443) 537-0266</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="quote"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-primary w-full sm:w-auto text-base md:text-lg text-center"
              >
                Request a Free Quote
              </Link>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn bg-white text-primary font-semibold border-2 border-white hover:bg-white/90 w-full sm:w-auto shadow-lg text-base md:text-lg text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="bg-white/90 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Service Area</h3>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.8333734666!2d-77.1546602!3d38.8935128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-gray-600">
              <p className="font-medium">Coverage Areas:</p>
              <ul className="list-disc list-inside">
                <li>Montgomery County, MD</li>
                <li>Washington DC</li>
                <li>Northern Virginia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
} 