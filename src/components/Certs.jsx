import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certs = () => {
  return (
    <section id="certs" className="certs-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-container">
        <motion.div 
          className="cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cert-icon">
            <FaAward />
          </div>
          <div className="cert-info">
            <h3>Deloitte Cyber Job Simulation</h3>
            <p className="issuer">Issued by Deloitte • November 2025</p>
            <p className="description">
              Completed practical tasks in Cyber Security, including analysing potential threats and understanding secure coding practices.
            </p>
          </div>

          <a 
            href="Deloitte - Cyber Certificate.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-verify"
            style={{ marginTop: 'auto', alignSelf: 'center' }} // Ensures vertical alignment
          >
            Show Certificate <FaExternalLinkAlt style={{ marginLeft: '8px', fontSize: '0.8rem' }}/>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Certs;