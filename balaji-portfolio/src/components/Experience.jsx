import Section from './Section'

const Experience = () => {
  const getExperienceDuration = () => {
    const startDate = new Date(2026, 3, 1); // April 1, 2026 (0-indexed month: 3 = April)
    const endDate = new Date();

    // Difference in time
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Approximate month calculation (30.4375 days per month)
    const totalMonths = Math.max(1, Math.round(diffDays / 30.4375));

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationStr = '';
    if (years > 0) {
      durationStr += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (durationStr) durationStr += ' ';
      durationStr += `${months} month${months > 1 ? 's' : ''}`;
    }
    return durationStr;
  };

  return (
    <Section id="experience" title="Work Experience" className="experience">
      <div className="experience-timeline">
        <div className="timeline-container">
          <div className="timeline-item current">
            <div className="timeline-marker">
              <div className="marker-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-badge current">Current Role</div>
                <div className="experience-year">April 2026 – Present [{getExperienceDuration()}]</div>
              </div>
              <h3 className="experience-title">Associate Software Developer</h3>
              <h4 className="experience-company">Linways Technologies Pvt Ltd</h4>
              <p className="experience-location">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'text-bottom' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Kochi, Kerala, India
              </p>

              <ul className="experience-responsibilities">
                <li>Develop and maintain web applications using Vue.js, Slim Framework, PHP, and SQL.</li>
                <li>Build responsive and user-friendly interfaces.</li>
                <li>Design and optimize SQL queries for application performance.</li>
                <li>Integrate frontend components with backend services and APIs.</li>
                <li>Collaborate with developers and team members to deliver software solutions.</li>
                <li>Debug, test, and improve application quality and performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experience
