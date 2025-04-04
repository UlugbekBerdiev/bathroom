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
  return (
    <section id="gallery" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent bathroom transformations. Each project
            showcases our commitment to quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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