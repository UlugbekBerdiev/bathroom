import { Link } from 'react-scroll'

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
      {/* Lighter gradient overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 -z-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight drop-shadow-sm bg-white/70 backdrop-blur-sm py-2 rounded-lg">
            Beautiful Bathroom Remodeling You Can Trust
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 bg-white/60 backdrop-blur-sm py-2 px-4 rounded-lg">
            Transform your bathroom into a stunning, functional space with our expert remodeling services. 
            Quality craftsmanship and attention to detail guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="quote"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary w-full sm:w-auto"
            >
              Request a Free Quote
            </Link>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn bg-white text-primary font-semibold border-2 border-white hover:bg-white/90 w-full sm:w-auto shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
} 