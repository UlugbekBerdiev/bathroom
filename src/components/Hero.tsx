import { Link } from 'react-scroll'

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Beautiful Bathroom Remodeling You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Transform your bathroom into a stunning, functional space with our expert remodeling services. 
            Quality craftsmanship and attention to detail guaranteed.
          </p>
          <Link
            to="quote"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-primary inline-block"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
} 