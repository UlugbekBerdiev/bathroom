import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const photos = [
  {
    id: 1,
    title: 'Modern Master Bath',
    location: 'Washington, DC',
    coordinates: '38.9072° N, 77.0369° W',
    image: '/src/assets/bathrooms/photo_14_2025-04-04_23-02-37.jpg',
  },
  {
    id: 2,
    title: 'Luxury Spa Bathroom',
    location: 'Bethesda, MD',
    coordinates: '38.9847° N, 77.0947° W',
    image: '/src/assets/bathrooms/photo_20_2025-04-04_23-02-37.jpg',
  },
  {
    id: 3,
    title: 'Guest Bathroom Update',
    location: 'Arlington, VA',
    coordinates: '38.8816° N, 77.0910° W',
    image: '/src/assets/bathrooms/photo_30_2025-04-04_23-02-37.jpg',
  },
  {
    id: 4,
    title: 'Modern Master Bath',
    location: 'Rockville, MD',
    coordinates: '39.0840° N, 77.1528° W',
    image: '/src/assets/bathrooms/photo_15_2025-04-04_23-02-37.jpg',
  },
  {
    id: 5,
    title: 'Luxury Spa Bathroom',
    location: 'Alexandria, VA',
    coordinates: '38.8048° N, 77.0469° W',
    image: '/src/assets/bathrooms/photo_21_2025-04-04_23-02-37.jpg',
  },
  {
    id: 6,
    title: 'Guest Bathroom Update',
    location: 'Silver Spring, MD',
    coordinates: '39.0027° N, 77.0206° W',
    image: '/src/assets/bathrooms/photo_31_2025-04-04_23-02-37.jpg',
  },
  {
    id: 7,
    title: 'Modern Master Bath',
    location: 'Fairfax, VA',
    coordinates: '38.8462° N, 77.3064° W',
    image: '/src/assets/bathrooms/photo_16_2025-04-04_23-02-37.jpg',
  },
  {
    id: 8,
    title: 'Luxury Spa Bathroom',
    location: 'Gaithersburg, MD',
    coordinates: '39.1434° N, 77.2014° W',
    image: '/src/assets/bathrooms/photo_22_2025-04-04_23-02-37.jpg',
  },
  {
    id: 9,
    title: 'Guest Bathroom Update',
    location: 'Falls Church, VA',
    coordinates: '38.8823° N, 77.1711° W',
    image: '/src/assets/bathrooms/photo_32_2025-04-04_23-02-37.jpg',
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
    <section id="gallery" className="py-2">
      <div className="container max-w-[300px] mx-auto px-0">
        <div className="text-center mb-2">
          <h2 className="text-sm font-bold text-primary mb-1">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 max-w-[240px] mx-auto text-[8px]">
            Take a look at some of our recent bathroom transformations.
          </p>
        </div>

        <div className="relative max-w-[240px] mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={currentPhoto.image}
                  alt={`${currentPhoto.title} in ${currentPhoto.location}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                <h3 className="text-white text-[10px] font-semibold">{currentPhoto.title}</h3>
                <p className="text-white/90 text-[8px]">{currentPhoto.location}</p>
                <p className="text-white/80 text-[7px]">{currentPhoto.coordinates}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-1">
            <button 
              onClick={prevPhoto}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-1 shadow-md"
              aria-label="Previous photo"
            >
              <FaChevronLeft size={10} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-1">
            <button 
              onClick={nextPhoto}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-1 shadow-md"
              aria-label="Next photo"
            >
              <FaChevronRight size={10} />
            </button>
          </div>

          <div className="flex justify-center mt-1 space-x-1">
            {photos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1 h-1 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 