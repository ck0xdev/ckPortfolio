import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "Python", icon: <FaPython />, color: "#4B8BBE" },
    { name: "PHP", icon: <FaPhp />, color: "#787CB5" },
    { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }} 
          >
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;