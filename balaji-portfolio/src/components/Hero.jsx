const Hero = () => (
  <section className="section hero" id="home">
    <div className="blobs"><span className="blob b1"></span><span className="blob b2"></span></div>
    <div className="container hero-grid">
      <div>
        <p className="eyebrow reveal">Associate Software Developer</p>
        <h1 className="reveal">Hi, I'm Balaji Hariharan</h1>
        <h2 className="hero-subtitle reveal" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--accent-2)', marginBottom: '16px' }}>
          Associate Software Developer at Linways Technologies
        </h2>
        <p className="lead reveal">
          Building scalable web applications with Vue.js, Slim Framework, PHP, and SQL.
        </p>
        <div className="actions reveal">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
        <div className="meta reveal">
          <p>Email: <a href="mailto:balajihariharanns@gmail.com">balajihariharanns@gmail.com</a></p>
          <p>Phone: <a href="tel:+918754887575">+91 8754887575</a></p>
          <p>Location: Kochi, Kerala, India</p>
        </div>
      </div>
      <div className="w-full reveal" style={{ justifySelf: 'end', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/profile.jpg" alt="Portrait of Balaji Hariharan" className="avatar" />
      </div>
    </div>
  </section>
)

export default Hero


