import React, { useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check to apply visible class to sections already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills className="skils" />
      <Education className="section" />
      <Projects className="section" />
      <Certifications className="section" />
      <Footer />
    </div>
  );
}

export default App;
