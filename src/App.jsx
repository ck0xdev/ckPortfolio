import React, { useEffect } from 'react';
import Lenis from 'lenis';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certs from './components/Certs';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <div className="noise-overlay"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certs />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '4rem', color: '#888', fontSize: '0.8rem' }}>
        <p>built by chintan. ☻ 2025</p>
      </footer>
    </div>
  );
}

export default App;