import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.85 },
        colors: ['#00f5d4', '#c084fc', '#ffffff']
      });
    } catch (e) {
      // ignore
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portafolio Web')}&body=${encodeURIComponent(
      `Hola Roger,\n\nSoy ${formData.name} (${formData.email}).\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aguamarina-neon/10 border border-aguamarina-neon/30 text-aguamarina-neon text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto & Colaboración</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            ¿Hablamos de un <span className="text-gradient-primary">Nuevo Reto</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Estoy disponible para oportunidades laborales y vinculación de prácticas profesionales (2027-1). ¡Conversemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-6 border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-aguamarina-neon/15 border border-aguamarina-neon/30 flex items-center justify-center text-aguamarina-neon">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Correo Electrónico</div>
                  <div className="text-sm font-bold text-white">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-dark-850 text-slate-200 border border-slate-700 hover:border-aguamarina-neon transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-aguamarina-neon" />
                    <span className="text-aguamarina-neon font-mono">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copiar Correo</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <a
              href="https://wa.me/573002471343"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border-slate-800 flex items-center justify-between group hover:border-lila-neon/40 transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lila-neon/15 border border-lila-neon/30 flex items-center justify-center text-lila-neon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Teléfono / WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-lila-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
                Chatear ↗
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border-slate-800 flex items-center justify-between group hover:border-cyan-400/40 transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-300">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Roger Mauricio Durán Guacaneme
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
                Conectar ↗
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border-slate-800 flex items-center justify-between group hover:border-slate-600 transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center text-slate-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">GitHub</div>
                  <div className="text-sm font-bold text-white group-hover:text-aguamarina-neon transition-colors">
                    github.com/SrDark04
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
                Explorar ↗
              </span>
            </a>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-aguamarina-neon" />
                <h3 className="text-lg font-bold text-white">Enviar un Mensaje Directo</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Tu Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-aguamarina-neon text-white text-xs placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Tu Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-aguamarina-neon text-white text-xs placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Asunto</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Oportunidad laboral / Práctica profesional / Proyecto"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-aguamarina-neon text-white text-xs placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Mensaje</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre la posición, requerimientos técnicos o proyecto..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800 focus:border-aguamarina-neon text-white text-xs placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-aguamarina-neon via-cyan-300 to-lila-neon hover:shadow-glow-combo transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-mono">
                    ✓ Preparando mensaje en tu cliente de correo predeterminado...
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
