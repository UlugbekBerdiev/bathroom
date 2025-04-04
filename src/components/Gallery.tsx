import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Modern Master Bath',
    location: 'Seattle, WA',
    description: 'Complete renovation with custom shower and freestanding tub',
    beforeImage: 'https://placehold.co/600x400/1e40af/ffffff?text=Before',
    afterImage: 'https://placehold.co/600x400/1e293b/ffffff?text=After',
  },
  {
    id: 2,
    title: 'Luxury Spa Bathroom',
    location: 'Bellevue, WA',
    description: 'High-end fixtures with marble tile throughout',
    beforeImage: 'https://placehold.co/600x400/1e40af/ffffff?text=Before',
    afterImage: 'https://placehold.co/600x400/1e293b/ffffff?text=After',
  },
  {
    id: 3,
    title: 'Guest Bathroom Update',
    location: 'Kirkland, WA',
    description: 'Modern vanity and walk-in shower installation',
    beforeImage: 'https://placehold.co/600x400/1e40af/ffffff?text=Before',
    afterImage: 'https://placehold.co/600x400/1e293b/ffffff?text=After',
  },
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextProject = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
  }

  const prevProject = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  const currentProject = projects[activeIndex]

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

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={currentProject.afterImage}
                  alt={`${currentProject.title} After`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">{currentProject.title}</h3>
                <p className="text-white/90">{currentProject.location}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{currentProject.description}</p>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <button 
              onClick={prevProject}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
              aria-label="Previous project"
            >
              <FaChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <button 
              onClick={nextProject}
              className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
              aria-label="Next project"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full ${idx === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.afterImage}
                    alt={`${project.title} After`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  <p className="text-white/90">{project.location}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 