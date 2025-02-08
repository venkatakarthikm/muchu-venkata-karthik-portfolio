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
    // Add scroll event handler
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

    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable key combinations for inspecting
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'i' || e.key === 'I')) || e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll(); // Initial check to apply visible class to sections already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
