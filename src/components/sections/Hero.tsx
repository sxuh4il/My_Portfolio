
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll down function
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Content container */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-portfolio-accent inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-accent/20 bg-portfolio-accent/5">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-primary tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating <span className="text-portfolio-accent">beautiful</span> digital experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-portfolio-secondary max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a designer and developer focused on crafting clean & user-friendly experiences. I'm passionate about building solutions that are both functional and beautiful.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-md bg-portfolio-primary text-white font-semibold shadow-sm hover:shadow-md hover:translate-y-[-2px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View my work
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity, 
          repeatType: "reverse", 
          repeatDelay: 0.5 
        }}
        onClick={scrollToProjects}
      >
        <ArrowDown className="text-portfolio-accent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
