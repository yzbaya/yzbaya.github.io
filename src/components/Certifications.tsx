import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';

const certifications = [
  {
    title: "Google Developer Clubs Member",
    organization: "Google",
    date: "2024",
    icon: Star,
    color: "#d4af37",
  },
  {
    title: "NASA Space Apps Challenge",
    organization: "NASA",
    date: "2024",
    description: "Galactic problem solver",
    icon: Sparkles,
    color: "#d4af37",
  },
  {
    title: "Tunisian Developers Hackathon",
    organization: "National Competition",
    date: "2024",
    description: "Nabeul Innovator - First Place",
    icon: Trophy,
    color: "#d4af37",
  },
  {
    title: "Python Development",
    organization: "Professional Certification",
    date: "2023",
    icon: Award,
    color: "#d4af37",
  },
  {
    title: "Machine Learning Specialization",
    organization: "Online Course",
    date: "2023",
    icon: Award,
    color: "#d4af37",
  },
  {
    title: "Full-Stack Web Development",
    organization: "Professional Certification",
    date: "2023",
    icon: Award,
    color: "#d4af37",
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full" ref={ref}>
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
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="bg-card border border-border rounded-xl p-6 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    borderColor: '#d4af37',
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1.5 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-center mb-2 text-primary">{cert.title}</h3>
                  <p className="text-center text-muted-foreground mb-2">
                    {cert.organization}
                  </p>
                  {cert.description && (
                    <p className="text-center text-foreground/70 mb-2">
                      {cert.description}
                    </p>
                  )}
                  <p className="text-center text-sm text-muted-foreground">{cert.date}</p>

                  {/* Medal ribbon effect */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Trophy className="w-5 h-5 text-primary" />
            <p className="text-foreground/80">
              Continuously learning and earning new certifications
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
