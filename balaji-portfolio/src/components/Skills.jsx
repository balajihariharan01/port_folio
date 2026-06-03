import React from 'react';
import Section from './Section';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "/logos/web.svg",
      color: "#10b981",
      skills: [
        { name: "Vue.js", description: "Frontend framework", logo: "/logos/vue.svg", color: "#42b883" },
        { name: "JavaScript", description: "Dynamic programming", logo: "/logos/js.png", color: "#ca8a04" },
        { name: "HTML", description: "Semantic markup", logo: "/logos/html.png", color: "#ea580c" },
        { name: "CSS", description: "Styling & layout", logo: "/logos/css.png", color: "#2563eb" },
        { name: "React", description: "Frontend library", logo: "/logos/react.svg", color: "#0891b2" }
      ]
    },
    {
      title: "Backend Development",
      icon: "/logos/code.svg",
      color: "#3b82f6",
      skills: [
        { name: "PHP", description: "Server-side scripting", logo: "/logos/php.png", color: "#7c3aed" },
        { name: "Slim Framework", description: "PHP micro-framework", logo: "/logos/slim.png", color: "#a78bfa" },
        { name: "REST APIs", description: "Application interfaces", logo: "/logos/api.svg", color: "#ec4899" },
        { name: "Node.js", description: "Backend runtime", logo: "/logos/node.png", color: "#059669" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: "/logos/database.svg",
      color: "#8b5cf6",
      skills: [
        { name: "SQL", description: "Database queries", logo: "/logos/sql.png", color: "#2563eb" },
        { name: "MySQL", description: "Relational database", logo: "/logos/mysql.png", color: "#00758f" },
        { name: "Git", description: "Version control", logo: "/logos/git.png", color: "#dc2626" },
        { name: "GitHub", description: "Code collaboration", logo: "/logos/github.svg", color: "#bfc9e0" }
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills" className="skills">
      <div className="skills-hero">
        <div className="skills-intro">
          <h3>My Technical Expertise</h3>
          <p>From frontend frameworks to backend APIs and databases, here are the key technologies I work with daily.</p>
        </div>
      </div>
      
      <div className="skills-showcase">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category-modern">
            <div className="category-header-modern">
              <div className="category-icon-modern" style={{backgroundColor: category.color}}>
                <img src={category.icon} alt={category.title} className="category-icon-img" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }} />
                <span className="category-icon-text" style={{display: 'none'}}>💻</span>
              </div>
              <h3 className="category-title-modern">{category.title}</h3>
              <div className="category-line" style={{backgroundColor: category.color}}></div>
            </div>
            
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card" style={{'--skill-color': skill.color}}>
                  <div className="skill-card-inner">
                    <div className="skill-header">
                      <div className="skill-logo-modern">
                        <img src={skill.logo} alt={skill.name} className="skill-logo-img" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'block';
                        }} />
                        <span className="skill-logo-text" style={{display: 'none'}}>{skill.name.charAt(0)}</span>
                      </div>
                    </div>
                    
                    <div className="skill-content">
                      <h4 className="skill-name-modern">{skill.name}</h4>
                      <p className="skill-description-modern">{skill.description}</p>
                    </div>
                  </div>
                  
                  <div className="skill-card-glow" style={{backgroundColor: skill.color}}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-summary">
        <div className="summary-card">
          <div className="summary-icon">
            <img src="/logos/stats.svg" alt="Stats" className="summary-icon-img" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'block';
            }} />
            <span className="summary-icon-text" style={{display: 'none'}}>📊</span>
          </div>
          <div className="summary-content">
            <h4>Skill Overview</h4>
            <p>Proficient in 13+ technologies across 3 major categories</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <img src="/logos/target.svg" alt="Target" className="summary-icon-img" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'block';
            }} />
            <span className="summary-icon-text" style={{display: 'none'}}>🎯</span>
          </div>
          <div className="summary-content">
            <h4>Specialization</h4>
            <p>Full-stack development with focus on modern web technologies</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <img src="/logos/rocket.svg" alt="Rocket" className="summary-icon-img" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'block';
            }} />
            <span className="summary-icon-text" style={{display: 'none'}}>🚀</span>
          </div>
          <div className="summary-content">
            <h4>Growth</h4>
            <p>Continuously learning and adapting to new technologies</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills


