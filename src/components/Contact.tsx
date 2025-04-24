import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaTools } from 'react-icons/fa'

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4 flex items-center justify-center">
              <FaPhone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+14435370266"
              className="text-gray-600 hover:text-primary text-lg"
            >
              (443) 537-0266
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4 flex items-center justify-center">
              <FaEnvelope className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:ber.ulugbek@gmail.com"
              className="text-gray-600 hover:text-primary text-lg"
            >
              ber.ulugbek@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4 flex items-center justify-center">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              Geithersburg, MD<br />
              Damascus, MD
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4 flex items-center justify-center">
              <FaTools className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Area</h3>
            <p className="text-gray-600">
              Washington DC<br />
              Maryland & Northern VA
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-primary/10 p-3 rounded-full mb-4 flex items-center justify-center">
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