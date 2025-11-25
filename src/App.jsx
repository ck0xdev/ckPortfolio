import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Import Resume component if you included it in App.jsx previously.
// const Resume = lazy(() => import('./components/Resume')); 

// Lazy load the components below the Hero section
const LazySkills = lazy(() => import('./components/Skills'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyCerts = lazy(() => import('./components/Certs'));
const LazyContact = lazy(() => import('./components/Contact'));

function App() {
  
  // --- SMOOTH SCROLL SETUP ---
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

      {/* These critical components load instantly */}
      <Navbar />
      <Hero /> 
      
      {/* Non-critical components load only when needed or just after the page is interactive */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '5rem', color: '#888' }}>Loading Content...</div>}>
          {/* <Resume /> if you added the resume section */}
          <LazySkills />
          <LazyProjects />
          <LazyCerts />
          <LazyContact />
      </Suspense>
      
      <footer style={{ textAlign: 'center', padding: '4rem', color: '#888', fontSize: '0.8rem' }}>
        <p>built by chintan. ☻ 2025</p>
      </footer>
    </div>
  );
}

export default App;