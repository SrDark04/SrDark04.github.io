import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, Sparkles, BrainCircuit } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export default function ExperienceEducation() {
  const edu = educationHistory[0];

  const milestones = [
    {
      year: "2026 - Presente",
      title: "Investigación en IA aplicada a Ciberseguridad",
      role: "Proyecto Nivel Maestría",
      desc: "Diseño de modelos inteligentes para mitigación y clasificación de incidentes de tráfico de red en tiempo real en Python y Wireshark."
    },
    {
      year: "Feb 2026 – May 2026",
      title: "Proyecto ZEAL – Retención Laboral",
      role: "Backend Architect & Developer",
      desc: "Desarrollo en Java 21, Spring Boot y Arquitectura Hexagonal. 🥈 Ganador del 2º Lugar en Feria de Ideas Inspiradoras."
    },
    {
      year: "Ene 2026 – May 2026",
      title: "Sistema Distribuido DOSW",
      role: "Microservices & Auth Lead",
      desc: "Microservicios en Spring Boot, autenticación con JWT, persistencia políglota (PostgreSQL + MongoDB). 🥈 Ganador del 2º Lugar 4ª Edición DOSW ECI."
    },
    {
      year: "2024 - Presente",
      title: "Orquestación de Infraestructura en Arch Linux",
      role: "SysAdmin & Automation",
      desc: "Optimización de kernel Linux para alta concurrencia, creación de unidades systemd de monitoreo y scripts de automatización."
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aguamarina-neon/10 border border-aguamarina-neon/30 text-aguamarina-neon text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trayectoria Académica & Hitos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Educación & <span className="text-gradient-primary">Trayectoria</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Formación universitaria de excelencia complementada con investigación de postgrado y desarrollo de software galardonado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* University Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border-slate-800 space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-aguamarina-neon/10 border border-aguamarina-neon/30 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-aguamarina-neon" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-aguamarina-300 font-semibold mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-y border-slate-800/80 py-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
                <span className="text-emerald-400 font-semibold">
                  {edu.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Master course spotlight */}
              <div className="p-4 rounded-xl bg-dark-900/90 border border-lila-500/30 space-y-2 shadow-glow-lila/10">
                <div className="flex items-center gap-2 text-xs font-bold text-lila-neon">
                  <BrainCircuit className="w-4 h-4" />
                  <span>{edu.masterCourse.title}</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {edu.masterCourse.name}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {edu.masterCourse.details}
                </p>
              </div>

            </div>
          </div>

          {/* Timeline / Milestones */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border-slate-800">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-lila-neon" />
                <span>Hitos & Proyectos en el Tiempo</span>
              </h3>

              <div className="relative border-l border-slate-800 ml-3 space-y-6">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative pl-6 group">
                    {/* Timeline Node */}
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-dark-950 border-2 border-aguamarina-neon group-hover:scale-125 transition-transform"></div>
                    
                    <span className="text-[11px] font-mono text-aguamarina-neon">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors mt-0.5">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-lila-300 block mb-1">
                      {item.role}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
