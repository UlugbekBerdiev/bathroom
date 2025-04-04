import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Contact us through any of the
            following methods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <FaPhone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-gray-600 hover:text-primary"
            >
              (123) 456-7890
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Area</h3>
            <p className="text-gray-600">
              Greater Seattle Area<br />
              Including Bellevue & Kirkland
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md sm:col-span-2 md:col-span-1">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <FaClock className="w-6 h-6 text-primary" />
            </div>
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