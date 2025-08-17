import Section from './Section'

const Projects = () => (
  <Section id="projects" title="Projects & Research" className="projects">
    <div className="cards two-cols project-grid" onMouseMove={(e) => {
      const container = e.currentTarget
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.querySelectorAll('.card').forEach((el) => {
        el.style.setProperty('--x', `${x}px`)
        el.style.setProperty('--y', `${y}px`)
      })
    }}>
      <article className="card gradient project research" style={{
        backgroundImage: 'url(/project-bg-energy.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/python.png" alt="Python" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/tensorflow.png" alt="TensorFlow" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">Energy Consumption Forecasting using LSTM</h3>
          <p>Deep learning approach with LSTM networks in Python to forecast future energy consumption from historical data.</p>
          <p className="muted small">Tech: Python, TensorFlow/Keras, NumPy, Pandas, Matplotlib</p>
        </div>
      </article>
      
      <article className="card gradient project" style={{
        backgroundImage: 'url(/project-bg-recipe.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/react.png" alt="React" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/node.png" alt="Node.js" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/mongodb.png" alt="MongoDB" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">Recipe Retrieval</h3>
          <p>Personalized recipe recommendations based on preferences, dietary needs, and available ingredients.</p>
          <p className="muted small">Tech: React.js, MongoDB, Node.js</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/RECIPE-RETRIEVAL" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>
      
      <article className="card project" style={{
        backgroundImage: 'url(/project-bg-student.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/java.png" alt="Java" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/mysql.png" alt="MySQL" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">Student Management System</h3>
          <p>Desktop CRUD application using Java, JDBC, and MySQL.</p>
          <p className="muted small">Tech: Java, JDBC, MySQL</p>
        </div>
      </article>
      
      <article className="card project" style={{
        backgroundImage: 'url(/project-bg-ecommerce.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/html.png" alt="HTML" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/css.png" alt="CSS" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">E‑Commerce Website — Fashion Haven</h3>
          <p>Simple responsive storefront for dresses with clean layout and catalog.</p>
          <p className="muted small">Tech: HTML, CSS</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/Dress" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>
    </div>
  </Section>
)

export default Projects


