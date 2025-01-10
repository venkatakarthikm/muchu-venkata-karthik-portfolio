import React from "react";
import "./Home.css";

const Home = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank"); // Opens the PDF in a new tab
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="animate__animated animate__fadeInDown">
            Hello, I'm Muchu Venkata Karthik
          </h1>
          <p className="animate__animated animate__fadeInUp">
            I am a student and a passionate Full Stack Developer, specializing in
            React.
          </p>
          <br/><br/><br/>
          <button className="home-button animate__animated animate__fadeInUp"
          onClick={handleResumeClick}>
          
            <span>View Resume</span>
          </button>
        </div>
        <div className="home-photo animate__animated animate__zoomIn">
          <img src="1000004233.jpg" alt="Cherry Gouda" />
        </div>
      </div>
    </section>
  );
};

export default Home;
