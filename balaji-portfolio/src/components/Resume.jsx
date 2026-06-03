import Section from './Section'

const Resume = () => {
  const pdfPath = `${import.meta.env.BASE_URL}balajihariharan.pdf`

  return (
    <Section id="resume" title="Resume" className="resume">
      <div className="resume-simple">
        <div className="resume-profile">
          <h3>Profile</h3>
          <p>
            Associate Software Developer with experience in Vue.js, Slim Framework, PHP, and SQL. Passionate about building efficient web applications, learning modern technologies, and contributing to impactful software solutions.
          </p>

          <h4>Core Competencies</h4>
          <ul className="resume-skills">
            <li><strong>Frontend:</strong> Vue.js, JavaScript, HTML5, CSS3, React</li>
            <li><strong>Backend:</strong> Slim Framework, PHP, REST APIs, Node.js</li>
            <li><strong>Database:</strong> SQL, MySQL, MongoDB</li>
            <li><strong>Tools & VC:</strong> Git, GitHub, VS Code</li>
          </ul>

          <div className="resume-actions">
            <a className="btn btn-primary" href={pdfPath} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
            <a className="btn btn-outline" href={pdfPath} download rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resume
