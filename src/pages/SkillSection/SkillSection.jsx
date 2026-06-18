import { useTranslation } from 'react-i18next';
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
  JavaIcon,
  MavenIcon,
  PostmanIcon,
  SpringBootIcon,
} from '../../components/SkillCategory/Icons';

function SkillSection() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="section skills">
            <h2>{t("skills.title")}</h2>
            <div className="skills-grid">
                <SkillCategory
                    title={t("skills.categories.languages")}
                    skills={[
                        { name: "JavaScript", icon: <JavaScriptIcon /> },
                        { name: "Java", icon: <JavaIcon /> },
                        { name: "HTML", icon: <HtmlIcon /> },
                        { name: "CSS", icon: <CssIcon /> },
                    ]}
                />

                <SkillCategory
                    title={t("skills.categories.frameworks")}
                    skills={[
                        { name: "React", icon: <ReactIcon /> },
                        { name: "Vite", icon: <ViteIcon /> },
                        { name: "Spring Boot", icon: <SpringBootIcon /> },
                    ]}
                />

                <SkillCategory
                    title={t("skills.categories.tools")}
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
