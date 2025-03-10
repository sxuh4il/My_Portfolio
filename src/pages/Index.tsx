
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const Index = () => {
  // Smooth scroll setup
  useEffect(() => {
    // Add smooth scrolling behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>

        <footer className="bg-portfolio-blue-darker py-10 text-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-2">
              © {new Date().getFullYear()} Bouri Souhail. Tous droits réservés.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a 
                href="https://github.com/sxuh4il" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue-light transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://linkedin.com/in/souhail bouri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue-light transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a 
                href="mailto:bourisouhail5@gmail.com"
                className="hover:text-portfolio-blue-light transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
