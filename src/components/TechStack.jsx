import React from 'react';
import { 
  Code, Terminal, Database, Server, Cpu, Shield, 
  Layers, Boxes, Lock, CheckCircle, Zap, Globe, 
  Radio, Network, Brain, Wifi, Share2, Container, 
  GitPullRequest, Cloud, Sparkles 
} from 'lucide-react';
import { techSkills } from '../data/portfolioData';

export default function TechStack() {
  const getIcon = (iconName) => {
    const iconProps = { className: "w-4 h-4 text-aguamarina-neon flex-shrink-0" };
    switch (iconName) {
      case 'Coffee':
      case 'Code':
      case 'Code2':
        return <Code {...iconProps} />;
      case 'Terminal':
        return <Terminal {...iconProps} />;
      case 'Database':
        return <Database {...iconProps} />;
      case 'Server':
        return <Server {...iconProps} />;
      case 'Layers':
        return <Layers {...iconProps} />;
      case 'Lock':
        return <Lock {...iconProps} />;
      case 'Boxes':
        return <Boxes {...iconProps} />;
      case 'CheckCircle':
        return <CheckCircle {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'Globe':
        return <Globe {...iconProps} />;
      case 'Radio':
        return <Radio {...iconProps} />;
      case 'Network':
        return <Network {...iconProps} />;
      case 'Brain':
        return <Brain {...iconProps} />;
      case 'Wifi':
        return <Wifi {...iconProps} />;
      case 'Share2':
        return <Share2 {...iconProps} />;
      case 'Container':
        return <Container {...iconProps} />;
      case 'GitPullRequest':
        return <GitPullRequest {...iconProps} />;
      case 'Cloud':
        return <Cloud {...iconProps} />;
      case 'Cpu':
        return <Cpu {...iconProps} />;
      case 'Shield':
        return <Shield {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lila-neon/10 border border-lila-neon/30 text-lila-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capacidades Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Tech Stack & <span className="text-gradient-primary">Herramientas</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Ecosistema tecnológico dominado a través de proyectos de ingeniería, laboratorios de investigación y desarrollo diario.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techSkills.map((category, catIdx) => {
            const isAqua = category.color === 'aguamarina';
            const isLila = category.color === 'lila';

            return (
              <div
                key={catIdx}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-800">
                    <span className={`w-2.5 h-2.5 rounded-full ${isAqua ? 'bg-aguamarina-neon' : isLila ? 'bg-lila-neon' : 'bg-cyan-400'}`}></span>
                    <h3 className="font-bold text-sm text-white font-display">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                          item.highlight
                            ? 'bg-dark-900/90 border-slate-800 hover:border-aguamarina-neon/40'
                            : 'bg-dark-950/60 border-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {getIcon(item.icon)}
                          <span className="text-xs font-medium text-slate-200">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-dark-950 border border-slate-800">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.items.length} tecnologías</span>
                  <span className="text-aguamarina-neon">100% verificado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Stats & Activity Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center text-xl">
              🐧
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Entorno Diario & Productividad</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Arch Linux x86_64 · Zsh · Neovim/VS Code · Docker Engine · Git
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              Perfil oficial de GitHub:
            </span>
            <a
              href="https://github.com/SrDark04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-dark-850 text-white border border-slate-700 hover:border-aguamarina-neon transition-all"
            >
              <span>github.com/SrDark04</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
