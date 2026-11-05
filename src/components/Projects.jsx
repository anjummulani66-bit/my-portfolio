import React from "react";

const projects = [
  {
    name: "BiteBox",
    description: "Online food ordering website.",
    tech: "HTML, CSS, JavaScript, Bootstrap"
  },
  {
    name: "ShopKart",
    description: "E-commerce website with product listing.",
    tech: "React, CSS, Bootstrap"
  },
  {
    name: "Online Bus Booking",
    description: "A bus booking application.",
    tech: "React, JavaScript"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;