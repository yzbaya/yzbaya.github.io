import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Flask", level: 85 },
      { name: "Angular", level: 75 },
      { name: "Flutter", level: 70 },
      { name: "Odoo", level: 85 },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "XGBoost", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Optuna", level: 75 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "PyCharm", level: 85 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
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
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-primary mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground/90">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        style={{
                          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Critical Thinking'].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#d4af37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-foreground/80">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
