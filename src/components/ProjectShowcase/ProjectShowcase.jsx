import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectShowcase.css';
import ProjectModal from '../ProjectModal/ProjectModal';
import StorageImage from '../../hooks/ImageBase';

function ProjectShowcase({
  title,
  description,
  tags,
  imageUrl,
  listUrl,
  liveUrl = "#",
  codeUrl = "#",
  inverted = false,
}) {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  
  const project = { title, description, tags, imageUrl, liveUrl, codeUrl, listUrl };
  

  return (
    
    <>
    
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
              {t("projects.liveDemo")}
            </a>
            <a href={codeUrl} className="project-btn secondary" target="_blank" rel="noopener noreferrer">
              {t("projects.viewCode")}
            </a>
          </div>
        </div>

        <div className="project-image" onClick={() => setModalOpen(true)}>
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <StorageImage filePath={imageUrl} />
          <div className="project-image-overlay">
            <span>{t("projects.click")}</span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default ProjectShowcase;
