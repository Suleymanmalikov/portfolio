// src/components/Projects.js
import React from "react";
import "./Projects.css"; // We'll create this file next

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project-two",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
