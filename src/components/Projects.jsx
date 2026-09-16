import React, { useState } from 'react';
import { ExternalLink, Award, CheckCircle, Layers, Shield, Terminal, ArrowRight, X, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'architecture', label: 'Arquitectura & Backend' },
    { id: 'security', label: 'Ciberseguridad & Redes' },
    { id: 'devops', label: 'DevOps & Linux' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-dark-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aguamarina-neon/10 border border-aguamarina-neon/30 text-aguamarina-neon text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portafolio Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Proyectos Destacados de <span className="text-gradient-primary">Ingeniería</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Sistemas reales diseñados con rigor arquitectónico, premiados en ferias de innovación y optimizados para entornos de producción.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-aguamarina-neon/20 to-lila-500/20 border border-aguamarina-neon/40 text-white shadow-glow-aqua/20'
                    : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isAqua = project.badgeColor === 'aguamarina';
            const isLila = project.badgeColor === 'lila';

            return (
              <div
                key={project.id}
                className="glass-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Award & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    {project.award ? (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isAqua
                          ? 'bg-aguamarina-neon/15 text-aguamarina-neon border border-aguamarina-neon/30'
                          : isLila
                          ? 'bg-lila-neon/15 text-lila-neon border border-lila-neon/30'
                          : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      }`}>
                        <Award className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{project.award}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">
                        {project.period}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-500">{project.period}</span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-xl font-bold text-white group-hover:text-aguamarina-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                    {project.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 2).map((hl, hlIdx) => (
                      <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isAqua ? 'text-aguamarina-neon' : 'text-lila-neon'}`} />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-dark-950 border border-slate-800 text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-aguamarina-neon hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver detalles y arquitectura</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-dark-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                        title="Ver Repositorio en GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md">
          <div 
            className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-aguamarina-neon">{selectedProject.period}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedProject.title}</h3>
                <p className="text-xs text-slate-400">{selectedProject.role}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm text-slate-300">
              {selectedProject.award && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-aguamarina-neon/15 text-aguamarina-neon border border-aguamarina-neon/30 text-xs font-semibold">
                  <Award className="w-4 h-4" />
                  <span>{selectedProject.award}</span>
                </div>
              )}

              <p className="leading-relaxed text-sm">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-2.5">
                  Decisiones de Arquitectura & Hitos Técnicos:
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-dark-950/70 border border-slate-800/80 text-xs">
                      <CheckCircle className="w-4 h-4 text-aguamarina-neon flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-2">
                  Tecnologías & Herramientas:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-dark-950 border border-slate-800 text-aguamarina-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-aguamarina-neon to-cyan-300 hover:opacity-95"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Ver en GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : <div />}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white bg-dark-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
