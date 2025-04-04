import { FaStar } from 'react-icons/fa'

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
  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our bathroom remodeling services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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