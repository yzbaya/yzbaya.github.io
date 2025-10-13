import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-4"
          style={{ 
            fontSize: '4rem', 
            fontFamily: 'serif',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Yazidi Ons
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8 text-muted-foreground"
          style={{ fontSize: '1.5rem' }}
        >
          Python Developer | ML Enthusiast | Odoo Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-6 justify-center items-center flex-wrap"
        >
          {[
            { icon: Mail, label: 'ons.yazidi@insat.ucar.tn', href: 'mailto:ons.yazidi@insat.ucar.tn' },
            { icon: Phone, label: '+216 99 844 949', href: 'tel:+21699844949' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ons-yazidi-6b8507219/' },
            { icon: Github, label: 'GitHub', href: 'https://github.com/Ons-Yazidi' },
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <contact.icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.8, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
}
