import { useState, useEffect } from 'react'
import { FaStar, FaCheckCircle, FaTools } from 'react-icons/fa'

// Mock data - in a real app, this would come from your backend
const recentProjects = [
  {
    id: 1,
    title: 'Modern Master Bath',
    location: 'Damascus, MD',
    image: '/assets/bathrooms/photo_14_2025-04-04_23-02-37.jpg',
    date: '2 days ago'
  },
  {
    id: 2,
    title: 'Condo Bathroom',
    location: 'Timonium, MD',
    image: '/assets/bathrooms/photo_20_2025-04-04_23-02-37.jpg',
    date: '1 week ago'
  },
  {
    id: 3,
    title: 'Guest Bath Update',
    location: 'Leesburg, VA',
    image: '/assets/bathrooms/photo_30_2025-04-04_23-02-37.jpg',
    date: '2 weeks ago'
  }
]

const recentReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely thrilled with my new bathroom! The team was professional and the quality exceeded my expectations.',
    date: '2 hours ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'From design to completion, the entire process was smooth and stress-free. Highly recommend!',
    date: '1 day ago'
  }
]

export function SocialProof() {
  const [completedProjects, setCompletedProjects] = useState(150)
  const [happyCustomers, setHappyCustomers] = useState(200)
  const [yearsExperience, setYearsExperience] = useState(5)

  // Remove the animation interval
  useEffect(() => {
    // Set the final values directly
    setCompletedProjects(150)
    setHappyCustomers(200)
    setYearsExperience(5)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients are saying and track our growing success in transforming bathrooms.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaTools className="text-primary text-4xl" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">{completedProjects}+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaStar className="text-yellow-400 text-4xl" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">{happyCustomers}+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">{yearsExperience}+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Recent Projects and Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-gray-600 text-sm">{project.location}</p>
                    <p className="text-gray-500 text-xs">{project.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 