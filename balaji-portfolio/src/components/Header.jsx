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
        
        {/* New Modern Mobile Menu Button */}
        <button 
          className={`mobile-menu-trigger${mobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
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
        
        {/* New Modern Mobile Menu */}
        <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
          <div className="mobile-menu-container">
            {/* Mobile Menu Header */}
            <div className="mobile-header">
              <div className="mobile-brand">
                <img src="/logo.png" alt="Balaji" className="mobile-logo" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                <span className="mobile-brand-text">Balaji</span>
              </div>
              <button className="mobile-close" onClick={closeMobileMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="mobile-navigation">
              <div className="nav-section">
                <h3 className="nav-title">Navigation</h3>
                <div className="nav-links">
                  <a href="#about" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">👤</div>
                    <span>About</span>
                  </a>
                  <a href="#education" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">🎓</div>
                    <span>Education</span>
                  </a>
                  <a href="#projects" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">💻</div>
                    <span>Projects</span>
                  </a>
                  <a href="#resume" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">📄</div>
                    <span>Resume</span>
                  </a>
                  <a href="#certificates" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">🏆</div>
                    <span>Certificates</span>
                  </a>
                  <a href="#skills" onClick={closeMobileMenu} className="nav-link">
                    <div className="nav-icon">⚡</div>
                    <span>Skills</span>
                  </a>
                </div>
              </div>

              {/* Contact Section */}
              <div className="contact-section">
                <h3 className="contact-title">Contact Info</h3>
                <div className="contact-items">
                  <a href="mailto:balajihariharanns@gmail.com" className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-info">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">balajihariharanns@gmail.com</span>
                    </div>
                  </a>
                  <a href="tel:+918754887575" className="contact-item">
                    <div className="contact-icon">📱</div>
                    <div className="contact-info">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+91 8754887575</span>
                    </div>
                  </a>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-info">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  )
}

export default Header


