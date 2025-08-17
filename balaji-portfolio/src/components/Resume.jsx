import Section from './Section'

const Resume = () => (
  <Section id="resume" title="Resume" className="resume">
    <div className="resume-simple">
      <div className="resume-profile">
        <h3>Profile</h3>
        <p>
          MCA student and software developer with projects in full‑stack web and deep learning (LSTM). 
          Comfortable with React, Node.js, Python, Java, MySQL, and AWS basics. 
          Passionate about building useful products with clean code and simple UX.
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
          <a className="btn btn-primary" href="/balaji%20(2).pdf" target="_blank" rel="noreferrer">
            View PDF
          </a>
          <a className="btn btn-outline" href="/balaji%20(2).pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </Section>
)

export default Resume


