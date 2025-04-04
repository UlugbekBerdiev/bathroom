import { Link } from 'react-scroll'

export function Header() {
  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Gallery', to: 'gallery' },
    { label: 'Reviews', to: 'reviews' },
    { label: 'Quote', to: 'quote' },
    { label: 'Contact', to: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Bathroom Remodeling
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="font-medium text-gray-600 hover:text-primary cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
} 