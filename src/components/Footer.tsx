import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Premium Bathrooms</h3>
            <p className="text-slate-300 mb-4">
              Your trusted bathroom remodeling experts serving Washington DC, Maryland,
              and Northern Virginia.
            </p>
            <div className="flex space-x-4 items-center justify-center md:justify-start">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-primary" />
                <a href="tel:+14435370266" className="hover:text-primary transition-colors">
                  (443) 537-0266
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-primary" />
                <a
                  href="mailto:info@bathroomremodeling.com"
                  className="hover:text-primary transition-colors"
                >
                  info@bathroomremodeling.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                <span>Washington DC, MD & Northern VA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-primary transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4 text-center text-slate-400">
        <div className="container px-4">
          <p>&copy; {currentYear} Premium Bathrooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 