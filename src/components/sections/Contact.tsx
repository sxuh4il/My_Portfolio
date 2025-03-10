
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé avec succès !",
        description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-blue-darker text-white">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-portfolio-blue-light inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-blue-light/20 bg-portfolio-blue-light/5">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-white mb-4 font-heading">Travaillons Ensemble</h2>
          <p className="text-white/80 text-lg">
            Vous avez un projet en tête ou souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter !
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 bg-portfolio-blue-dark p-8 rounded-2xl shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Informations de Contact</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="p-3 bg-portfolio-blue-medium/30 text-portfolio-blue-light rounded-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white/80">bourisouhail5@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="p-3 bg-portfolio-blue-medium/30 text-portfolio-blue-light rounded-md">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Téléphone</h4>
                  <p className="text-white/80">+212 693249373</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="p-3 bg-portfolio-blue-medium/30 text-portfolio-blue-light rounded-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Adresse</h4>
                  <p className="text-white/80">zahwa ain maaza, meknes, Maroc</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Retrouvez-moi</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/sxuh4il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-blue-medium/30 text-portfolio-blue-light rounded-md hover:bg-portfolio-blue-medium hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/souhail bouri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-blue-medium/30 text-portfolio-blue-light rounded-md hover:bg-portfolio-blue-medium hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-secondary mb-2">
                  Votre Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-secondary mb-2">
                  Votre Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-secondary mb-2">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-blue-medium focus:ring-1 focus:ring-portfolio-blue-medium outline-none transition-all"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-portfolio-blue-medium text-white rounded-md font-semibold flex items-center justify-center space-x-2 shadow-sm hover:shadow-md w-full disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Envoyer Message</span>
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Send size={18} />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
