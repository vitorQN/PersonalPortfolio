import { useEffect ,useState } from 'react'
import profileimg from './assets/profileImage.png';
import ProjectShowcase from './components/ProjectShowcase';
import SkillCategory from './components/SkillCategory';
import './App.css';

import {
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  ViteIcon,
  GitIcon,
  FigmaIcon,
  VSCodeIcon,
  FramerIcon,
  JavaIcon,
  MavenIcon,
  PostmanIcon,
  SpringBootIcon,
} from './components/Icons';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span>Vitor Queiroz</span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="cta-button">Let's Talk</a>
        </div>
      </nav>

      {/* Hero Section - Two Column Layout */}
      <section className="hero">
        <div className="hero-container">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="badge">Open to new opportunities</div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Vitor Queiroz</span>
            </h1>
            
            <p className="hero-subtitle">
              Fullstack Developer crafting fast, safe, and delightful web experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View My Projects</a>
              <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
                GitHub →
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="hero-image">
            <img 
              src={profileimg} 
              alt="Your Profile" 
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="about-text">
          I am a Fullstack Developer with experience building applications using Java, Spring, and JavaScript.
          I focus on creating scalable solutions, writing clean code, and following best development practices.
          On the backend, I work with Java and Spring Boot, developing REST APIs and well-structured applications with an emphasis on performance and solid architecture.
           On the frontend, I use JavaScript to build dynamic and functional user interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2>Tools & Technologies</h2>
        <div className="skills-grid">
          <SkillCategory 
            title="Languages" 
            skills={[
              { name: "JavaScript", icon: <JavaScriptIcon /> },
              { name: "Java", icon: <JavaIcon /> },
              { name: "HTML", icon: <HtmlIcon /> },
              { name: "CSS", icon: <CssIcon /> },
            ]} 
          />

          <SkillCategory 
            title="Frameworks & Libraries" 
            skills={[
              { name: "React", icon: <ReactIcon /> },
              { name: "Vite", icon: <ViteIcon /> },
              { name: "Spring Boot", icon: <SpringBootIcon /> },
            ]} 
          />

          <SkillCategory 
            title="Tools" 
            skills={[
              { name: "Git", icon: <GitIcon /> },
              { name: "Maven", icon: <MavenIcon /> },
              { name: "Postman", icon: <PostmanIcon /> },
              { name: "Figma", icon: <FigmaIcon /> },
              { name: "VS Code", icon: <VSCodeIcon /> },
            ]} 
          />
        </div>
      </section>

      {/* Hero */}
      <section className="hero-overlay">
        <div className="hero-bg"></div>
        
        <div className="hero-content-overlay">
          <div className="hero-badge">Open to new opportunities</div>
          
          <h1 className="hero-title-overlay">
            Coding like a <span className="highlight">Coder</span>
          </h1>
          
          <p className="hero-subtitle-overlay">
            Fullstack Developer
          </p>

          <div className="hero-buttons-overlay">
            <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <ProjectShowcase
          title="Ecommerce Platform"
          description="Full-featured modern ecommerce solution with cart, payments, and admin dashboard."
          tags={["React", "TypeScript", "Stripe", "Vite"]}
          imageUrl="https://picsum.photos/id/1015/600/400"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project1"
        />

        <ProjectShowcase
          title="Analytics Dashboard"
          description="Real-time data visualization dashboard with beautiful charts and smooth animations."
          tags={["Next.js", "Recharts", "Framer Motion"]}
          imageUrl="https://picsum.photos/id/106/600/400"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project2"
          inverted={true}
        />

        <ProjectShowcase
          title="Marketing Landing Page"
          description="High-performance landing page with excellent Lighthouse scores and modern design."
          tags={["Vite", "React", "GSAP"]}
          imageUrl="https://picsum.photos/id/201/600/400"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project3"
        />
      </section>

      
      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Let's Work Together</h2>
        <p className="contact-text">I'm always excited to collaborate on interesting projects.</p>
        <a href="mailto:vitor.qn2004@gmail.com" className="contact-btn">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            © 2026 Vitor Queiroz • Built with React & Vite
          </div>
          <div className="footer-contact">
            <a href="mailto:vitor.qn2004@gmail.com">Email</a>
            <a href="https://github.com/vitorQN" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;