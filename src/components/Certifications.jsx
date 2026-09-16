import React, { useState } from 'react';
import { Award, FileText, ExternalLink, Download, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [filter, setFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'Todos' },
    { id: 'premio', label: 'Premios & Concursos' },
    { id: 'desarrollo', label: 'Desarrollo & Software' },
    { id: 'seguridad', label: 'Seguridad & Redes' },
    { id: 'normatividad', label: 'Leyes & Normatividad' },
  ];

  const filteredCerts = filter === 'all'
    ? certifications
    : certifications.filter(c => {
        if (filter === 'normatividad') return c.category === 'normatividad' || c.category === 'propiedad';
        return c.category === filter;
      });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lila-neon/10 border border-lila-neon/30 text-lila-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Acreditaciones Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Certificaciones & <span className="text-gradient-primary">Reconocimientos</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Diplomas, premios y certificados respaldados con documentos oficiales descargables.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === btn.id
                  ? 'bg-gradient-to-r from-aguamarina-neon/20 to-lila-neon/20 text-white border border-aguamarina-neon/40 shadow-glow-aqua/20'
                  : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isAward = cert.category === 'premio';

            return (
              <div
                key={cert.id}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between border transition-all duration-200 group ${
                  isAward
                    ? 'border-aguamarina-neon/40 hover:border-aguamarina-neon hover:shadow-glow-aqua/30'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-slate-400">
                      {cert.date}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isAward 
                        ? 'bg-aguamarina-neon/20 text-aguamarina-neon border border-aguamarina-neon/40' 
                        : 'bg-lila-500/10 text-lila-300 border border-lila-500/30'
                    }`}>
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-aguamarina-300 transition-colors mb-1.5 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mb-2">
                    {cert.institution}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>PDF Verificado</span>
                  </div>

                  {cert.pdf ? (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-900 hover:bg-slate-800 hover:text-aguamarina-neon border border-slate-700 transition-all"
                    >
                      <span>Ver Diploma</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 italic">
                      Acreditado
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
