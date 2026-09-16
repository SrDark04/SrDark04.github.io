import React, { useState } from 'react';
import { X, Download, ExternalLink, Check, FileText, Shield, Server, Terminal, Sparkles } from 'lucide-react';
import { cvVersions } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  const [selectedCv, setSelectedCv] = useState(cvVersions[0]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPath = (path) => {
    const fullUrl = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (id) => {
    switch (id) {
      case 'architecture':
        return <Server className="w-5 h-5 text-aguamarina-neon" />;
      case 'security':
        return <Shield className="w-5 h-5 text-lila-neon" />;
      case 'automation':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      default:
        return <FileText className="w-5 h-5 text-aguamarina-neon" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-dark-800 bg-gradient-to-r from-dark-850 to-dark-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-aguamarina-neon/10 border border-aguamarina-neon/30 flex items-center justify-center">
              <Download className="w-5 h-5 text-aguamarina-neon" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Descargar Hoja de Vida (CV)</h3>
              <p className="text-xs text-slate-400">Selecciona el perfil específico adaptado a tu búsqueda</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="text-xs text-slate-300 bg-dark-850 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-aguamarina-neon flex-shrink-0" />
            <span>
              He preparado <strong>3 versiones especializadas</strong> según el rol de la vacante, destacando las métricas y tecnologías clave en cada área.
            </span>
          </div>

          {/* CV Version Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {cvVersions.map((cv) => {
              const isSelected = selectedCv.id === cv.id;
              return (
                <div
                  key={cv.id}
                  onClick={() => setSelectedCv(cv)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-dark-800 to-dark-850 border-aguamarina-neon shadow-glow-aqua/20 scale-[1.02]'
                      : 'bg-dark-850/60 border-slate-800 hover:border-slate-700 hover:bg-dark-850'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-dark-900 border border-slate-800">
                        {getIcon(cv.id)}
                      </div>
                      {isSelected && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-aguamarina-neon/20 text-aguamarina-neon border border-aguamarina-neon/30">
                          Seleccionado
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-sm text-white mb-1.5">{cv.category}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {cv.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                    {cv.filename}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected CV Details & Actions */}
          <div className="bg-dark-800/80 border border-slate-800 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-aguamarina-neon font-mono uppercase tracking-wider">
                  Archivo listo para descarga
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">{selectedCv.title}</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Enfoque principal: {selectedCv.focus}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCv.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-dark-900 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ver PDF</span>
                </a>
                <a
                  href={selectedCv.path}
                  download={selectedCv.filename}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-aguamarina-neon to-cyan-300 hover:shadow-glow-aqua/40 transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-dark-800 bg-dark-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Bogotá, Colombia · +57 300 247 1343</span>
          <button
            onClick={() => handleCopyPath(selectedCv.path)}
            className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-aguamarina-neon" />
                <span className="text-aguamarina-neon">Enlace copiado</span>
              </>
            ) : (
              <span>Copiar enlace directo</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
