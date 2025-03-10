
import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Award, Languages, HeartHandshake } from 'lucide-react';

const skills = [
  "PYTHON", "NUMPY", "PANDAS", "PyTorch",
  "Matplotlib", "TensorFlow", "Scikit-Learn", "tkinter",
  "SQL / PLSQL", "HTML", "CSS", "JS",
  "PHP", "REACT", "GIT", "Langchain"
];

const languages = [
  { name: "Anglais", level: "Professional Working Proficiency" },
  { name: "Français", level: "Professional Working Proficiency" },
  { name: "Arabique", level: "Native or Bilingual Proficiency" },
  { name: "Spain", level: "Limited Working Proficiency" },
];

const interests = ["FootBall", "Problem Solving", "solving puzzles", "Chess"];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-portfolio-blue-medium inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-blue-medium/20 bg-portfolio-blue-medium/5">
              À propos de moi
            </span>
            <h2 className="text-4xl font-bold text-portfolio-primary mb-6 font-heading">
              Passionné par l'intelligence artificielle et la résolution de problèmes
            </h2>
            
            <div className="space-y-6 text-portfolio-secondary">
              <p>
                Je suis un étudiant en ingénierie IA à l'École Nationale d'Intelligence Artificielle et du Digital (ENIAD). 
                Je me spécialise dans le développement de solutions basées sur l'IA, avec une expertise particulière en Python, 
                frameworks d'apprentissage automatique, et développement web.
              </p>
              <p>
                Mon parcours académique et mes projets personnels m'ont permis de développer une solide 
                compréhension des concepts d'IA et comment les appliquer à des problèmes du monde réel. 
                Je suis toujours à la recherche de nouveaux défis et opportunités d'apprentissage.
              </p>
            </div>
            
            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-portfolio-primary font-heading flex items-center gap-2">
                <Languages size={20} className="text-portfolio-blue-medium" />
                Langues
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-portfolio-primary">{language.name}</div>
                    <div className="text-sm text-portfolio-secondary">{language.level}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-portfolio-primary font-heading flex items-center gap-2">
                <HeartHandshake size={20} className="text-portfolio-blue-medium" />
                Centres d'intérêt
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="bg-gray-50 px-4 py-2 rounded-full text-portfolio-primary text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Education & Skills */}
          <motion.div
            className="lg:col-span-7 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-heading flex items-center gap-2">
                <GraduationCap size={24} className="text-portfolio-blue-medium" />
                Éducation
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="bg-gray-50 p-6 rounded-xl border-l-4 border-portfolio-blue-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-portfolio-primary">Intelligence Artificiel</h4>
                      <p className="text-portfolio-secondary">École Nationale d'Intelligence Artificielle et du Digital (ENIAD)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-portfolio-blue-medium font-medium">BERKANE</span>
                      <p className="text-sm text-portfolio-secondary">09/2024 - Present</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 p-6 rounded-xl border-l-4 border-portfolio-blue-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-portfolio-primary">Informatique décisionnelle</h4>
                      <p className="text-portfolio-secondary">École supérieure de technologie de Fès (ESTF)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-portfolio-blue-medium font-medium">FES</span>
                      <p className="text-sm text-portfolio-secondary">09/2021 - 06/2023</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-heading flex items-center gap-2">
                <Code size={24} className="text-portfolio-blue-medium" />
                Compétences & Technologies
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-portfolio-primary border border-gray-200 text-sm font-medium shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-heading flex items-center gap-2">
                <Award size={24} className="text-portfolio-blue-medium" />
                Certifications
              </h3>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-portfolio-blue-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-portfolio-primary">Data Science Orientation By IBM</h4>
                <p className="text-portfolio-secondary">04/2024 - 07/2024</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
