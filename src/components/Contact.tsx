import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Contact us through any of the
            following methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <FaPhone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-gray-600 hover:text-primary"
            >
              (123) 456-7890
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <FaMapMarkerAlt className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Service Area</h3>
            <p className="text-gray-600">
              Greater Seattle Area<br />
              Including Bellevue & Kirkland
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <FaClock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Mon - Fri: 8am - 6pm<br />
              Sat: 9am - 4pm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 