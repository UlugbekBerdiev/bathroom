import { FaFacebook, FaInstagram, FaYelp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Beautiful Bathrooms</h3>
            <p className="text-gray-400">
              Professional bathroom remodeling services in the Greater Seattle Area.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-400">Seattle Area</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Yelp"
              >
                <FaYelp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Beautiful Bathrooms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 