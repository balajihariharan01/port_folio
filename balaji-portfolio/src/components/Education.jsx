import Section from './Section'

const Education = () => (
  <Section id="education" title="Education" className="education">
    <div className="education-background" style={{
      backgroundImage: 'url(/education-bg.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="education-overlay"></div>
      <div className="education-content">
        <div className="education-timeline">
          <div className="timeline-container">
            {/* Current Education */}
            <div className="timeline-item current">
              <div className="timeline-marker">
                <div className="marker-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="marker-pulse"></div>
              </div>
              <div className="timeline-content">
                <div className="education-header">
                  <div className="education-badge current">Currently Pursuing</div>
                  <div className="education-year">2024 - Present</div>
                </div>
                <h3 className="education-title">Master of Computer Applications</h3>
                <p className="education-institution">Kongu Engineering College, Erode</p>
                <div className="education-stats">
                  <div className="stat-item">
                    <span className="stat-label">Current CGPA</span>
                    <span className="stat-value">8.88*</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Education */}
            <div className="timeline-item completed">
              <div className="timeline-marker">
                <div className="marker-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-header">
                  <div className="education-badge completed">Completed</div>
                  <div className="education-year">2021 - 2024</div>
                </div>
                <h3 className="education-title">Bachelor of Information Technology</h3>
                <p className="education-institution">PSG College of Arts & Science, Coimbatore</p>
                <div className="education-stats">
                  <div className="stat-item">
                    <span className="stat-label">Final CGPA</span>
                    <span className="stat-value">8.2</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <div className="completion-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Graduated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-marker">
                <div className="marker-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-header">
                  <div className="education-badge completed">Completed</div>
                  <div className="education-year">2020 - 2021</div>
                </div>
                <h3 className="education-title">Higher Secondary Education (HSC)</h3>
                <p className="education-institution">Sambaviga Higher Secondary School, Sivagangai</p>
                <div className="education-stats">
                  <div className="stat-item">
                    <span className="stat-label">Percentage</span>
                    <span className="stat-value">80.91%</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <div className="completion-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-marker">
                <div className="marker-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-header">
                  <div className="education-badge completed">Completed</div>
                  <div className="education-year">2018 - 2019</div>
                </div>
                <h3 className="education-title">Secondary School (SSLC)</h3>
                <p className="education-institution">Sambaviga Higher Secondary School, Sivagangai</p>
                <div className="education-stats">
                  <div className="stat-item">
                    <span className="stat-label">Percentage</span>
                    <span className="stat-value">77.2%</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <div className="completion-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Completed</span>
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </Section>
)

export default Education


