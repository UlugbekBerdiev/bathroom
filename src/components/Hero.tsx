import { Link } from 'react-scroll'
import { FaPhone, FaMapMarkerAlt, FaTrophy, FaAward, FaMedal } from 'react-icons/fa'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main Content */}
          <div className="text-center lg:text-left">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Awards Section */}
          <div className="space-y-4">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaTrophy className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Best Company 2023</h3>
                  <p className="text-gray-600">Recognized for Excellence in Service</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaAward className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">1st Place Quality</h3>
                  <p className="text-gray-600">Highest Rated Bathroom Remodeler</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMedal className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Customer Choice 2023</h3>
                  <p className="text-gray-600">Most Trusted by Homeowners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
} 