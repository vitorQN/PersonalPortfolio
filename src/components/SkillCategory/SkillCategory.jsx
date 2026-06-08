import './SkillCategory.css';

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index}>
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;