import Section from './Section'

const Resume = () => {
  const pdfPath = `${import.meta.env.BASE_URL}balajihariharan.pdf`

  return (
    <Section id="resume" title="Resume" className="resume">
      <div className="resume-simple">
        <div className="resume-profile">
          <h3>Profile</h3>
          <p>
            Motivated software developer seeking opportunities to apply strong skills in Java, Python, SQL, and full-stack development to build scalable, high-quality applications. Passionate about problem-solving, clean code practices, system optimization, and contributing to collaborative engineering teams in a dynamic IT environment.
          </p>

          <h4>Core Competencies</h4>
          <ul className="resume-skills">
            <li><strong>Frontend:</strong> React, Responsive UI, Components</li>
            <li><strong>Backend:</strong> Node.js/Express, REST APIs</li>
            <li><strong>Database:</strong> SQL, MongoDB, Data Visualization</li>
            <li><strong>Cloud:</strong> AWS EC2/S3 basics</li>
            <li><strong>Quality Assurance:</strong> Manual testing, test cases, tracking</li>
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
