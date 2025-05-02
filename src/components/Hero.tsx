import { Link } from 'react-scroll'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            TRANSFORM YOUR<br />
            <span className="text-primary">BATHROOM</span><br />
            INTO A DREAM SPACE
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional bathroom remodeling services in DC, MD & Northern VA. 
            We turn your vision into reality with expert craftsmanship and attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="quote"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary text-lg px-8 py-4 font-semibold"
            >
              GET FREE QUOTE
            </Link>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn bg-white text-gray-900 text-lg px-8 py-4 font-semibold hover:bg-gray-100"
            >
              VIEW OUR WORK
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-white">
                <FaMapMarkerAlt className="text-primary w-6 h-6" />
                <span className="text-lg font-semibold">Serving: DC, MD & Northern VA</span>
              </div>
              <a 
                href="tel:+14435370266" 
                className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FaPhone className="w-5 h-5" />
                <span className="font-semibold text-lg">(443) 537-0266</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("/pattern.svg")',
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  )
} 