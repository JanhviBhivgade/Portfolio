import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', color: '#E34F26', symbol: '</>' },
    { name: 'CSS', color: '#1572B6', symbol: '{}' },
    { name: 'Tailwind', color: '#06B6D4', symbol: '🌊' },
    { name: 'JavaScript', color: '#F7DF1E', symbol: 'JS' },
    { name: 'React', color: '#61DAFB', symbol: '⚛️' },
    { name: 'Bootstrap', color: '#7952B3', symbol: 'BS' },
    { name: 'GitHub', color: '#181717', symbol: '🐙' },
    { name: 'Java', color: '#007396', symbol: '☕' },
    { name: 'WordPress', color: '#21759B', symbol: 'WP' },
    { name: 'PowerBI', color: '#F2C811', symbol: '📊' },
    { name: 'Oracle', color: '#F80000', symbol: '🔮' }
  ];

  return (
    <div className="skills-section">
      <h1 className="title">Skills</h1>
      
      <div className="skills-bar">
        <div className="track">
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon">
                {skill.symbol}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;