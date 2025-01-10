import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const educationDetails = [
    { degree: "Bachelor Of Technology In Computer Science", institution: "KONERU LAKSHMAIAH EDUCATION FOUNDATION", year: "2022-2026", grade: "9.3 CGPA", description: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Koneru Lakshmaiah Education Foundation, Vijayawada." },
    { degree: "Board Of Intermediate Education", institution: "SRI BASARA EDUCATIONAL INSTITUTIONS", year: "2022", grade: "91.5%", description: "I finished my 12th-grade education at SRI BASARA EDUCATIONAL INSTITUTIONS." },
    { degree: "Board Of Secondary Education", institution: "LORVENS SCHOOL", year: "2020", grade: "90%", description: "I finished my 10th-grade education at LORVENS SCHOOL." },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('education');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerHeight = window.innerHeight * 0.8;
      if (sectionTop < triggerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="education" className={`education-history ${visible ? 'visible' : ''}`}>
      <h2 className="animate__animated animate__flipInX">Education Timeline</h2>
      <div className="timeline-container">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-path">
              <span className="circle"></span>
              <span className="path-line"></span>
            </div>
            <div className="education-content">
              <div className="education-title">{edu.degree}</div>
              <div className="education-subtitle">{edu.institution}<br />{edu.year}</div>
              <div className="education-grade">Grade: {edu.grade}</div>
              <div className="education-description">
                {edu.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;