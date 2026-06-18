import { useTranslation } from 'react-i18next';
import './Projects.css';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';

function Projects() {
    const { t } = useTranslation();
    const projectItems = t("projects.items", { returnObjects: true });

    return (
        <section id="projects" className="section projects">
        <div className="section-header">
          <h2>{t("projects.title")}</h2>
          <p className="section-subtitle">{t("projects.subtitle")}</p>
        </div>

        {projectItems.map((project, index) => (
          <ProjectShowcase
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl="fototest.jpeg"
            listUrl={["fototest.jpeg","fototest2.jpeg","fototest3.jpeg"]}
            liveUrl="#"
            codeUrl={`https://github.com/yourusername/project${index + 1}`}
            inverted={index === 1}
          />
        ))}
      </section>
    )
}

export default Projects;
