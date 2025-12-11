import Section from './Section'

const Resume = () => (
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
          <li><strong>Machine Learning:</strong> LSTM time‑series, TensorFlow/Keras</li>
          <li><strong>Database:</strong> SQL, MongoDB, Data Visualization</li>
          <li><strong>Cloud:</strong> AWS EC2/S3 basics</li>
          <li><strong>Quality Assurance:</strong> Manual testing, test cases, tracking</li>
        </ul>
        
        <div className="resume-actions">
          <a className="btn btn-primary" href="/balaji.pdf" target="_blank" rel="noreferrer">
            View PDF
          </a>
          <a className="btn btn-outline" href="/balaji.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </Section>
)

export default Resume


