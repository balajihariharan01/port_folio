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
        
        {/* Enhanced Mobile menu button */}
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
        
        {/* Enhanced Mobile Navigation Panel */}
        <div className={`mobile-nav-panel${mobileMenuOpen ? ' open' : ''}`}>
          <div className="mobile-nav-header">
            <div className="mobile-nav-brand">
              <img src="/logo.png" alt="Balaji logo" className="mobile-brand-logo" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="mobile-brand-text">Balaji Hariharan</span>
            </div>
            <button 
              className="mobile-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          
          <div className="mobile-nav-content">
            <div className="mobile-nav-section">
              <h3 className="mobile-nav-title">Navigation</h3>
              <div className="mobile-nav-links">
                <a href="#about" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">👤</span>
                  <span>About</span>
                </a>
                <a href="#education" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">🎓</span>
                  <span>Education</span>
                </a>
                <a href="#projects" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">💻</span>
                  <span>Projects</span>
                </a>
                <a href="#resume" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">📄</span>
                  <span>Resume</span>
                </a>
                <a href="#certificates" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">🏆</span>
                  <span>Certificates</span>
                </a>
                <a href="#skills" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">⚡</span>
                  <span>Skills</span>
                </a>
                <a href="#contact" onClick={closeMobileMenu} className="mobile-nav-link">
                  <span className="mobile-nav-icon">📧</span>
                  <span>Contact</span>
                </a>
              </div>
            </div>
            
            <div className="mobile-nav-section">
              <h3 className="mobile-nav-title">Quick Actions</h3>
              <div className="mobile-nav-actions">
                <a href="#contact" onClick={closeMobileMenu} className="mobile-action-btn primary">
                  <span>Get In Touch</span>
                  <span className="action-arrow">→</span>
                </a>
                <a href="#projects" onClick={closeMobileMenu} className="mobile-action-btn secondary">
                  <span>View Projects</span>
                  <span className="action-arrow">→</span>
                </a>
              </div>
            </div>
            
            <div className="mobile-nav-section">
              <h3 className="mobile-nav-title">Contact Info</h3>
              <div className="mobile-contact-info">
                <div className="mobile-contact-item">
                  <span className="contact-icon">📧</span>
                  <span>balajihariharanns@gmail.com</span>
                </div>
                <div className="mobile-contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91 8754887575</span>
                </div>
                <div className="mobile-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
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


