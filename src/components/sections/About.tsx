
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Layout, Box } from 'lucide-react';

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", 
  "HTML/CSS", "Tailwind CSS", "UI/UX Design", "Figma",
  "Next.js", "GraphQL", "REST APIs", "Responsive Design"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-portfolio-accent inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-accent/20 bg-portfolio-accent/5">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-portfolio-primary mb-6 font-heading">
              Passionate about creating impactful digital solutions
            </h2>
            <p className="text-portfolio-secondary mb-6">
              I'm a full-stack developer with expertise in creating user-centric, accessible, and responsive web applications. With a strong foundation in both frontend and backend technologies, I develop seamless experiences that solve real-world problems.
            </p>
            <p className="text-portfolio-secondary mb-8">
              My approach combines technical excellence with design thinking. I believe that great products come from understanding user needs and implementing elegant solutions. I'm constantly exploring new technologies to enhance my skillset.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Development", icon: Code, description: "Building clean, efficient code" },
                { title: "Design", icon: Layout, description: "Creating intuitive interfaces" },
                { title: "Projects", icon: Box, description: "Delivering complete solutions" },
                { title: "Experience", icon: Briefcase, description: "Years of industry expertise" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-2 bg-portfolio-accent/10 text-portfolio-accent rounded-md">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-primary">{item.title}</h3>
                    <p className="text-sm text-portfolio-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-heading">Skills & Expertise</h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-portfolio-secondary border border-gray-200 text-sm font-medium"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
