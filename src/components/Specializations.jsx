import React from 'react';
import { Server, ShieldAlert, Cpu, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { specializations } from '../data/portfolioData';

export default function Specializations() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-aguamarina-neon" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-lila-neon" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Server className="w-6 h-6 text-aguamarina-neon" />;
    }
  };

  return (
    <section id="specializations" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lila-neon/10 border border-lila-neon/30 text-lila-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pilares de Especialización</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Mis Tres Áreas de <span className="text-gradient-primary">Dominio Técnico</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Una sinergia balanceada entre desarrollo de software escalable, aseguramiento de infraestructuras y automatización profunda.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specializations.map((spec) => {
            const isAqua = spec.color === 'aguamarina';
            const isLila = spec.color === 'lila';
            
            return (
              <div
                key={spec.id}
                className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border ${
                  isAqua
                    ? 'hover:border-aguamarina-neon/50 hover:shadow-glow-aqua/20'
                    : isLila
                    ? 'hover:border-lila-neon/50 hover:shadow-glow-lila/20'
                    : 'hover:border-cyan-400/50 hover:shadow-glow-combo'
                }`}
              >
                {/* Top Subtle Gradient Light */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isAqua
                      ? 'from-aguamarina-neon to-cyan-500'
                      : isLila
                      ? 'from-lila-neon to-purple-500'
                      : 'from-aguamarina-neon to-lila-neon'
                  }`}
                />

                <div className="space-y-4">
                  {/* Icon & Tagline */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                      {getIcon(spec.icon)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-dark-900/60 px-2 py-1 rounded border border-slate-800">
                      Pilar Clave
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {spec.title}
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${isAqua ? 'text-aguamarina-300' : isLila ? 'text-lila-300' : 'text-cyan-300'}`}>
                      {spec.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {spec.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isAqua ? 'text-aguamarina-neon' : isLila ? 'text-lila-neon' : 'text-cyan-400'}`} />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {spec.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
