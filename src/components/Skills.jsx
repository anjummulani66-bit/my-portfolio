import React from "react";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React.js", "Bootstrap", "Git",
    "GitHub", "Responsive Design"
  ];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;