
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from '../ui/ProjectCard';
import { Brain, BarChart, School } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Agents IA autonomes pour l'automatisation des processus (RPA)",
    description: "Développement d'agents IA autonomes pour automatiser des processus métier. Utilisation de techniques d'apprentissage par renforcement pour créer des agents capables d'exécuter des tâches complexes.",
    image: "https://images.unsplash.com/photo-1677442135968-6ab6048783d8?q=80&w=1932&auto=format&fit=crop",
    technologies: ["Python", "Pandas", "Gemini", "Langchain"],
    githubUrl: "https://github.com/sxuh4il",
    icon: <Brain className="text-white" size={24} />,
  },
  {
    id: 2,
    title: "Analyse des sentiments des Airlines Tweets",
    description: "Application d'analyse de sentiments sur les tweets concernant les compagnies aériennes. Utilisation de techniques de NLP pour extraire et analyser les opinions des utilisateurs.",
    image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2034&auto=format&fit=crop",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    githubUrl: "https://github.com/sxuh4il",
    icon: <BarChart className="text-white" size={24} />,
  },
  {
    id: 3,
    title: "Portail décisionnel pour la gestion et le suivi des étudiants",
    description: "Système de gestion éducative offrant des tableaux de bord analytiques pour le suivi des performances des étudiants et l'aide à la prise de décision pour les administrateurs.",
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1770&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/sxuh4il",
    icon: <School className="text-white" size={24} />,
  },
  {
    id: 4,
    title: "Application web de gestion des titres d'annulation",
    description: "Développée lors d'un stage technique à la direction préfectoral des impôts à Meknès. Permet la gestion efficace des titres d'annulation dans le système fiscal.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1771&auto=format&fit=crop",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    githubUrl: "https://github.com/sxuh4il",
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
          <span className="text-portfolio-blue-medium inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-blue-medium/20 bg-portfolio-blue-medium/5">
            Mes Projets
          </span>
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4 font-heading">Projets Personnels</h2>
          <p className="text-portfolio-secondary text-lg">
            Une collection de projets qui illustrent mes compétences et ma passion pour l'intelligence artificielle, 
            l'analyse de données et le développement web.
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
