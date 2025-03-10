
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
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
      {/* Background avec gradient bleu */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-blue-medium to-portfolio-blue-dark"></div>
      
      {/* Content container */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-white/20 bg-white/5">
                AI Engineering Student
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bouri <span className="text-portfolio-blue-light">Souhail</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI Engineering Student at <span className="font-semibold">ENIADB</span> - École Nationale d'Intelligence Artificielle et du Digital. Passionné par l'intelligence artificielle et le développement web.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Mail size={18} className="text-portfolio-blue-light" />
                <span>bourisouhail5@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-white/90">
                <Phone size={18} className="text-portfolio-blue-light" />
                <span>+212 693249373</span>
              </div>
              
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={18} className="text-portfolio-blue-light" />
                <span>zahwa ain maaza, meknes, Maroc</span>
              </div>
              
              <div className="flex items-center gap-2 text-white/90">
                <Github size={18} className="text-portfolio-blue-light" />
                <a href="https://github.com/sxuh4il" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue-light transition-colors">
                  github.com/sxuh4il
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-white/90">
                <Linkedin size={18} className="text-portfolio-blue-light" />
                <a href="https://linkedin.com/in/souhail bouri" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue-light transition-colors">
                  linkedin.com/in/souhail bouri
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-md bg-white text-portfolio-blue-dark font-semibold shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir mes projets
              </motion.button>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold shadow-sm hover:bg-white/10 hover:shadow-md hover:translate-y-[-2px] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </div>
          
          {/* Profile Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img 
                src="/lovable-uploads/profile.png" 
                alt="Bouri Souhail" 
                className="w-full h-full object-cover"
              />
            </div>
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
        <ArrowDown className="text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
