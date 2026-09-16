import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [bogotaTime, setBogotaTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setBogotaTime(new Intl.DateTimeFormat('es-CO', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-dark-900 border border-aguamarina-neon/30 flex items-center justify-center text-aguamarina-neon">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Roger Mauricio Durán Guacaneme
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Ingeniero de Sistemas · Escuela Colombiana de Ingeniería Julio Garavito
              </div>
            </div>
          </div>

          {/* Time in Bogotá & Status */}
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Bogotá, CO:</span>
              <span className="text-aguamarina-neon font-bold">{bogotaTime || '08:30 PM'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-aguamarina-neon transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Built with */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Roger Durán (SrDark04). Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span>Desarrollado con</span>
            <span className="text-aguamarina-neon font-bold">React</span>
            <span>+</span>
            <span className="text-cyan-400 font-bold">Vite</span>
            <span>+</span>
            <span className="text-lila-neon font-bold">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
