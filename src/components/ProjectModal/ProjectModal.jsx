
import { useEffect } from 'react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

        {/* Image */}
        <div className="modal-images">
          <img src={project.imageUrl} alt={project.title} className="modal-image" />

          <div className="modal-image-wrap">
            <img src={project.imageUrl} alt={project.title} className="modal-image" />
            <img src={project.imageUrl} alt={project.title} className="modal-image" />
          </div>
        </div>



        {/* Content */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          {/* Tags */}
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="modal-actions">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-primary">
                Live Demo →
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-secondary">
                View Code
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;