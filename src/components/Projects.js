import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      name: 'Cric Web',
      link: 'https://frontend-tcpo.onrender.com/',
      image: 'cricweb.png',
      tags: ['Cricket', 'Web App', 'Stats'],
      git: 'https://github.com/user/cric-web',
      description: 'A cricket web app to track stats and matches.',
    },
    {
      name: 'Chat Web VK',
      link: 'https://chatwebvk.onrender.com',
      image: 'chaatweb.png',
      tags: ['Chat', 'Web App', 'Real-Time'],
      git: 'https://github.com/user/chat-web-vk',
      description: 'A real-time chat application for seamless communication.',
    },
    {
      name: 'Movie Player',
      link: 'https://moviezplayer.onrender.com',
      image: 'mp.png',
      tags: ['Movies', 'Player', 'Streaming'],
      git: 'https://github.com/user/movie-player',
      description: 'A movie player for seamless streaming.',
    },
    {
      name: 'X comments checker',
      link: 'https://xcomments.onrender.com/',
      image: 'xcomments.png',
      tags: ['X', 'Twitter', 'Comments'],
      git: 'https://github.com/user/movie-player',
      description: 'Compare user in the comment section',
    },
    {
      name: 'ECO LEARN',
      link: 'https://jfsd-sustainability-education-orbm.onrender.com/',
      image: 'jfsdsdp.png',
      tags: ['Sustainable', 'education', 'ECO LEARN'],
      git: 'https://github.com/user/movie-player',
      description: 'A movie player for seamless streaming.',
    },
    {
      name: 'Verified Follower counter',
      link: 'https://twitter-verified-follower-counter.onrender.com/',
      image: 'xfollow.png',
      tags: ['X', 'Twitter', 'Followers'],
      git: 'https://github.com/user/movie-player',
      description: 'To check verified followers on twitter(x)',
    },
    {
      name: 'Twitter Engagement Checker',
      link: 'https://mahesher-twitter-engagement-checker.onrender.com/',
      image: 'xengcheck.png',
      tags: ['X', 'Twitter', 'Engagement'],
      git: 'https://github.com/user/movie-player',
      description: 'To check Engagement of twitter(x) profile',
    },
    {
      name: 'Rules App',
      link: 'https://rulesfrontend.onrender.com',
      image: 'rules.png',
      tags: ['rules', 'react', 'spring'],
      git: 'https://github.com/user/movie-player',
      description: 'approve and reject rules between the users',
    },
    {
      name: 'CineDisco',
      link: 'https://cinedisco.vercel.app/',
      image: 'cinedisco.png',
      tags: ['Movies', 'cinema', 'collections'],
      git: 'https://github.com/user/movie-player',
      description: 'Movie news and collection tracker',
    },
    {
      name: 'Yt Transcript',
      link: 'https://yttranscript-psyo.onrender.com',
      image: 'yttrans.png',
      tags: ['Transcript', 'youtube'],
      git: 'https://github.com/user/movie-player',
      description: 'transcription of youtube video',
    },
    {
      name: 'Video Downloader',
      link: 'https://videodownloader-svk8.onrender.com',
      image: 'videodownload.png',
      tags: ['Downloader', 'Video Downloader'],
      git: 'https://github.com/user/movie-player',
      description: 'Any video download',
    },
  ];

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="project-card"
            onClick={() => openPopup(project)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p className="project-tags">{project.tags.join(' | ')}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <butto className="close" onClick={closePopup}>
              ×
            </butto>
            <h2>{selectedProject.name}</h2>
            <img src={selectedProject.image} alt={selectedProject.name} />
            <p>{selectedProject.description}</p>
            <div className="popup-tags">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="popup-buttons">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                <btton className="live-btn">Live Page</btton>
              </a>
              <a href={selectedProject.git} target="_blank" rel="noopener noreferrer">
                <btton className="git-btn">Git Repository</btton>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;