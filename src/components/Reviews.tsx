import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'John Smith',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Exceptional work on our master bathroom! The team was professional, clean, and finished on time. Couldn\'t be happier with the results.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Bellevue, WA',
    rating: 5,
    text: 'They transformed our outdated bathroom into a modern oasis. Great attention to detail and excellent communication throughout the project.',
  },
  {
    id: 3,
    name: 'Mike Wilson',
    location: 'Kirkland, WA',
    rating: 5,
    text: 'Outstanding service from start to finish. The quality of work exceeded our expectations, and the price was very reasonable.',
  },
]

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="reviews" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our bathroom remodeling services.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[...Array(reviews[currentSlide].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{reviews[currentSlide].text}</p>
            <div className="font-semibold">{reviews[currentSlide].name}</div>
            <div className="text-gray-500 text-sm">{reviews[currentSlide].location}</div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-100 text-primary p-2 rounded-full border border-gray-200"
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-100 text-primary p-2 rounded-full border border-gray-200"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="font-semibold">{review.name}</div>
              <div className="text-gray-500 text-sm">{review.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 