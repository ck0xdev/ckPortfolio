import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      
      <motion.div 
        className="contact-card-centered"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Ready to hire?</h2>
        <p>
          I am currently actively looking for <strong>Internship opportunities</strong> as a Front-End Developer. 
          If you have an open role or just want to discuss a project, my inbox is always open.
        </p>

        {/* The Big Email Button */}
        <a href="mailto:kukadiyachintan026@gmail.com" className="email-cta">
          <div className="icon-box">
            <FaEnvelope />
          </div>
          <div className="email-text">
            <span>Drop me an email at</span>
            <strong>kukadiyachintan026@gmail.com</strong>
          </div>
          <div className="arrow-box">
             <FaPaperPlane />
          </div>
        </a>

      </motion.div>
    </section>
  );
};

export default Contact;