import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { SocialProof } from './components/SocialProof'
import { QuoteForm } from './components/QuoteForm'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <SocialProof />
        <Reviews />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default App 