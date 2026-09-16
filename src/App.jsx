import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-aguamarina-neon selection:text-dark-950 bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Specializations />
        <Projects />
        <TechStack />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Selection & Download Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
