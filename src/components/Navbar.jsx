import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Terminal, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'specializations', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#about', id: 'about' },
    { name: 'Especialidades', href: '#specializations', id: 'specializations' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Habilidades', href: '#skills', id: 'skills' },
    { name: 'Educación', href: '#education', id: 'education' },
    { name: 'Certificados', href: '#certifications', id: 'certifications' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-dark-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-aguamarina-500/20 to-lila-500/20 border border-aguamarina-neon/40 flex items-center justify-center group-hover:border-lila-400 transition-all duration-300 shadow-glow-aqua/30">
              <Terminal className="w-5 h-5 text-aguamarina-neon group-hover:text-lila-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <div className="font-display font-bold text-lg tracking-wide text-white flex items-center gap-1.5">
                <span>Roger</span>
                <span className="text-aguamarina-neon">.dev</span>
                <span className="inline-block w-2 h-2 rounded-full bg-aguamarina-neon animate-pulse"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                @SrDark04
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md border border-slate-800/80 rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-aguamarina-neon/20 to-lila-500/20 border border-aguamarina-neon/30 text-aguamarina-300 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social icons */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-aguamarina-neon hover:bg-dark-850 border border-transparent hover:border-slate-700 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-lila-300 hover:bg-dark-850 border border-transparent hover:border-slate-700 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* CV Modal Trigger */}
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-dark-950 bg-gradient-to-r from-aguamarina-neon via-cyan-300 to-lila-neon hover:opacity-95 transition-all shadow-glow-aqua/30 hover:shadow-glow-combo active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-dark-950 bg-aguamarina-neon"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-850 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-dark-800 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-aguamarina-neon hover:bg-dark-900 border border-transparent hover:border-dark-800 transition-all"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-3 flex gap-2 border-t border-dark-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-dark-950 bg-gradient-to-r from-aguamarina-neon to-lila-neon shadow-glow-aqua/20"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV (3 Versiones)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
