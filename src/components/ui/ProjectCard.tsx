
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden relative h-full flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative">
        <div className="image-container aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${isLoaded ? '' : 'loading'}`}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue-dark/80 to-transparent"></div>
        </div>
        
        {project.icon && (
          <div className="absolute top-4 right-4 p-2 rounded-full bg-portfolio-blue-medium">
            {project.icon}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-portfolio-primary mb-2">{project.title}</h3>
        <p className="text-portfolio-secondary mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-portfolio-blue-light/20 text-portfolio-blue-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto border-t border-gray-100">
        <div className="flex space-x-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-blue-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span className="text-sm font-medium">Code Source</span>
            </motion.a>
          )}
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-blue-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Démo Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
