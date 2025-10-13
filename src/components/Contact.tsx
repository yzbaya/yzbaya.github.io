import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
          style={{
            fontSize: '3rem',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-primary mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in hearing about new opportunities, collaborations, or just a friendly chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:ons.yazidi@insat.ucar.tn"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                whileHover={{ x: 10, boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="text-foreground">ons.yazidi@insat.ucar.tn</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+21699844949"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                whileHover={{ x: 10, boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="text-foreground">+216 99 844 949</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
                whileHover={{ x: 10, boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' }}
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground">Tunis, Tunisia</p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://www.linkedin.com/in/ons-yazidi-6b8507219/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                href="https://github.com/Ons-Yazidi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="name" className="block mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-input-background border-border focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="email" className="block mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-input-background border-border focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="block mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-input-background border-border focus:border-primary transition-colors min-h-[150px]"
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
