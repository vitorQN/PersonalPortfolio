import './Projects.css';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';



function Projects() {
    return (
        <section id="projects" className="section projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <ProjectShowcase
          title="Ecommerce Platform"
          description="Full-featured modern ecommerce solution with cart, payments, and admin dashboard."
          tags={["React", "TypeScript", "Stripe", "Vite"]}
          imageUrl="fototest.jpeg"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project1"
        />

        <ProjectShowcase
          title="Analytics Dashboard"
          description="Real-time data visualization dashboard with beautiful charts and smooth animations."
          tags={["Next.js", "Recharts", "Framer Motion"]}
          imageUrl="fototest.jpeg"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project2"
          inverted={true}
        />

        <ProjectShowcase
          title="Marketing Landing Page"
          description="High-performance landing page with excellent Lighthouse scores and modern design."
          tags={["Vite", "React", "GSAP"]}
          imageUrl="fototest.jpeg"
          liveUrl="#"
          codeUrl="https://github.com/yourusername/project3"
        />
      </section>
    )
}

export default Projects;