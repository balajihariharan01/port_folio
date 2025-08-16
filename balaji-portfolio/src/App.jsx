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
  )
}

export default App
