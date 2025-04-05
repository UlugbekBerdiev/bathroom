import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely thrilled with my new bathroom! The team was professional, punctual, and the quality of work exceeded my expectations. Would highly recommend to anyone looking for a bathroom upgrade.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'From design to completion, the entire process was smooth and stress-free. The attention to detail and craftsmanship were outstanding. My new master bathroom is now my favorite room in the house.',
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    rating: 4,
    text: 'Great experience overall. There were a couple of minor delays but the team was communicative throughout and the end result is beautiful. The tile work is especially impressive.',
  },
  {
    id: 4,
    name: 'Robert Wilson',
    rating: 5,
    text: 'Second time using this company and just as pleased as the first time. Fair pricing, excellent workmanship, and they always clean up thoroughly when the job is done.',
  },
]

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextReview = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))
  }

  const prevReview = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))
  }

  return (
    <section id="reviews" className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-primary/30 text-4xl" />
            </div>
            
            <div className="flex justify-center mb-3">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
              {[...Array(5 - reviews[activeIndex].rating)].map((_, i) => (
                <FaStar key={i + reviews[activeIndex].rating} className="text-gray-300 w-5 h-5" />
              ))}
            </div>
            
            <p className="text-gray-600 mb-4 italic">"{reviews[activeIndex].text}"</p>
            
            <p className="font-semibold">- {reviews[activeIndex].name}</p>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {reviews.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full ${idx === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <button 
              onClick={prevReview}
              className="bg-white hover:bg-gray-100 text-primary rounded-full p-2 shadow-md"
              aria-label="Previous review"
            >
              <FaChevronLeft size={16} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <button 
              onClick={nextReview}
              className="bg-white hover:bg-gray-100 text-primary rounded-full p-2 shadow-md"
              aria-label="Next review"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <FaStar key={i + review.rating} className="text-gray-300 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <p className="font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 