const Hero = () => (
  <section className="section hero" id="home">
    <div className="blobs"><span className="blob b1"></span><span className="blob b2"></span></div>
    <div className="container hero-grid">
      <div>
        <p className="eyebrow reveal">Software Developer • MCA</p>
        <h1 className="reveal">BALAJI HARIHARAN N S</h1>
        <p className="lead reveal">
          Looking for opportunities to drive innovation, deliver exceptional results, and contribute to growth.
          Passionate about software development, committed to continuous learning, and thrive in collaborative teams.
        </p>
        <div className="actions reveal">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
        <div className="meta reveal">
          <p>Email: <a href="mailto:balajihariharanns@gmail.com">balajihariharanns@gmail.com</a></p>
          <p>Phone: <a href="tel:+918754887575">+91 8754887575</a></p>
          <p>Location: Tamil Nadu, India</p>
        </div>
      </div>
      <div className="w-full reveal" style={{ justifySelf: 'end', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/profile.jpg" alt="Portrait of Balaji Hariharan N S" className="avatar" />
      </div>
    </div>
  </section>
)

export default Hero


