import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section id="home" className={`home-section ${isVisible ? "show" : ""}`}>
      <div className="home-content">
        <div className="home-photo">
          <img src="1000004233.jpg" alt="Muchu Venkata Karthik" />
        </div>
        <div className="home-text">
          <h1>Hello, I'm Muchu Venkata Karthik</h1>
          <p>
            I am a student and a passionate Full Stack Developer, specializing in React.
          </p>
          <button className="home-button" onClick={handleResumeClick}>
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
