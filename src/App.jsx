import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, FileText, Link } from 'lucide-react';

// Main App component containing all other components and data
const App = () => {

  // --- Portfolio Data ---
  const personalInfo = {
    name: 'Vallabha Sai Charan',
    email: 'vallabhasaicharan2000@gmail.com',
    phone: '7337214592',
    github: 'https://github.com/charan602',
    linkedin: 'https://www.linkedin.com/in/vallabha-sai-charan-b761a5375/',
    resumeUrl: '/Resume.pdf',
  };

  const skills = {
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'SQL'],
    'Frontend': ['React.js', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'Servlets'],
    'Databases': ['SQL'],
    'Machine Learning': ['Machine Learning', 'Logistic Regression', 'Computer Vision'],
    'Tools & Concepts': ['Git', 'REST APIs', 'Vercel Deployment'],
  };

  const certifications = [
    'Python',
    'Web Development',
    'Machine Learning',
  ];

  const projects = [
    {
      title: 'Word-Paint',
      description: 'A feature-rich web application that functions as both a document editor and a drawing/painting tool. Showcases complex state management and rich UI development.',
      tech: ['React.js', 'Vercel', 'JavaScript'],
      liveUrl: 'https://word-paint.vercel.app/',
      githubUrl: 'https://github.com/charan602/word-paint',
    },
    {
      title: 'Food Delivery Web Application',
      description: 'A complete web application simulating a food ordering and delivery platform, demonstrating proficiency in handling user authentication, order processing, and dynamic content rendering.',
      tech: ['React', 'Node.js', 'API Integration', 'Vercel'],
      liveUrl: 'https://food-ordering-app-ruddy-five.vercel.app/',
      githubUrl: 'https://github.com/charan602/food-ordering-app',
    },
    {
      title: 'Social Media Web Application',
      description: 'A large-scale social media platform mimicking the core functionalities of services like Facebook and Instagram. Built for scalability and complex data handling.',
      tech: ['Full-Stack', 'Node.js', 'React'],
      liveUrl: null,
      githubUrl: 'https://github.com/charan602/social-media',
    },
    {
      title: 'Rock vs Mine Prediction',
      description: 'A machine learning classification model to distinguish between a rock and a metal cylinder (mine) based on sonar data. Implemented using Logistic Regression.',
      tech: ['Machine Learning', 'Python', 'Logistic Regression'],
      liveUrl: null,
    },
    {
      title: 'Moving Object Detection',
      description: 'A computer vision project used for camera surveillance to detect and track moving objects, demonstrating a practical application of ML/CV techniques.',
      tech: ['Computer Vision', 'Python'],
      liveUrl: null,
    },
    {
      title: 'To Do List App',
      description: 'A basic to-do list web application using React for the front end, showcasing strong command over React fundamentals.',
      tech: ['React'],
      liveUrl: null,
      },
    {
      title: 'Weather App',
      description: 'A weather forecast application using an API to fetch and display real-time weather data, showcasing API integration skills.',
      tech: ['API Integration', 'JavaScript'],
      liveUrl: null,
    },
  ];

  // --- Components ---

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleScrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };
  
    return (
      <header className="header">
        <div className="container header-container">
          <h1 className="header-title">
            <a href="#home" onClick={() => handleScrollTo('home')}>
              {personalInfo.name.split(' ')[0]}
            </a>
          </h1>
          <nav className="header-nav-desktop">
            <button className="nav-button" onClick={() => handleScrollTo('about')}>About</button>
            <button className="nav-button" onClick={() => handleScrollTo('skills')}>Skills</button>
            <button className="nav-button" onClick={() => handleScrollTo('projects')}>Projects</button>
            <button className="nav-button" onClick={() => handleScrollTo('contact')}>Contact</button>
          </nav>
          <button onClick={toggleMenu} className="header-menu-button">
            {isMenuOpen? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="header-nav-mobile-container">
            <nav className="header-nav-mobile">
              <button className="nav-button-mobile" onClick={() => handleScrollTo('about')}>About</button>
              <button className="nav-button-mobile" onClick={() => handleScrollTo('skills')}>Skills</button>
              <button className="nav-button-mobile" onClick={() => handleScrollTo('projects')}>Projects</button>
              <button className="nav-button-mobile" onClick={() => handleScrollTo('contact')}>Contact</button>
            </nav>
          </div>
        )}
      </header>
    );
  };
  
  const Hero = () => {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="hero-name">{personalInfo.name}</span>
          </h1>
          <p className="hero-subtitle">
            A passionate **Full-Stack Developer** and **Machine Learning Enthusiast** with a strong foundation in modern web technologies and a drive to build scalable applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <Github size={28} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="social-icon">
              <Mail size={28} />
            </a>
            <a href={`tel:${personalInfo.phone}`} aria-label="Phone" className="social-icon">
              <Phone size={28} />
            </a>
          </div>
        </div>
        <div className="hero-placeholder">
          
        </div>
      </div>
    );
  };
  
  const About = () => {
    return (
      <div className="about-section">
        <div className="about-details-container">
          <h3 className="section-subtitle">Summary</h3>
          <p className="section-text">
            I'm Vallabha Sai Charan, a motivated B.Tech graduate with a 7.7 CGPA average from Gayatri Vidya Parishad College of Engineering (A). Graduated in 2022, I have a strong foundation in **Full-Stack Development** and **Machine Learning**. My extensive project portfolio demonstrates my ability to build and deploy robust, practical applications.
          </p>
        </div>
        <div className="about-details-container">
          <h3 className="section-subtitle">Personal Details</h3>
          <ul className="about-list">
            <li><span className="about-list-label">Email:</span> {personalInfo.email}</li>
            <li><span className="about-list-label">Phone:</span> {personalInfo.phone}</li>
            <li><span className="about-list-label">Education:</span> B.Tech from GVPCE(A), 2022</li>
            <li><span className="about-list-label">Date of Birth:</span> 17 May 2000</li>
          </ul>
        </div>
      </div>
    );
  };
  
  const Skills = () => {
    return (
      <div className="skills-grid">
        {Object.keys(skills).map((category) => (
          <div key={category} className="skills-card">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-list">
              {skills[category].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="skills-card">
          <h3 className="skills-category-title">Certifications</h3>
          <ul className="certifications-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  const Projects = () => {
    const ProjectCard = ({ project }) => (
      <div className="project-card">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-list">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={20} className="icon-margin" /> GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <Link size={20} className="icon-margin" /> Live
            </a>
          )}
        </div>
      </div>
    );
  
    return (
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  };
  
  const Contact = () => {
    return (
      <div className="contact-card">
        <h3 className="contact-title">Let's Connect!</h3>
        <p className="contact-description">
          I'm always open to discussing new projects, job opportunities, or just chatting about tech.
        </p>
        <div className="contact-details">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <Mail size={24} />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="contact-link">
            <Phone size={24} />
            <span>{personalInfo.phone}</span>
          </a>
        </div>
        <div className="contact-socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-lg">
            <Github size={32} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-lg">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React & Custom CSS</p>
        </div>
      </footer>
    );
  };
  
  const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`section ${className}`}>
      <div className="container section-container">
        <h2 className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );

  return (
    <>
      <style>
        {`
          /* Global Styles */
          :root {
            --bg-color-dark: #1f2937;
            --bg-color-light: #111827;
            --text-color-light: #d1d5db;
            --text-color-dark: #4b5563;
            --accent-blue: #3b82f6;
            --accent-blue-dark: #2563eb;
            --accent-gray: #4b5563;
            --accent-gray-dark: #374151;
            --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: var(--bg-color-light);
            color: var(--text-color-light);
            line-height: 1.6;
          }

          .app-container {
            min-height: 100vh;
            background-color: var(--bg-color-dark);
          }

          .container {
            width: 100%;
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .main-content {
            padding-top: 5rem;
          }

          /* Header */
          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(17, 24, 39, 0.9);
            backdrop-filter: blur(8px);
            z-index: 50;
            box-shadow: var(--box-shadow);
          }
          
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .header-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
            letter-spacing: 0.025em;
          }

          .header-title a {
            text-decoration: none;
            color: inherit;
          }
          
          .header-nav-desktop {
            display: none;
            gap: 1.5rem;
          }
          
          @media (min-width: 768px) {
            .header-nav-desktop {
              display: flex;
              gap: 2.5rem;
            }
          }
          
          .nav-button {
            color: var(--text-color-light);
            transition: color 0.3s ease;
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            font-size: 1rem;
          }
          
          .nav-button:hover {
            color: white;
          }
          
          .header-menu-button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
          }

          @media (min-width: 768px) {
            .header-menu-button {
              display: none;
            }
          }
          
          .header-nav-mobile-container {
            background-color: rgba(17, 24, 39, 0.95);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease-in-out;
          }
          
          .header-nav-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            gap: 1rem;
          }
          
          .nav-button-mobile {
            color: var(--text-color-light);
            font-size: 1.125rem;
            transition: color 0.3s ease;
            cursor: pointer;
            background: none;
            border: none;
          }
          
          .nav-button-mobile:hover {
            color: white;
          }
          
          /* Hero Section */
          .hero-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          @media (min-width: 768px) {
            .hero-section {
              flex-direction: row;
              text-align: left;
              justify-content: space-between;
            }
          }
          
          .hero-content {
            width: 100%;
          }

          @media (min-width: 768px) {
            .hero-content {
              width: 60%;
            }
          }

          @media (min-width: 1024px) {
            .hero-content {
              width: 50%;
            }
          }

          .hero-title {
            font-size: 2.25rem;
            font-weight: 800;
            color: white;
            margin-bottom: 1rem;
            line-height: 1.25;
          }
          
          @media (min-width: 768px) {
            .hero-title {
              font-size: 3rem;
            }
          }

          @media (min-width: 1024px) {
            .hero-title {
              font-size: 3.75rem;
            }
          }
          
          .hero-name {
            color: var(--accent-blue);
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
            color: var(--text-color-light);
            margin-bottom: 2rem;
            max-width: 32rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          @media (min-width: 768px) {
            .hero-subtitle {
              font-size: 1.25rem;
              margin-left: 0;
              margin-right: 0;
            }
          }
          
          .hero-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          
          @media (min-width: 640px) {
            .hero-buttons {
              flex-direction: row;
            }
          }
          
          @media (min-width: 768px) {
            .hero-buttons {
              justify-content: flex-start;
            }
          }
          
          .button {
            font-weight: bold;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            transition: all 0.3s ease;
            box-shadow: var(--box-shadow);
            text-decoration: none;
            display: flex;
            align-items: center;
            white-space: nowrap;
          }
          
          .button-primary {
            background-color: var(--accent-blue);
            color: white;
          }
          
          .button-primary:hover {
            background-color: var(--accent-blue-dark);
          }
          
          .button-secondary {
            background-color: var(--accent-gray);
            color: white;
          }
          
          .button-secondary:hover {
            background-color: var(--accent-gray-dark);
          }

          .icon-margin {
            margin-right: 0.5rem;
          }
          
          .hero-socials {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            color: var(--text-color-dark);
          }

          @media (min-width: 768px) {
            .hero-socials {
              justify-content: flex-start;
            }
          }
          
          .social-icon {
            color: var(--text-color-light);
            transition: color 0.3s ease;
          }
          
          .social-icon:hover {
            color: white;
          }
          
          .hero-placeholder {
            margin-top: 3rem;
            width: 40%;
            display: flex;
            justify-content: center;
            position: relative;
          }

          @media (min-width: 768px) {
            .hero-placeholder {
              margin-top: 0;
            }
          }

          /* Sections */
          .section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          @media (min-width: 768px) {
            .section {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }
          }

          .section-title {
            font-size: 1.875rem;
            font-weight: 800;
            color: white;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
            z-index: 10;
          }

          @media (min-width: 768px) {
            .section-title {
              font-size: 2.25rem;
            }
          }

          /* About Section */
          .about-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }

          @media (min-width: 1024px) {
            .about-section {
              flex-direction: row;
              justify-content: space-between;
            }
          }

          .about-details-container {
            text-align: center;
            width: 100%;
          }

          @media (min-width: 1024px) {
            .about-details-container {
              width: 50%;
              text-align: left;
            }
          }

          .section-subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .section-subtitle {
              font-size: 1.875rem;
            }
          }

          .section-text {
            color: var(--text-color-light);
            font-size: 1.125rem;
            line-height: 1.6;
          }

          .about-list {
            list-style: none;
            padding: 0;
            font-size: 1.125rem;
            color: var(--text-color-light);
            line-height: 1.6;
            margin-top: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .about-list-label {
            font-weight: 600;
            color: #d1d5db;
          }

          /* Skills Section */
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .skills-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .skills-card {
            background-color: var(--accent-gray-dark);
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--box-shadow);
            transition: box-shadow 0.3s ease;
          }
          
          .skills-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          .skills-category-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
          }

          .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .skill-tag {
            padding: 0.25rem 0.75rem;
            background-color: var(--accent-gray);
            color: var(--text-color-light);
            font-size: 0.875rem;
            border-radius: 9999px;
            font-weight: 500;
          }

          .certifications-list {
            list-style: disc;
            list-style-position: inside;
            padding: 0;
            line-height: 1.5;
            color: var(--text-color-light);
            margin-top: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          /* Projects Section */
          .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .project-card {
            background-color: #111827;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--box-shadow);
            transition: box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .project-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          .project-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
            margin-bottom: 0.5rem;
          }

          .project-description {
            color: var(--text-color-light);
            margin-bottom: 1rem;
            flex-grow: 1;
          }

          .project-tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            padding: 0.25rem 0.75rem;
            background-color: var(--accent-blue);
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            border-radius: 9999px;
          }
          
          .project-links {
            margin-top: auto;
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #374151;
          }

          .project-link {
            color: var(--text-color-light);
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            text-decoration: none;
          }
          
          .project-link:hover {
            color: white;
          }

          /* Contact Section */
          .contact-card {
            background-color: var(--accent-gray-dark);
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: var(--box-shadow);
            text-align: center;
          }

          .contact-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
          }

          .contact-description {
            color: var(--text-color-light);
            margin-bottom: 2rem;
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          @media (min-width: 640px) {
            .contact-details {
              flex-direction: row;
            }
          }

          .contact-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-color-light);
            transition: color 0.3s ease;
            text-decoration: none;
          }

          .contact-link:hover {
            color: white;
          }

          .contact-socials {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
          }

          .social-icon-lg {
            color: var(--text-color-light);
            transition: color 0.3s ease;
          }

          .social-icon-lg:hover {
            color: white;
          }

          /* Footer */
          .footer {
            background-color: #000;
            color: #9ca3af;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            text-align: center;
            font-size: 0.875rem;
          }
          
          .footer-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
        `}
      </style>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Section id="home" className="hero-section-wrapper">
            <Hero />
          </Section>
          <Section id="about" title="About Me" className="about-bg">
            <About />
          </Section>
          <Section id="skills" title="Skills & Certifications" className="skills-bg">
            <Skills />
          </Section>
          <Section id="projects" title="My Projects" className="projects-bg">
            <Projects />
          </Section>
          <Section id="contact" title="Get In Touch" className="contact-bg">
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
