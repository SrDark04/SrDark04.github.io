import React, { useState } from 'react';
import { Download, Mail, Check, Terminal, ExternalLink, ArrowDown, Sparkles, Shield, Server, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCvModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    
    // Trigger celebratory confetti in aquamarine and lilac colors!
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f5d4', '#c084fc', '#00f2fe', '#ffffff']
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-aguamarina-neon/15 via-cyan-500/10 to-lila-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-aguamarina-neon/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-lila-neon/10 blur-[110px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-aguamarina-neon/40 backdrop-blur-md shadow-glow-aqua/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aguamarina-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-aguamarina-neon"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-200">
                Habilitado para Prácticas Profesionales <strong className="text-aguamarina-neon">2027-1</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono text-slate-400">
                Hola, soy <span className="text-aguamarina-neon">{'<Roger />'}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
                Roger Mauricio <br />
                <span className="text-gradient-primary">Durán Guacaneme</span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-2xl">
                Ingeniero de Sistemas en formación (9º Semestre) especializado en{' '}
                <span className="text-aguamarina-300 font-semibold">Arquitectura Backend & Microservicios</span>,{' '}
                <span className="text-lila-300 font-semibold">Ciberseguridad / Redes</span> y{' '}
                <span className="text-cyan-300 font-semibold">Automatización DevOps</span>.
              </h2>
            </div>

            {/* University & Degree mention */}
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-mono leading-relaxed">
              📍 Escuela Colombiana de Ingeniería Julio Garavito · Cursando materia posgrado de IA en Ciberseguridad · Usuario & administrador diario de Arch Linux 🐧
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-aguamarina-neon via-cyan-300 to-lila-neon hover:shadow-glow-combo transition-all transform active:scale-95"
              >
                <span>Explorar Proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 border border-lila-400/40 hover:border-lila-400 hover:text-white hover:shadow-glow-lila/30 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-lila-neon" />
                <span>Descargar CV (3 Perfiles)</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 bg-dark-900/60 border border-slate-800 hover:border-slate-700 hover:text-aguamarina-neon transition-all"
                title="Copiar correo al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-aguamarina-neon" />
                    <span className="text-aguamarina-neon font-mono text-xs">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="font-mono text-xs">rogermao5.1@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="bg-dark-900/50 border border-slate-800/60 rounded-xl p-3 text-center lg:text-left">
                  <div className="text-xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-aguamarina-neon to-lila-neon">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-500">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="w-full max-w-md lg:max-w-md flex flex-col items-center">
            <div className="relative w-full">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-aguamarina-neon via-cyan-500 to-lila-neon opacity-40 blur-lg group-hover:opacity-75 transition duration-1000"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-dark-900 border border-slate-700/80 p-6 backdrop-blur-xl shadow-2xl">
                
                {/* Header terminal-like bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-[11px] font-mono text-slate-400 ml-2">arch-box :: srdark04</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-aguamarina-neon border border-aguamarina-neon/30">
                    Java 21 · Spring
                  </span>
                </div>

                {/* Avatar and Profile Snapshot */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-aguamarina-neon p-0.5 bg-dark-950 shadow-glow-aqua/30">
                      <img
                        src={personalInfo.avatar}
                        alt="Roger Mauricio Durán Guacaneme"
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.target.src = 'https://ui-avatars.com/api/?name=Roger+Duran&background=0a0f1d&color=00f5d4&size=200';
                        }}
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-dark-900 border border-slate-700 flex items-center justify-center text-[10px]">
                      🐧
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-white text-base">Roger Durán G.</div>
                    <div className="text-xs text-aguamarina-neon font-mono">Systems Engineer</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Escuela Colombiana de Ingeniería</div>
                    <div className="text-[10px] text-lila-neon font-semibold mt-1">
                      🏆 2x Segundo Lugar en Software
                    </div>
                  </div>
                </div>

                {/* Interactive Pills */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-dark-950/70 border border-slate-800 text-xs font-mono flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-aguamarina-neon" />
                      Backend Core:
                    </span>
                    <span className="text-aguamarina-300 font-bold">Hexagonal + Spring 3</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-dark-950/70 border border-slate-800 text-xs font-mono flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-lila-neon" />
                      Cybersecurity:
                    </span>
                    <span className="text-lila-300 font-bold">Wireshark & ML Alerts</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-dark-950/70 border border-slate-800 text-xs font-mono flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      DevOps / OS:
                    </span>
                    <span className="text-cyan-300 font-bold">Docker & Arch Linux</span>
                  </div>
                </div>

                {/* Bottom Quick Links */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Hire
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-aguamarina-neon transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>github.com/SrDark04</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
