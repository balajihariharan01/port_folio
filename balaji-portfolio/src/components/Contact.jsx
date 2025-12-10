import Section from './Section'



const Contact = () => (
  <Section id="contact" title="Connect" className="contact">
    <div className="contact-responsive-grid">
      <form
        className="contact-form-responsive"
  action="https://formsubmit.co/balajihariharanns@gmail.com"
        method="POST"
      >
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" placeholder="you@mail.com" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" id="message" name="message" placeholder="Tell me about your idea or opportunity..." required />
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
      <div className="contact-card-responsive modern-contact-card">
        <div className="contact-avatar-row">
          <img src="/profile.jpg" alt="Balaji" className="contact-avatar" />
        </div>
        <h3 className="contact-title-modern">Let's Connect!</h3>
        <p className="muted contact-desc">Open to internships, freelance gigs, and full‑time roles in frontend, full‑stack, or ML projects.</p>
        <div className="contact-methods-grid">
          <a
            className="contact-method"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=balajihariharanns@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-method-icon">📨</span>
            <span>Email</span>
          </a>
          <a className="contact-method" href="https://github.com/balajihariharan01" target="_blank" rel="noreferrer">
            <span className="contact-method-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a className="contact-method" href="https://www.linkedin.com/in/balajihariharanns/" target="_blank" rel="noreferrer">
            <span className="contact-method-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a className="contact-method" href="https://www.instagram.com/balajihariharan?igsh=MWs5NWt6ZzQwOG01cQ==" target="_blank" rel="noreferrer">
            <span className="contact-method-icon">📸</span>
            <span>Instagram</span>
          </a>
        </div>
        <div className="contact-langs">
          <span>🌐 English, Tamil</span>
          <span>🤝 Problem solving, Team work</span>
        </div>
      </div>
    </div>
  </Section>
)

export default Contact


