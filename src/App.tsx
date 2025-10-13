import { ParticleBackground } from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            Designed & Built by Yazidi Ons
          </p>
          <p className="text-muted-foreground">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
