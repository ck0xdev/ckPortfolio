import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A high-performance, interactive portfolio website built with React and Framer Motion. Features glassmorphism design, smooth animations, and responsive layout.",
      tech: ["React", "Framer Motion", "CSS3"],
      link: "#"
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional online store allowing users to browse products, manage shopping carts, and place orders. Includes an admin dashboard for managing inventory and user data.",
      tech: ["PHP", "MongoDB", "HTML/CSS"],
      link: "https://github.com/ZackDevd/ECommerce-Website-Using-PHP"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="btn-project">View Code</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;