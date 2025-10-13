import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Master's Degree",
    field: "Embedded and Mobile Systems",
    institution: "National Institute of Applied Sciences and Technology (INSAT)",
    period: "September 2024 - Present",
    location: "Tunis",
  },
  {
    degree: "Bachelor's Degree",
    field: "Information Systems",
    institution: "National Institute of Applied Sciences and Technology (INSAT)",
    period: "September 2021 - June 2024",
    location: "Tunis",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="mb-12 text-center"
            style={{
              fontSize: '3rem',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Education & Background
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background"
                    whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' }}
                  />

                  <motion.div
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {index === 0 ? (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        ) : (
                          <Award className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-primary mb-2">{item.degree}</h3>
                        <p className="mb-2">{item.field}</p>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate developer with expertise in Python, machine learning, and full-stack development. 
              Experienced in building scalable ERP solutions with Odoo and creating intelligent systems that solve real-world problems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
