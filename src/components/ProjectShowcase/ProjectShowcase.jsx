import './ProjectShowcase.css';

function ProjectShowcase({
  title,
  description,
  tags,
  imageUrl,
  liveUrl = "#",
  codeUrl = "#",
  inverted = false,
}) {
  return (
    <div className={`project-showcase ${inverted ? 'inverted' : ''}`}>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={liveUrl} className="project-btn primary" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={codeUrl} className="project-btn secondary" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>

      <div className="project-image">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
}

export default ProjectShowcase;