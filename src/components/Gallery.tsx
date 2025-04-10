import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const photos = [
  {
    id: 1,
    title: 'Modern Master Bath',
    location: 'Damascus, MD',
    image: '/assets/bathrooms/photo_14_2025-04-04_23-02-37.jpg',
  },
  {
    id: 2,
    title: 'Luxury Spa Bathroom',
    location: 'Bellevue, WA',
    image: '/assets/bathrooms/photo_20_2025-04-04_23-02-37.jpg',
  },
  {
    id: 3,
    title: 'Guest Bathroom Update',
    location: 'Kirkland, WA',
    image: '/assets/bathrooms/photo_30_2025-04-04_23-02-37.jpg',
  },
  {
    id: 4,
    title: 'Modern Master Bath',
    location: 'Damascus, MD',
    image: '/assets/bathrooms/photo_15_2025-04-04_23-02-37.jpg',
  },
  {
    id: 5,
    title: 'Luxury Spa Bathroom',
    location: 'Bellevue, WA',
    image: '/assets/bathrooms/photo_21_2025-04-04_23-02-37.jpg',
  },
  {
    id: 6,
    title: 'Guest Bathroom Update',
    location: 'Kirkland, WA',
    image: '/assets/bathrooms/photo_31_2025-04-04_23-02-37.jpg',
  },
  {
    id: 7,
    title: 'Modern Master Bath',
    location: 'Damascus, MD',
    image: '/assets/bathrooms/photo_16_2025-04-04_23-02-37.jpg',
  },
  {
    id: 8,
    title: 'Luxury Spa Bathroom',
    location: 'Bellevue, WA',
    image: '/assets/bathrooms/photo_22_2025-04-04_23-02-37.jpg',
  },
  {
    id: 9,
    title: 'Guest Bathroom Update',
    location: 'Kirkland, WA',
    image: '/assets/bathrooms/photo_32_2025-04-04_23-02-37.jpg',
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((current) => (current === photos.length - 1 ? 0 : current + 1))
  }

  const prevPhoto = () => {
    setCurrentIndex((current) => (current === 0 ? photos.length - 1 : current - 1))
  }

  const currentPhoto = photos[currentIndex]

  return (
    <section id="gallery" className="py-12 md:py-16">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent bathroom transformations. Each project
            showcases our commitment to quality and attention to detail.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={currentPhoto.image}
                  alt={`${currentPhoto.title} in ${currentPhoto.location}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">{currentPhoto.title}</h3>
                <p className="text-white/90">{currentPhoto.location}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <button 
              onClick={prevPhoto}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
              aria-label="Previous photo"
            >
              <FaChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <button 
              onClick={nextPhoto}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
              aria-label="Next photo"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {photos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 