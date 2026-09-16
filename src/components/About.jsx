import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Award, GraduationCap, Cpu, ShieldCheck, CornerDownLeft } from 'lucide-react';
import { personalInfo, terminalCommands } from '../data/portfolioData';

export default function About() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Bienvenido a Arch Linux Terminal (v6.11-custom-kernel)" },
    { type: 'system', text: "Escribe 'help' o haz clic en los comandos sugeridos abajo para explorar mi perfil interactivo." },
    { type: 'command', text: "whoami" },
    { type: 'output', text: terminalCommands.whoami }
  ]);
  const terminalEndRef = useRef(null);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `zsh: comando no encontrado: ${trimmed}. Escribe 'help' para ver opciones.`;
    
    setHistory(prev => [
      ...prev,
      { type: 'command', text: trimmed },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickButtons = ['help', 'skills', 'projects', 'certs', 'arch', 'contact', 'clear'];

  return (
    <section id="about" className="py-20 bg-dark-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aguamarina-neon/10 border border-aguamarina-neon/30 text-aguamarina-neon text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perfil & Filosofía de Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Sobre Mí & <span className="text-gradient-primary">Enfoque Técnico</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Combinando rigor arquitectónico en backend, visión defensiva en redes y automatización profunda del sistema operativo.
          </p>
        </div>

        {/* 2-Column Grid: Text & Stats on Left, Interactive Terminal on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Core Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-aguamarina-neon" />
                <span>Ingeniero de Sistemas en Formación</span>
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Actualmente curso el <strong>9º semestre</strong> en la prestigiosa{' '}
                <strong className="text-white">Escuela Colombiana de Ingeniería Julio Garavito</strong> en Bogotá, habilitado para iniciar prácticas empresariales en el periodo <strong>2027-1</strong>.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Mi foco central es la ingeniería de software de alto impacto: concibo la arquitectura no como un dibujo estático, sino como un sistema vivo basado en <strong>Arquitectura Hexagonal (Ports & Adapters)</strong>, modularidad y separación estricta de responsabilidades en <strong>Java 21 con Spring Boot</strong>.
              </p>

              <div className="p-4 rounded-xl bg-dark-900/80 border border-lila-400/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-lila-300 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-lila-neon" />
                  <span>Investigación Nivel Maestría</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Materia cursada: <em>Inteligencia Artificial aplicada a Ciberseguridad y Redes</em>. Desarrollo de modelos heurísticos en Python para la priorización inteligente de alertas en tiempo real y mitigación de fatiga de alertas para equipos de respuesta a incidentes.
                </p>
              </div>

              {/* Distinctions */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">
                  Reconocimientos Académicos Destacados
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-dark-900/60 border border-slate-800 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-aguamarina-neon flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-200">2º Lugar DOSW ECI</div>
                      <div className="text-slate-400 text-[11px]">Sistema Distribuido Torneos</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-900/60 border border-slate-800 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-lila-neon flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-200">2º Lugar Ideas Insp.</div>
                      <div className="text-slate-400 text-[11px]">Plataforma ZEAL Backend</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Arch Linux Terminal */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-dark-900 border border-slate-700/80 overflow-hidden shadow-2xl shadow-black/80 font-mono">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-dark-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-aguamarina-neon" />
                    roger@archlinux: ~ (interactive)
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 bg-dark-900 px-2 py-0.5 rounded border border-slate-800">
                  zsh
                </span>
              </div>

              {/* Terminal Console Output */}
              <div className="p-4 h-80 sm:h-96 overflow-y-auto space-y-2 text-xs leading-relaxed bg-dark-950/90 text-slate-300">
                {history.map((item, idx) => (
                  <div key={idx}>
                    {item.type === 'system' && (
                      <div className="text-slate-500 italic"># {item.text}</div>
                    )}
                    {item.type === 'command' && (
                      <div className="flex items-center gap-1.5 text-aguamarina-neon font-bold">
                        <span className="text-lila-400">roger@archlinux</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-slate-400">$</span>
                        <span className="text-white">{item.text}</span>
                      </div>
                    )}
                    {item.type === 'output' && (
                      <div className="pl-4 text-slate-300 border-l-2 border-slate-800 whitespace-pre-wrap py-0.5">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input */}
              <div className="p-3 bg-dark-900 border-t border-slate-800">
                <div className="flex items-center gap-2 bg-dark-950 rounded-xl px-3 py-2 border border-slate-800 focus-within:border-aguamarina-neon transition-colors">
                  <span className="text-aguamarina-neon font-bold text-xs">❯</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe un comando (ej. skills, certs, projects)..."
                    className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                  />
                  <button
                    onClick={() => executeCommand(inputVal)}
                    className="p-1 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Quick Action Pill Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] text-slate-500 mr-1">Comandos rápidos:</span>
                  {quickButtons.map((btn) => (
                    <button
                      key={btn}
                      onClick={() => executeCommand(btn)}
                      className="px-2 py-0.5 rounded text-[10px] bg-dark-950 hover:bg-dark-800 border border-slate-800 hover:border-aguamarina-neon/50 text-slate-300 hover:text-aguamarina-neon transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
