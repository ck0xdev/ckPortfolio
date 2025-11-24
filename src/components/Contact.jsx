import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        
        {/* LEFT SIDE: Contact Info */}
        <div className="contact-info">
          <h3>Let's Talk</h3>
          <p>I'm currently open to internship opportunities.</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <FaEnvelope style={{ color: '#8b5cf6' }}/>
            <span>kuk************026@gmail.com</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaPhoneAlt style={{ color: '#8b5cf6' }}/>
            <span>+91 82380 *****</span>
          </div>
        </div>

        {/* RIGHT SIDE: Functional Form */}
        <form 
          /* This link sends the data to your email via FormSubmit */
          action="https://formsubmit.co/kuakdiyachintan026@gmail.com" 
          method="POST" 
          className="contact-form"
        >
          {/* Hidden Settings for FormSubmit */}
          <input type="text" name="_honey" style={{ display: 'none' }} /> {/* Spam protection */}
          <input type="hidden" name="_captcha" value="false" /> {/* Disable captcha for cleaner look */}
          
          {/* IMPORTANT: Update this value to your Vercel link once deployed */}
          <input type="hidden" name="_next" value="https://ckportfolio.vercel.app/" />

          {/* Input Fields with 'name' attributes added */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;