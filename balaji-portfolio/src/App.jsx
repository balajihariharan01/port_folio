import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollAnimations from './components/ScrollAnimations'

function App() {
  return (
    <div className="app">
      <div className="main-background" style={{
        backgroundImage: 'url(/main-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="main-overlay"></div>
        <div className="main-content">
          <ScrollAnimations />
          <Header />
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Resume />
            <Certificates />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
