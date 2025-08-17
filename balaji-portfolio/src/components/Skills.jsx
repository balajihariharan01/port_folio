import React from 'react';
import Section from './Section';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "/logos/code.svg",
      color: "#3b82f6",
      skills: [
        { name: "C", description: "System programming", logo: "/logos/c.png", color: "#2563eb" },
        { name: "Java", description: "Enterprise solutions", logo: "/logos/java.png", color: "#dc2626" },
        { name: "Python", description: "Versatile programming", logo: "/logos/python.jpeg", color: "#059669" },
        { name: "JavaScript", description: "Dynamic programming", logo: "/logos/js.png", color: "#ca8a04" },
        { name: "PHP", description: "Web development", logo: "/logos/php.png", color: "#7c3aed" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "/logos/web.svg",
      color: "#10b981",
      skills: [
        { name: "HTML", description: "Semantic markup", logo: "/logos/html.png", color: "#ea580c" },
        { name: "CSS", description: "Styling & layout", logo: "/logos/css.png", color: "#2563eb" },
        { name: "React", description: "Frontend framework", logo: "/logos/react.svg", color: "#0891b2" },
        { name: "Node.js", description: "Backend runtime", logo: "/logos/node.png", color: "#059669" }
      ]
    },
    {
      title: "Development Tools",
      icon: "/logos/tools.svg",
      color: "#f59e0b",
      skills: [
        { name: "VS Code", description: "Code editor", logo: "/logos/vs code.jpeg", color: "#2563eb" },
        { name: "Eclipse", description: "Java IDE", logo: "/logos/eclipse.png", color: "#ea580c" },
        { name: "Git", description: "Version control", logo: "/logos/git.png", color: "#dc2626" },
        { name: "Docker", description: "Containerization", logo: "/logos/docker.png", color: "#2563eb" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "/logos/database.svg",
      color: "#8b5cf6",
      skills: [
        { name: "SQL", description: "Database queries", logo: "/logos/sql.png", color: "#2563eb" },
        { name: "MongoDB", description: "NoSQL database", logo: "/logos/mongo.png", color: "#059669" },
        { name: "AWS EC2", description: "Cloud computing", logo: "/logos/aws.png", color: "#ea580c" },
        { name: "AWS S3", description: "Cloud storage", logo: "/logos/aws.png", color: "#ea580c" }
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills" className="skills">
      <div className="skills-hero">
        <div className="skills-intro">
          <h3>My Technical Expertise</h3>
          <p>From programming languages to cloud technologies, I've built a diverse skill set to tackle any development challenge.</p>
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
            <p>Proficient in 16+ technologies across 4 major categories</p>
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


