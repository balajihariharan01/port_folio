import Section from './Section'

const Contact = () => (
  <Section id="contact" title="Connect" className="contact">
    <div className="contact-grid">
      <form className="form" onSubmit={(e) => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); const subject = encodeURIComponent(`Portfolio contact from ${data.name || 'Unknown'}`); const body = encodeURIComponent(`${data.message || ''}\n\n—from: ${data.name || ''} <${data.email || ''}>`); window.location.href = `mailto:balajihariharanns@gmail.com?subject=${subject}&body=${body}` }}>
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
      <div className="contact-card">
        <h3 style={{ marginTop: 0 }}>Get in touch</h3>
        <p className="muted">I'm open to internships, freelance gigs, and full‑time roles in frontend, full‑stack, or ML projects.</p>
        <div className="actions" style={{ marginTop: 10 }}>
          <a className="btn btn-outline" href="mailto:balajihariharanns@gmail.com">Email</a>
          <a className="btn btn-outline" href="https://github.com/balajihariharan01" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline" href="https://www.linkedin.com/in/n-s-balaji-hariharan-28109a24a/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-outline" href="https://www.instagram.com/balajihariharan?igsh=MWs5NWt6ZzQwOG01cQ==" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <p className="muted small" style={{ marginTop: 12 }}>Languages: English, Tamil • Soft Skills: Problem solving, Team work</p>
      </div>
    </div>
  </Section>
)

export default Contact


