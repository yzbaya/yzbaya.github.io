import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, Code, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "FAD Freelance",
    period: "July 2024 - October 2024",
    location: "Remote",
    description: "Developed a sales forecasting model using XGBoost with hyperparameter tuning via Optuna.",
    achievements: [
      "Achieved RMSE of 1254.86 and R² of 0.941",
      "Implemented heuristic algorithms for order prioritization",
      "Built client/server architecture with Python and Flask",
    ],
    icon: TrendingUp,
    color: "#d4af37",
  },
  {
    title: "Odoo Developer Intern",
    company: "Warzeez",
    period: "February 2024 - June 2024",
    location: "Tunis",
    description: "Designed and implemented an Odoo module for automatic scheduling of manufacturing orders.",
    achievements: [
      "Created scheduling system based on multiple criteria",
      "Integrated with existing Odoo workflows",
      "Improved manufacturing efficiency",
    ],
    icon: Code,
    color: "#d4af37",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Booster BC",
    period: "July 2023 - August 2023",
    location: "Nabeul",
    description: "Developed CityGo, an online car rental management application.",
    achievements: [
      "Built with React.js, Node.js, and MongoDB",
      "Implemented complete booking system",
      "Created responsive user interface",
    ],
    icon: Briefcase,
    color: "#d4af37",
  },
  {
    title: "Marketing & Business Development Intern",
    company: "GAO RFID Inc.",
    period: "July 2023 - September 2023",
    location: "Toronto (Remote)",
    description: "Participated in identifying business opportunities and market analysis.",
    achievements: [
      "Conducted market research",
      "Identified new business opportunities",
      "Collaborated with international team",
    ],
    icon: Briefcase,
    color: "#d4af37",
  },
  {
    title: "Web Development Intern",
    company: "ANGED",
    period: "July 2022",
    location: "Tunis",
    description: "Created a static website for the organization.",
    achievements: [
      "Designed responsive layouts",
      "Implemented modern web standards",
      "First professional web development experience",
    ],
    icon: Code,
    color: "#d4af37",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const current = experiences[currentIndex];
  const Icon = current.icon;

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
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
          Professional Experience
        </motion.h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
            style={{
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.15)',
            }}
          >
            <div className="flex items-start gap-6 mb-6">
              <motion.div
                className="p-4 bg-primary/10 rounded-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-primary mb-2">{current.title}</h3>
                <p className="mb-2">{current.company}</p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{current.period}</span>
                  <span>•</span>
                  <span>{current.location}</span>
                </div>
              </div>
            </div>

            <p className="mb-6 text-muted-foreground leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-3">
              {current.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={previous}
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
