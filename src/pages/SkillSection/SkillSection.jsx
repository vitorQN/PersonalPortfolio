import SkillCategory from '../../components/SkillCategory/SkillCategory';
import './SkillSection.css';

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
} from '../../components/SkillCategory/Icons';



function SkillSection() {
    return (
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
    )
}

export default SkillSection;