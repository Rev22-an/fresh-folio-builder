
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export interface Project {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  link: string;
}

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    const savedCertificates = localStorage.getItem('portfolio-certificates');
    
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    
    if (savedCertificates) {
      setCertificates(JSON.parse(savedCertificates));
    }

    // Add a small delay to ensure animations work properly
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio-certificates', JSON.stringify(certificates));
  }, [certificates]);

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const deleteCertificate = (id: string) => {
    setCertificates(certificates.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-gradient">
      <div className="opacity-0 animate-fade-in" style={{animationDelay: '0s', animationDuration: '0.8s'}}>
        <Navigation />
      </div>
      <main className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects 
          projects={projects} 
          onDeleteProject={deleteProject}
        />
        <Certificates 
          certificates={certificates}
          onDeleteCertificate={deleteCertificate}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
