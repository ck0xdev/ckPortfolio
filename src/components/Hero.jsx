import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <span style={{ 
          background: 'white', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          border: '1px solid #e5e5e5',
          fontSize: '0.9rem',
          fontWeight: '500',
          color: '#555'
        }}>
          ✨ Available for Internship
        </span>
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
        >
            Chintan Kukadiya
        </motion.h1>

        <p>
          I am a <strong>BCA Student</strong> at VNSG University. 
          Passionate about UI/UX design and building responsive, secure web applications.
        </p>

        <div className="hero-btns">
        
        <a href="chintanKukadiya.pdf" download="ChintanKukadiya_Resume.pdf" className="btn btn-primary">
          Download Resume
        </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;