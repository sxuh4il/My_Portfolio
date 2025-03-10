
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from '../ui/ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with a sleek UI and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking financial data with real-time updates.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Travel App",
    description: "A travel companion app that helps users discover and plan their perfect trip.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["React Native", "GraphQL", "AWS", "Mapbox"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Tool that leverages AI to generate high-quality content for various purposes.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
    githubUrl: "#",
    liveUrl: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-portfolio-accent inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-accent/20 bg-portfolio-accent/5">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4 font-heading">Featured Projects</h2>
          <p className="text-portfolio-secondary text-lg">
            A collection of projects that showcase my skills and passion for creating elegant, user-focused digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
