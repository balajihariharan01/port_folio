import { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="home">
      <div className="container inner">
        <a href="#home" className="brand" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Balaji logo" className="brand-logo" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <span className="brand-gradient">Balaji</span><span className="dot"></span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn${mobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav${mobileMenuOpen ? ' mobile-open' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#education" onClick={closeMobileMenu}>Education</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#resume" onClick={closeMobileMenu}>Resume</a>
          <a href="#certificates" onClick={closeMobileMenu}>Certificates</a>
          <a href="#skills" onClick={closeMobileMenu}>Skills</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </nav>
        
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  )
}

export default Header


