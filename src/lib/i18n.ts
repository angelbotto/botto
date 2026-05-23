export type Locale = "en" | "es";
export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export const dict = {
  en: {
    nav: {
      dna: "DNA",
      focus: "Focus",
      portfolio: "Portfolio",
      team: "Partners",
      build: "Build with us",
    },
    hero: {
      eyebrow: "Botto · Family Office",
      title: "Ideas die in slides. We turn them real.",
      subtitle:
        "Family office that joins as operating and growth partner, taking ideas from zero to scaled product — designed in Latin America, built for the world.",
      cta: "How we work",
      scrollHint: "Our DNA",
    },
    dna: {
      title: "Our DNA",
      lede: "Four convictions that decide every company we touch.",
      items: [
        {
          tag: "01",
          title: "Conviction over diversification.",
          body: "Few bets. Deep presence. We don't spray capital across a portfolio — we sit in the operating chair of every company we put our name behind.",
        },
        {
          tag: "02",
          title: "The system is the moat.",
          body: "Product, operations, automated process and growth strategy live as a single engine. Growth only compounds when the operating system is already in place. We install both, in parallel, from day zero.",
        },
        {
          tag: "03",
          title: "Latin America has its own grammar.",
          body: "The same model lands differently in Bogotá, Mexico City and São Paulo. We don't translate Silicon Valley manuals — we design from how our region thinks, sells and connects.",
        },
        {
          tag: "04",
          title: "The AI compounding window.",
          body: "The barrier to creation has collapsed. We're inside the best window in history to build from here. We think big and back people who do too.",
        },
      ],
    },
    focus: {
      title: "Industry-agnostic. Product and AI obsessed.",
      lede: "We don't pick sectors — we pick problems with a path to scalable product. The category is a detail.",
      items: [
        {
          tag: "01",
          title: "Product · AI as substrate",
          body: "We build with agents (OpenClaw) and back products where AI is the foundation, not a feature. The interface, the moat, the unit economics — all reshaped by it.",
        },
        {
          tag: "02",
          title: "An operating system that scales",
          body: "Automated process, finance discipline, hiring playbooks, ops infrastructure. The unglamorous layer that lets a company outgrow its founders without breaking.",
        },
        {
          tag: "03",
          title: "Growth as a built engine",
          body: "Distribution strategy, GTM, sales motion, content infrastructure, retention models, monetization. Growth stops being a hope and becomes a system.",
        },
        {
          tag: "04",
          title: "Regional fluency, global scale",
          body: "We design for LatAm's particular shape, then route talent, capital and customers between hemispheres. Local truth, global ambition.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      lede: "Companies founded by Botto, and projects we've co-founded alongside builders we believe in.",
      companiesTag: "Companies",
      projectsTag: "Projects",
      foundedBadge: "Founded",
      cofoundedBadge: "Co-founded",
      stealthBadge: "Stealth",
    },
    team: {
      title: "Partners",
      lede: "The people behind every Botto company. Operators, builders and craftspeople sitting in the chair, not on the sidelines.",
    },
    build: {
      eyebrow: "Build with us",
      title: "You bring the idea. We bring the operating system.",
      lede:
        "We don't write checks for decks. Bring us a problem you can't stop thinking about — our AI sharpens the narrative, we read every word ourselves, and if it clicks we sit at the table from day one.",
      placeholder:
        "What problem are you obsessed with? Who hurts most? What would you build first? Write rough — we sharpen together.",
      improve: "Sharpen with AI",
      improving: "Sharpening…",
      improved: "Here's a sharper version. Edit freely.",
      send: "Send to Botto",
      sending: "Sending…",
      sent: "Got it. We read every submission ourselves. Expect a reply within 5 business days.",
      error: "Something went wrong. Try again or email us directly.",
      nameLabel: "Your name",
      emailLabel: "Email",
      companyLabel: "Project or company (optional)",
      ideaLabel: "What do you want to build",
      directTitle: "Other inquiries",
      directBody: "Press, partnerships, hiring — anything else.",
      directCta: "Email us directly",
      howItWorks: "How it works",
      step1: "Write your idea — rough is fine.",
      step2: "Our AI rewrites it as a sharp pitch.",
      step3: "Edit, approve, and it lands with the partners.",
    },
    footer: {
      tagline: "Botto · A family office turning ideas into real, scaling businesses.",
      rights: "All rights reserved.",
    },
    lang: { label: "Language", en: "EN", es: "ES" },
  },
  es: {
    nav: {
      dna: "ADN",
      focus: "Foco",
      portfolio: "Portafolio",
      team: "Partners",
      build: "Construye con nosotros",
    },
    hero: {
      eyebrow: "Botto · Family Office",
      title: "Las ideas mueren en slides. Nosotros las hacemos reales.",
      subtitle:
        "Family office que se suma como partner operativo y de growth, llevando ideas de cero a producto escalado — diseñado en Latinoamérica, construido para el mundo.",
      cta: "Cómo trabajamos",
      scrollHint: "Nuestro ADN",
    },
    dna: {
      title: "Nuestro ADN",
      lede: "Cuatro convicciones que deciden cada compañía que tocamos.",
      items: [
        {
          tag: "01",
          title: "Convicción sobre diversificación.",
          body: "Pocas apuestas. Presencia profunda. No esparcimos capital en un portafolio — nos sentamos en la silla operativa de cada compañía donde ponemos el nombre.",
        },
        {
          tag: "02",
          title: "El sistema es el moat.",
          body: "Producto, operación, procesos automáticos y estrategia de growth viven como un solo motor. El crecimiento solo compone cuando el sistema operativo ya está en sitio. Instalamos ambos, en paralelo, desde el día cero.",
        },
        {
          tag: "03",
          title: "Latinoamérica tiene su propia gramática.",
          body: "El mismo modelo aterriza diferente en Bogotá, CDMX y São Paulo. No traducimos manuales del Valley — diseñamos desde cómo nuestra región piensa, vende y se conecta.",
        },
        {
          tag: "04",
          title: "La ventana de la IA.",
          body: "La barrera para crear colapsó. Estamos dentro de la mejor ventana de la historia para construir desde aquí. Pensamos en grande y respaldamos a quienes también.",
        },
      ],
    },
    focus: {
      title: "Agnósticos de industria. Obsesionados con producto e IA.",
      lede: "No elegimos sectores — elegimos problemas con camino a producto escalable. La categoría es un detalle.",
      items: [
        {
          tag: "01",
          title: "Producto · IA como sustrato",
          body: "Construimos con agentes (OpenClaw) y respaldamos productos donde la IA es el cimiento, no una feature. La interfaz, el moat, los unit economics — todo se reescribe con ella.",
        },
        {
          tag: "02",
          title: "Sistema operativo que escala",
          body: "Procesos automatizados, disciplina financiera, playbooks de contratación, infraestructura de ops. La capa poco glamorosa que permite a una compañía crecer más allá de su fundador sin romperse.",
        },
        {
          tag: "03",
          title: "Growth como motor instalado",
          body: "Estrategia de distribución, GTM, motion de ventas, infraestructura de contenido, modelos de retención, monetización. El crecimiento deja de ser esperanza y se vuelve sistema.",
        },
        {
          tag: "04",
          title: "Fluidez regional, escala global",
          body: "Diseñamos para la forma particular de LatAm, luego conectamos talento, capital y clientes entre hemisferios. Verdad local, ambición global.",
        },
      ],
    },
    portfolio: {
      title: "Portafolio",
      lede: "Compañías fundadas por Botto, y proyectos que co-fundamos junto a builders en los que creemos.",
      companiesTag: "Compañías",
      projectsTag: "Proyectos",
      foundedBadge: "Fundada",
      cofoundedBadge: "Co-fundada",
      stealthBadge: "Stealth",
    },
    team: {
      title: "Partners",
      lede: "Las personas detrás de cada compañía Botto. Operadores, builders y craftspeople sentados en la silla, no en la banca.",
    },
    build: {
      eyebrow: "Construye con nosotros",
      title: "Tú traes la idea. Nosotros el sistema operativo.",
      lede:
        "No giramos cheques sobre slides. Cuéntanos un problema que no puedes dejar de pensar — nuestra IA afila la narrativa, leemos cada palabra en persona, y si encaja nos sentamos en la mesa desde el día uno.",
      placeholder:
        "¿Qué problema te obsesiona? ¿Quién sufre más? ¿Qué construirías primero? Escribe en bruto — afilamos juntos.",
      improve: "Afilar con IA",
      improving: "Afilando…",
      improved: "Aquí va una versión más afilada. Edítala libremente.",
      send: "Enviar a Botto",
      sending: "Enviando…",
      sent: "Recibido. Leemos cada envío en persona. Espera respuesta en 5 días hábiles.",
      error: "Algo salió mal. Intenta de nuevo o escríbenos directo.",
      nameLabel: "Tu nombre",
      emailLabel: "Correo",
      companyLabel: "Proyecto o compañía (opcional)",
      ideaLabel: "Qué quieres construir",
      directTitle: "Otros temas",
      directBody: "Prensa, alianzas, contratación — cualquier otra cosa.",
      directCta: "Escríbenos directo",
      howItWorks: "Cómo funciona",
      step1: "Escribe tu idea — en bruto está bien.",
      step2: "Nuestra IA la reescribe como un pitch afilado.",
      step3: "Editas, apruebas y aterriza con los partners.",
    },
    footer: {
      tagline: "Botto · Family office que convierte ideas en negocios reales que escalan.",
      rights: "Todos los derechos reservados.",
    },
    lang: { label: "Idioma", en: "EN", es: "ES" },
  },
} as const;

export type Dict = (typeof dict)[Locale];
