import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: "FAD Sales Forecast",
    description: "A machine learning sales forecasting system using XGBoost with hyperparameter optimization through Optuna. Built with Python and Flask for client/server architecture.",
    tech: ["Python", "XGBoost", "Optuna", "Flask", "Pandas", "NumPy"],
    metrics: "RMSE: 1254.86 | R²: 0.941",
    github: "https://github.com/Ons-Yazidi/FAD_Sales_Forecast",
    image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2MDMwMTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "CityGo",
    description: "A comprehensive online car rental management application with booking system, vehicle tracking, and user management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Ons-Yazidi/CityGo",
    image: "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDM1NzM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "API Jumia",
    description: "A phone listing scraper with intelligent filtering system that extracts and organizes product data from Jumia marketplace.",
    tech: ["Python", "Web Scraping", "API Design", "Data Processing"],
    github: "https://github.com/Ons-Yazidi/API_Jumia",
    image: "https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzYwMzUzODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Odoo Manufacturing Module",
    description: "Custom Odoo module for automatic scheduling of manufacturing orders based on multiple criteria including priority, deadlines, and resource availability.",
    tech: ["Python", "Odoo", "PostgreSQL", "XML"],
    image: "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDM1NzM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
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
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <motion.div
                className="bg-card border border-border rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#d4af37',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-primary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                        style={{ fontSize: '0.875rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                        style={{ fontSize: '0.875rem' }}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {project.metrics && (
                    <p className="text-sm text-accent">{project.metrics}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-primary rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 60px rgba(212, 175, 55, 0.4)',
              }}
            >
              <div className="relative">
                <ImageWithFallback
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-primary mb-4">{projects[selectedProject].title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {projects[selectedProject].description}
                </p>

                {projects[selectedProject].metrics && (
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-primary">{projects[selectedProject].metrics}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {projects[selectedProject].github && (
                    <motion.a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                  )}
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
