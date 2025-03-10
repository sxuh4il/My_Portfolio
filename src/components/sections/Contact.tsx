
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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-portfolio-accent inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 border border-portfolio-accent/20 bg-portfolio-accent/5">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4 font-heading">Let's Work Together</h2>
          <p className="text-portfolio-secondary text-lg">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-heading">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", content: "hello@example.com" },
                { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Location", content: "San Francisco, CA" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="p-3 bg-portfolio-accent/10 text-portfolio-accent rounded-md">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-primary">{item.title}</h4>
                    <p className="text-portfolio-secondary">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-portfolio-primary mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="p-3 bg-portfolio-accent/10 text-portfolio-accent rounded-md hover:bg-portfolio-accent hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-3 bg-portfolio-accent/10 text-portfolio-accent rounded-md hover:bg-portfolio-accent hover:text-white"
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
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-secondary mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-secondary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-portfolio-primary text-white rounded-md font-semibold flex items-center justify-center space-x-2 shadow-sm hover:shadow-md w-full disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
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
