export const personalInfo = {
  name: "Roger Mauricio Durán Guacaneme",
  handle: "SrDark04",
  title: "Estudiante de 9º Semestre de Ingeniería de Sistemas",
  subtitle: "Especializado en Backend, Arquitectura de Software, Ciberseguridad & DevOps",
  location: "Bogotá, Colombia",
  phone: "+57 300 247 1343",
  email: "rogermao5.1@gmail.com",
  github: "https://github.com/SrDark04",
  linkedin: "https://www.linkedin.com/in/roger-mauricio-duran-guacaneme",
  avatar: "https://avatars.githubusercontent.com/u/166662857?v=4",
  status: "🟢 Habilitado para Prácticas Profesionales (2027-1)",
  university: "Escuela Colombiana de Ingeniería Julio Garavito",
  degree: "Pregrado en Ingeniería de Sistemas",
  expectedGraduation: "2027",
  bio: "Estudiante de 9º semestre de Ingeniería de Sistemas con sólida formación en desarrollo backend, arquitectura hexagonal de microservicios, ciberseguridad, análisis de tráfico de red y automatización de sistemas bajo Linux (Arch Linux). Galardonado con 2º lugar en ferias de innovación y desarrollo de software por el diseño de arquitecturas escalables y resilientes.",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B1 (Lectura técnica de RFCs, manuales, logs y specs de APIs)" }
  ],
  stats: [
    { label: "Semestre Actual", value: "9º", subtext: "Prácticas Habilitadas" },
    { label: "Premios de Software", value: "2", subtext: "2º Lugar DOSW & Ideas Insp." },
    { label: "Materia Maestría", value: "IA en Redes", subtext: "Ciberseguridad & ML" },
    { label: "Daily OS", value: "Arch Linux", subtext: "Kernel & Systemd Tuning" }
  ]
};

export const cvVersions = [
  {
    id: "architecture",
    title: "CV - Arquitectura & Backend",
    category: "Arquitectura",
    focus: "Java 21, Spring Boot, Arquitectura Hexagonal, Microservicios, Persistencia Políglota",
    filename: "CVArchitecture.pdf",
    path: "/docs/CVArchitecture.pdf",
    color: "from-aguamarina-neon to-cyan-400"
  },
  {
    id: "security",
    title: "CV - Ciberseguridad & Redes",
    category: "Ciberseguridad",
    focus: "Wireshark, Análisis PCAP, IA para Mitigación de Incidentes, JWT, RBAC, Zero-Trust",
    filename: "CVSecurity.pdf",
    path: "/docs/CVSecurity.pdf",
    color: "from-lila-neon to-purple-400"
  },
  {
    id: "automation",
    title: "CV - DevOps & Automatización",
    category: "DevOps",
    focus: "Docker, CI/CD GitHub Actions & Azure DevOps, Arch Linux Kernel, Bash/Python Scripting",
    filename: "CVAutomatitation.pdf",
    path: "/docs/CVAutomatitation.pdf",
    color: "from-aguamarina-neon to-lila-neon"
  }
];

export const specializations = [
  {
    id: "backend",
    title: "Arquitectura Backend & Microservicios",
    icon: "Server",
    tagline: "Sistemas distribuidos desacoplados y resilientes",
    color: "aguamarina",
    description: "Diseño e implementación de aplicaciones empresariales robustas usando Java 21 y Spring Boot bajo Arquitectura Hexagonal (Ports & Adapters). Persistencia políglota y aislamiento de entornos.",
    skills: ["Java 21", "Spring Boot", "Arquitectura Hexagonal", "Microservicios", "PostgreSQL", "MongoDB", "TDD", "Clean Code"],
    bullets: [
      "Desacoplamiento total del núcleo de negocio de adaptadores web y de persistencia.",
      "Esquemas de persistencia dual: PostgreSQL para producción y H2 para testing automatizado continuo.",
      "Seguridad perimetral y autenticación stateless con Spring Security y JWT."
    ]
  },
  {
    id: "security",
    title: "Ciberseguridad & Análisis de Redes",
    icon: "ShieldAlert",
    tagline: "Inspección profunda, mitigación de riesgos e IA defensiva",
    color: "lila",
    description: "Diagnóstico avanzado de tráfico con Wireshark, simulación de infraestructuras en Cisco Packet Tracer y desarrollo de modelos de Machine Learning para mitigación de fatiga de alertas.",
    skills: ["Wireshark", "Cisco Packet Tracer", "TCP/IP & VLANs", "Incident Response (IR)", "ML Traffic Analysis", "Data Protection (SIC)"],
    bullets: [
      "Investigación posgrado: IA para clasificación y priorización de incidentes de red en tiempo real.",
      "Diagnóstico de anomalías de handshake TCP/TLS, latencia y análisis forense de paquetes PCAP.",
      "Implementación de principios Zero-Trust y control de acceso granular basado en roles (RBAC)."
    ]
  },
  {
    id: "devops",
    title: "DevOps & Automatización de Infraestructura",
    icon: "Cpu",
    tagline: "Pipelines continuos y optimización a nivel de kernel",
    color: "combo",
    description: "Aprovisionamiento estandarizado con Docker y Docker Compose, pipelines de CI/CD automatizados en GitHub Actions y Azure DevOps, y automatización avanzada en Arch Linux.",
    skills: ["Docker & Compose", "GitHub Actions", "Azure DevOps", "Arch Linux", "Bash & Python", "Systemd Services", "Kernel Tuning"],
    bullets: [
      "Pipelines de CI/CD con ejecución automatizada de pruebas TDD previas a cada merge.",
      "Automatización de respaldos, limpieza y monitoreo proactivo con unidades y timers systemd.",
      "Ajuste fino de parámetros del kernel en Arch Linux para máxima concurrencia en contenedores."
    ]
  }
];

export const projects = [
  {
    id: "zeal",
    title: "ZEAL – Plataforma Web de Retención y Propósito",
    award: "🥈 2º Lugar Feria de Ideas Inspiradoras (2026)",
    category: "architecture",
    featured: true,
    period: "Feb 2026 – May 2026",
    role: "Desarrollador Backend & Diseñador de Arquitectura",
    description: "Plataforma web para retención del talento joven (18-28 años) en Colombia. Diseñada con Arquitectura Hexagonal con Java 21 y Spring Boot, aislando totalmente la lógica de negocio de los adaptadores de infraestructura.",
    highlights: [
      "Arquitectura Hexagonal (Ports & Adapters) con Java 21 y Spring Boot.",
      "Persistencia dual: PostgreSQL en producción y H2 en memoria para suites de pruebas unitarias aisladas.",
      "CI/CD automatizado en GitHub Actions bajo metodología Test-Driven Development (TDD).",
      "Containerización integral con Docker y Docker Compose (aprovisionamiento en un solo comando)."
    ],
    tech: ["Java 21", "Spring Boot", "Arquitectura Hexagonal", "PostgreSQL", "Docker", "GitHub Actions", "TDD", "H2 Database"],
    github: "https://github.com/SrDark04",
    badgeColor: "aguamarina"
  },
  {
    id: "dosw",
    title: "Sistema Distribuido de Gestión de Torneos Deportivos",
    award: "🥈 2º Lugar 4ª Edición DOSW ECI (2026)",
    category: "architecture",
    featured: true,
    period: "Ene 2026 – May 2026",
    role: "Desarrollador de Microservicios Backend & Automatización",
    description: "Transformación de un flujo 100% analógico en papel hacia una arquitectura distribuida de microservicios en tiempo real con trazabilidad completa de torneos universitarios.",
    highlights: [
      "Microservicio central de Usuarios y Autenticación con Spring Boot y Spring Security.",
      "Autenticación stateless con JSON Web Tokens (JWT) y autorización RBAC (Role-Based Access Control).",
      "Persistencia políglota: PostgreSQL para datos transaccionales y MongoDB para auditoría de eventos.",
      "Pipelines de compilación y despliegue automatizados en Azure DevOps y Dockerfiles modulares."
    ],
    tech: ["Spring Boot", "Microservicios", "Spring Security", "JWT", "PostgreSQL", "MongoDB", "Docker", "Azure DevOps"],
    github: "https://github.com/SrDark04",
    badgeColor: "aguamarina"
  },
  {
    id: "ai-incident-response",
    title: "Sistema Inteligente de Priorización de Incidentes con IA",
    award: "🔬 Proyecto de Nivel Maestría (2026 - En curso)",
    category: "security",
    featured: true,
    period: "Feb 2026 – En curso",
    role: "Investigador & Desarrollador Principal",
    description: "Modelo de Machine Learning en Python para la categorización, priorización heurística y mitigación de fatiga de alertas generadas por inspección de tráfico de red en tiempo real.",
    highlights: [
      "Reducción del tiempo de clasificación de incidentes críticos de horas a escasos segundos.",
      "Filtrado heurístico de falsos positivos para canalizar alertas de alto riesgo a analistas SOC.",
      "Evaluación continua del nivel de riesgo sobre flujos de tráfico PCAP y telemetría de red.",
      "Optimización del ciclo de Incident Response (IR) frente a saturación de tráfico y brechas de seguridad."
    ],
    tech: ["Python", "Machine Learning", "Wireshark", "PCAP Traffic Analysis", "Cybersecurity", "Incident Response"],
    github: "https://github.com/SrDark04",
    badgeColor: "lila"
  },
  {
    id: "arch-automation",
    title: "Infraestructura & Automatización de Kernel en Arch Linux",
    award: "⚡ Entorno de Alto Rendimiento (2024 - Presente)",
    category: "devops",
    featured: true,
    period: "2024 – Presente",
    role: "Administrador de Sistemas & Automatización",
    description: "Ecosistema automatizado sobre Arch Linux con scripts de orquestación en Bash y Python para gestión proactiva de recursos, rotación de copias de seguridad y tuning de parámetros del kernel.",
    highlights: [
      "Monitoreo proactivo de recursos de CPU y RAM orquestado con unidades y temporizadores systemd.",
      "Scripts en Bash y Python para respaldos automatizados y depuración inteligente de cachés.",
      "Ajuste de parámetros de kernel sysctl para maximizar el throughput de contenedores Docker."
    ],
    tech: ["Arch Linux", "Bash", "Python", "Systemd", "Linux Kernel Tuning", "Docker Engine"],
    github: "https://github.com/SrDark04",
    badgeColor: "combo"
  },
  {
    id: "blueprints-jwt",
    title: "BluePrints REST API + JWT Security",
    category: "architecture",
    featured: false,
    period: "2025 – 2026",
    role: "Desarrollador Backend",
    description: "API RESTful con Java 21 para manipulación de planos arquitectónicos en memoria y persistencia, protegida con filtros JWT personalizados y Spring Security.",
    highlights: [
      "Endpoints REST con manejo estricto de códigos HTTP y serialización JSON.",
      "Filtros de interceptación para validación criptográfica de tokens JWT."
    ],
    tech: ["Java 21", "Spring Boot", "Spring Security", "JWT", "JUnit 5"],
    github: "https://github.com/SrDark04/RD_Lab_P2_BluePrints_Java21_API_Security_JWT_RC",
    badgeColor: "aguamarina"
  },
  {
    id: "concurrent-programming",
    title: "Laboratorio de Programación Concurrente & Sincronización",
    category: "architecture",
    featured: false,
    period: "2025",
    role: "Desarrollador Backend",
    description: "Implementación avanzada de algoritmos concurrentes, prevención de Deadlocks, suspensión de hilos y sincronización de memoria compartida en Java 21.",
    highlights: [
      "Manejo de monitores, semáforos y bloques sincronizados concurrentes.",
      "Pruebas de estrés y mitigación de condiciones de carrera (Race Conditions)."
    ],
    tech: ["Java 21", "Multithreading", "Concurrency", "Synchronization", "Deadlocks"],
    github: "https://github.com/SrDark04/RD_ConcurrentProgramming_Syncrhronization_DeadLocks_ThsSuspension_RL",
    badgeColor: "lila"
  },
  {
    id: "network-simulation",
    title: "Topologías de Red & Análisis Forense de Tráfico",
    category: "security",
    featured: false,
    period: "2025 – 2026",
    role: "Analista de Redes",
    description: "Diseño y simulación de topologías corporativas en Cisco Packet Tracer y diagnóstico profundo de tráfico con Wireshark.",
    highlights: [
      "Configuración de VLANs, subredes IPv4/IPv6 y tablas de enrutamiento.",
      "Análisis de capturas Wireshark para detección de retransmisiones TCP y anomalías TLS."
    ],
    tech: ["Wireshark", "Cisco Packet Tracer", "TCP/IP", "VLANs", "Subnetting"],
    github: "https://github.com/SrDark04",
    badgeColor: "lila"
  }
];

export const techSkills = [
  {
    category: "Lenguajes de Programación",
    color: "aguamarina",
    items: [
      { name: "Java 21 / 17", level: "Avanzado", icon: "Coffee", highlight: true },
      { name: "Python", level: "Avanzado", icon: "Code", highlight: true },
      { name: "Bash Scripting", level: "Avanzado", icon: "Terminal", highlight: true },
      { name: "SQL", level: "Intermedio - Alto", icon: "Database" },
      { name: "C / C++", level: "Intermedio", icon: "Cpu" },
      { name: "JavaScript", level: "Intermedio", icon: "Code2" }
    ]
  },
  {
    category: "Backend & Arquitectura",
    color: "lila",
    items: [
      { name: "Spring Boot", level: "Avanzado", icon: "Server", highlight: true },
      { name: "Arquitectura Hexagonal", level: "Avanzado", icon: "Layers", highlight: true },
      { name: "Spring Security & JWT", level: "Avanzado", icon: "Lock", highlight: true },
      { name: "Spring Data JPA", level: "Avanzado", icon: "Database" },
      { name: "Microservicios", level: "Intermedio - Alto", icon: "Boxes", highlight: true },
      { name: "TDD & Clean Code", level: "Avanzado", icon: "CheckCircle" },
      { name: "FastAPI", level: "Intermedio", icon: "Zap" },
      { name: "RESTful APIs", level: "Avanzado", icon: "Globe" }
    ]
  },
  {
    category: "Ciberseguridad & Redes",
    color: "aguamarina",
    items: [
      { name: "Wireshark (PCAP)", level: "Avanzado", icon: "Radio", highlight: true },
      { name: "Cisco Packet Tracer", level: "Avanzado", icon: "Network", highlight: true },
      { name: "IA en Incident Response", level: "Avanzado", icon: "Brain", highlight: true },
      { name: "Protocolos TCP/IP", level: "Avanzado", icon: "Wifi" },
      { name: "VLANs & Subnetting", level: "Intermedio - Alto", icon: "Share2" },
      { name: "Protección de Datos (SIC)", level: "Certificado", icon: "Shield" }
    ]
  },
  {
    category: "Bases de Datos & DevOps",
    color: "combo",
    items: [
      { name: "Docker & Compose", level: "Avanzado", icon: "Container", highlight: true },
      { name: "Arch Linux Internals", level: "Avanzado", icon: "Terminal", highlight: true },
      { name: "GitHub Actions CI/CD", level: "Avanzado", icon: "GitPullRequest", highlight: true },
      { name: "Azure DevOps", level: "Intermedio - Alto", icon: "Cloud" },
      { name: "PostgreSQL", level: "Avanzado", icon: "Database" },
      { name: "MongoDB", level: "Intermedio - Alto", icon: "Database" },
      { name: "H2 & MySQL", level: "Intermedio", icon: "Server" }
    ]
  }
];

export const certifications = [
  {
    id: "cert-ideas-inspiradoras",
    title: "Segundo Lugar Feria Ideas Inspiradoras – Proyecto ZEAL",
    institution: "Escuela Colombiana de Ingeniería Julio Garavito",
    date: "2026",
    category: "premio",
    pdf: "/certificates/CERTIFICADO_IDEAS_INSPIRADORAS.pdf",
    description: "Reconocimiento al diseño arquitectónico y desarrollo backend de la plataforma ZEAL con Java 21, Spring Boot y Arquitectura Hexagonal.",
    badge: "Premio Innovación"
  },
  {
    id: "cert-java",
    title: "Diplomado en Programación en Java",
    institution: "Politécnico de Colombia",
    date: "Ene 2025",
    category: "desarrollo",
    pdf: "/certificates/Certificado_Java.pdf",
    description: "Formación integral en fundamentos y programación avanzada en el ecosistema Java.",
    badge: "Desarrollo"
  },
  {
    id: "cert-platzi-software",
    title: "Fundamentos de Ingeniería de Software",
    institution: "Platzi",
    date: "Mar 2026",
    category: "desarrollo",
    pdf: "/certificates/diploma-ingenieria.pdf",
    description: "Arquitectura de sistemas computacionales, redes, metodologías de ingeniería y buenas prácticas de ingeniería de software.",
    badge: "Ingeniería"
  },
  {
    id: "cert-platzi-html",
    title: "Curso Definitivo de HTML y CSS",
    institution: "Platzi",
    date: "2026",
    category: "frontend",
    pdf: "/certificates/diploma-html.pdf",
    description: "Bases sólidas de maquetación semántica, diseño adaptable y estándares modernos web.",
    badge: "Web"
  },
  {
    id: "cert-sic-datos",
    title: "Introducción a la Protección de Datos Personales",
    institution: "Superintendencia de Industria y Comercio (SIC)",
    date: "Mar 2026",
    category: "seguridad",
    pdf: "/certificates/Certificado_Proteccion_de_Datos_Personales.pdf",
    description: "Normatividad colombiana en privacidad y tratamiento de datos personales conforme al régimen legal vigente.",
    badge: "Normatividad"
  },
  {
    id: "cert-sic-patentes",
    title: "Aspectos Fundamentales en Redacción de Patentes",
    institution: "Superintendencia de Industria y Comercio (SIC)",
    date: "May 2026",
    category: "propiedad",
    pdf: "/certificates/certificadoAPI_FOR61703.pdf",
    description: "Estructuración de solicitudes de patente y protección de propiedad intelectual en innovación tecnológica.",
    badge: "Patentes"
  },
  {
    id: "cert-sic-consumidor",
    title: "Respetando los Derechos del Consumidor",
    institution: "Superintendencia de Industria y Comercio (SIC)",
    date: "2026",
    category: "normatividad",
    pdf: "/certificates/CertificadoDerechosDelConsumidor.pdf",
    description: "Regulación de derechos del consumidor y buenas prácticas en servicios comerciales y plataformas digitales.",
    badge: "Normatividad"
  },
  {
    id: "cert-cisco-packet-tracer",
    title: "Network Management & Packet Tracer",
    institution: "Cisco Networking Academy",
    date: "2025 - 2026",
    category: "seguridad",
    pdf: null,
    description: "Configuración y análisis de infraestructuras de red, enrutamiento y conmutación en entornos simulados.",
    badge: "Redes"
  }
];

export const educationHistory = [
  {
    degree: "Pregrado en Ingeniería de Sistemas (9º Semestre)",
    institution: "Escuela Colombiana de Ingeniería Julio Garavito",
    period: "En curso (Grado esperado 2027)",
    location: "Bogotá, Colombia",
    status: "🟢 Habilitado para Prácticas Profesionales (2027-1)",
    description: "Formación especializada en ingeniería de software, arquitectura de sistemas, concurrencia, redes y seguridad de la información.",
    masterCourse: {
      title: "Materia de Nivel Maestría Cursada:",
      name: "Inteligencia Artificial aplicada a Ciberseguridad y Redes (2026)",
      details: "Entrenamiento de clasificadores de Machine Learning para detección de anomalías y priorización heurística de incidentes de tráfico en tiempo real."
    }
  }
];

export const terminalCommands = {
  help: "Comandos disponibles: whoami, skills, projects, certs, cv, arch, contact, clear",
  whoami: "Roger Mauricio Durán Guacaneme - Estudiante de 9º semestre de Ing. de Sistemas en la Escuela Colombiana de Ingeniería. Habilitado para prácticas profesionales.",
  skills: "Backend: Java 21, Spring Boot, Hexagonal, Microservices | Seguridad: Wireshark, Packet Tracer, ML Incident Response | DevOps: Docker, Arch Linux Kernel, GitHub Actions",
  projects: "1. ZEAL (Arquitectura Hexagonal, 2º Lugar) | 2. DOSW (Microservicios + JWT, 2º Lugar) | 3. IA Network Mitigation | 4. Arch Linux Automation",
  certs: "Feria Ideas Inspiradoras (2º Lugar), Diplomado Java (Politécnico), Platzi Ing. Software, SIC Datos Personales & Patentes, Cisco Packet Tracer.",
  arch: "OS: Arch Linux x86_64 | Kernel: Linux Custom Tuned | Shell: zsh/bash | WM/DE: High Concurrency Optimized | Uptime: 99.99%",
  contact: "Email: rogermao5.1@gmail.com | Tel: +57 300 247 1343 | LinkedIn: /in/roger-mauricio-duran-guacaneme | GitHub: @SrDark04",
  cv: "Escribe 'descargar-cv' o haz clic en el botón 'Descargar CV' del menú superior para seleccionar la versión (Arquitectura, Seguridad o DevOps)."
};
