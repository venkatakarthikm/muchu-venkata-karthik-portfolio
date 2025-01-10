import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React Js', image: 'https://img.icons8.com/color/144/react-native.png' },
      { name: 'HTML', image: 'https://img.icons8.com/color/144/html-5.png' },
      { name: 'CSS', image: 'https://img.icons8.com/color/144/css3.png' },
      { name: 'JavaScript', image: 'https://img.icons8.com/color/144/javascript.png' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node Js', image: 'https://img.icons8.com/color/144/nodejs.png' },
      { name: 'Express', image: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF' },
      { name: 'MySQL', image: 'https://img.icons8.com/color/144/mysql-logo.png' },
      { name: 'MongoDB', image: 'https://img.icons8.com/color/144/mongodb.png' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', image: 'https://img.icons8.com/color/144/git.png' },
      { name: 'GitHub', image: 'https://img.icons8.com/ios-filled/144/ffffff/github.png' },
      { name: 'Automation Anywhere', image: 'https://www.automationanywhere.com/sites/default/files/images/AAI/automation-anywhere-logo-a-only.png' },
      { name: 'VS Code', image: 'https://img.icons8.com/color/144/visual-studio-code-2019.png' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <h2 className="skills-category">{category.category}</h2>
            <div className="skills-items">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <img src={skill.image} alt={skill.name} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
