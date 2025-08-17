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
        
        {/* Simple Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn${mobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#certificates">Certificates</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        
        {/* New Simple Mobile Dropdown Menu */}
        <div className={`mobile-menu-dropdown${mobileMenuOpen ? ' open' : ''}`}>
          <div className="mobile-menu-items">
            <a href="#about" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">👤</span>
              <span>About</span>
            </a>
            <a href="#education" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">🎓</span>
              <span>Education</span>
            </a>
            <a href="#projects" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">💻</span>
              <span>Projects</span>
            </a>
            <a href="#resume" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">📄</span>
              <span>Resume</span>
            </a>
            <a href="#certificates" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">🏆</span>
              <span>Certificates</span>
            </a>
            <a href="#skills" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">⚡</span>
              <span>Skills</span>
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="mobile-menu-item">
              <span className="menu-icon">📧</span>
              <span>Contact</span>
            </a>
          </div>
          
          <div className="mobile-menu-footer">
            <div className="mobile-contact-brief">
              <span>📧 balajihariharanns@gmail.com</span>
              <span>📱 +91 8754887575</span>
            </div>
            <a href="#contact" onClick={closeMobileMenu} className="mobile-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  )
}

export default Header


