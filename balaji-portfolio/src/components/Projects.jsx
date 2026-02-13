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
      <article className="card gradient project" style={{
        backgroundImage: 'url(/project-bg-construction.svg)',
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
          <h3 className="text-xl font-semibold project-title">Smart Construction Materials Management System</h3>
          <p>A scalable MERN stack e-commerce application with JWT authentication, role-based access control, and an advanced admin dashboard with secure RESTful CRUD APIs for real-time inventory and order management.</p>
          <p className="muted small">Tech: React, Node.js, MongoDB, Express, JWT</p>
        </div>
      </article>
      
      <article className="card gradient project" style={{
        backgroundImage: 'url(/project-bg-cafe.svg)',
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
          <h3 className="text-xl font-semibold project-title">Smart Billing Sales Management System for Cafés</h3>
          <p>A production-ready POS billing system developed using the MERN stack. Includes secure authentication, real-time sales dashboard, and thermal receipt generation optimized for café environments.</p>
          <p className="muted small">Tech: React, Node.js, MongoDB, Express, JWT</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/SELVI-COFFEE-BAR" target="_blank" rel="noreferrer">Source</a>
          </div>
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
          <h3 className="text-xl font-semibold project-title">Recipe Retrieval System</h3>
          <p>A personalized recipe recommendation platform using React.js, Node.js, and MongoDB. Implements preference-based filtering, RESTful APIs, and dynamic UI components for real-time recipe suggestions.</p>
          <p className="muted small">Tech: React, Node.js, MongoDB, Express</p>
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
          <h3 className="text-xl font-semibold project-title">Student Management System (JDBC)</h3>
          <p>A Java desktop application using JDBC and MySQL for managing student records. Includes role-based login, secure CRUD operations, and structured database handling for academic administration.</p>
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

      <article className="card gradient project" style={{
        backgroundImage: 'url(/project-bg-portfolio.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/react.png" alt="React" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/css.png" alt="CSS" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">Personal Portfolio Website</h3>
          <p>A dynamic developer portfolio built using React.js with component-based architecture. Features responsive layouts, optimized UI rendering, and smooth cross-device performance.</p>
          <p className="muted small">Tech: React.js, CSS3, Vite</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/port_folio" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>

      <article className="card project" style={{
        backgroundImage: 'url(/project-bg-library.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="project-overlay"></div>
        <div className="project-content">
          <div className="project-head">
            <img className="project-logo" src="/logos/php.png" alt="PHP" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <img className="project-logo" src="/logos/mysql.png" alt="MySQL" onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
          <h3 className="text-xl font-semibold project-title">Library Management System</h3>
          <p>A web-based library management system developed using PHP and MySQL. Supports book inventory management, user records, issue/return tracking, and secure CRUD operations with an admin dashboard.</p>
          <p className="muted small">Tech: PHP, MySQL, HTML, CSS</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/LIBRARY_MANAGEMENT_SYSTEM" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>

      <article className="card gradient project" style={{
        backgroundImage: 'url(/project-bg-news.svg)',
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
          <h3 className="text-xl font-semibold project-title">News Aggregator</h3>
          <p>A full-stack news aggregation platform built with the MERN stack. Fetches and displays categorized news using REST APIs with dynamic UI updates and responsive design for real-time browsing.</p>
          <p className="muted small">Tech: MongoDB, Express.js, React, Node.js</p>
          <div className="actions" style={{ marginTop: 12 }}>
            <a className="btn btn-outline small" href="https://github.com/balajihariharan01/NEWS_AGGREGATOR" target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </article>
    </div>
  </Section>
)

export default Projects


