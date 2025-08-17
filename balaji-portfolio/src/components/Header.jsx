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
    console.log('Toggle mobile menu clicked, current state:', mobileMenuOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    console.log('Close mobile menu clicked')
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="home">
      <div className="container inner">
        <a href="#home" className="brand" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Balaji logo" className="brand-logo" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <span className="brand-gradient">Balaji</span><span className="dot"></span>
        </a>
        
        {/* New Animated Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn-new${mobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
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
        
        {/* New Slide-In Mobile Menu Panel */}
        <div className={`mobile-menu-panel${mobileMenuOpen ? ' open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-profile">
              <div className="mobile-avatar">
                <img src="/profile.jpg" alt="Balaji" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
              <div className="mobile-profile-info">
                <h3>Balaji Hariharan</h3>
                <p>Software Developer</p>
              </div>
            </div>
            <button className="mobile-close-btn-new" onClick={closeMobileMenu}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-body">
            <div className="mobile-nav-section">
              <h4 className="mobile-section-title">Menu</h4>
              <div className="mobile-nav-grid">
                <a href="#about" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">👤</div>
                  <span>About</span>
                </a>
                <a href="#education" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">🎓</div>
                  <span>Education</span>
                </a>
                <a href="#projects" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">💻</div>
                  <span>Projects</span>
                </a>
                <a href="#resume" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">📄</div>
                  <span>Resume</span>
                </a>
                <a href="#certificates" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">🏆</div>
                  <span>Certificates</span>
                </a>
                <a href="#skills" onClick={closeMobileMenu} className="mobile-nav-card">
                  <div className="nav-card-icon">⚡</div>
                  <span>Skills</span>
                </a>
              </div>
            </div>
            
            <div className="mobile-contact-section">
              <h4 className="mobile-section-title">Get In Touch</h4>
              <div className="mobile-contact-cards">
                <a href="mailto:balajihariharanns@gmail.com" className="contact-card">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">balajihariharanns@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+918754887575" className="contact-card">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 8754887575</span>
                  </div>
                </a>
                <div className="contact-card">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mobile-actions">
             
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


