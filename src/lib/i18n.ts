export type Locale = "en" | "es";
export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export const dict = {
  en: {
    nav: {
      dna: "DNA",
      focus: "Focus",
      portfolio: "Portfolio",
      team: "Team",
      build: "Build with us",
    },
    hero: {
      eyebrow: "Botto · Family Office",
      title: "Ideas die in slides. We turn them real.",
      subtitle:
        "Humans are wired to build. Two brothers — operator and growth — joining founders to take ideas from zero to real product, real revenue, real scale.",
      cta: "How we work",
      scrollHint: "Our DNA",
    },
    dna: {
      title: "We don't fund. We join the team.",
      lede: "Operators and growth-builders in the trenches with founders. Our scars, your idea, one team.",
      items: [
        {
          title: "Team, not portfolio",
          body: "You don't enter a list of bets. You gain two co-builders — Angel on operations, finance, tech and process; Stivens on growth, marketing, sales and BD. Both obsessed with product and AI.",
        },
        {
          title: "Operate + grow, both at once",
          body: "Operating without sales is a hobby. Growth without process is chaos. We install both from day one — automated processes, growth strategy and a system that compounds.",
        },
        {
          title: "LatAm has its own rules",
          body: "We don't copy-paste Valley playbooks. The same model lands differently in Bogotá, Mexico City and São Paulo. We design for how our people actually think and connect.",
        },
        {
          title: "An epic moment to build",
          body: "AI democratised creation. The bar for what one person — or two co-founders, or a solopreneur — can build has collapsed. We think big and back people who do too.",
        },
      ],
    },
    focus: {
      title: "We're industry-agnostic. We're obsessed with product and AI.",
      lede: "Show us a real problem and a path to a scalable product. The sector is a detail.",
      items: [
        {
          tag: "01",
          title: "Product & AI as substrate",
          body: "We build with agents (OpenClaw). We join founders who treat AI as the foundation of the product, not a sprinkle on top.",
        },
        {
          tag: "02",
          title: "Operating system in place",
          body: "Automated processes, finance discipline, hiring playbooks, ops that scale. The boring layer that lets growth actually compound.",
        },
        {
          tag: "03",
          title: "Growth that earns its name",
          body: "Distribution strategy, GTM, sales motion, content engine. Growth becomes optional once the rails are laid — and we lay them with you.",
        },
        {
          tag: "04",
          title: "LatAm-native, global-bound",
          body: "Born and built across LatAm. We route talent, capital and customers between hemispheres and design for the region's particular shape.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      lede: "Companies we founded ourselves, and projects we co-founded with people we love building with.",
      companiesTag: "Companies",
      projectsTag: "Projects",
      foundedBadge: "Founded",
      cofoundedBadge: "Co-founded",
      stealthBadge: "Stealth",
    },
    team: {
      title: "Two brothers. One operating system.",
      lede: "Angel and Stivens — different talents, same obsession: turning ideas into real, scaling products.",
    },
    build: {
      eyebrow: "Build with us",
      title: "You have the idea. We become the team.",
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
      step3: "Edit, approve, and it lands with Angel & Stivens.",
    },
    footer: {
      tagline: "Botto · Turning ideas into real businesses, from Latin America.",
      rights: "All rights reserved.",
    },
    lang: { label: "Language", en: "EN", es: "ES" },
  },
  es: {
    nav: {
      dna: "ADN",
      focus: "Foco",
      portfolio: "Portafolio",
      team: "Equipo",
      build: "Construye con nosotros",
    },
    hero: {
      eyebrow: "Botto · Family Office",
      title: "Las ideas mueren en slides. Nosotros las hacemos reales.",
      subtitle:
        "Estamos hechos para crear. Dos hermanos — operación y growth — que se suman al fundador para llevar la idea de cero a producto real, ingresos reales y escala real.",
      cta: "Cómo trabajamos",
      scrollHint: "Nuestro ADN",
    },
    dna: {
      title: "No fondeamos. Nos sumamos al equipo.",
      lede: "Operadores y growth-builders en la trinchera del fundador. Nuestras cicatrices, tu idea, un solo equipo.",
      items: [
        {
          title: "Equipo, no portafolio",
          body: "No entras a una lista de apuestas. Ganas dos co-constructores — Angel en operación, finanzas, tecnología y procesos; Stivens en growth, marketing, ventas y BD. Ambos obsesionados con producto e IA.",
        },
        {
          title: "Operar + crecer, al mismo tiempo",
          body: "Operar sin ventas es un hobby. Crecer sin procesos es caos. Instalamos las dos cosas desde el día uno — procesos automáticos, estrategia de growth y un sistema que componga.",
        },
        {
          title: "LatAm tiene sus propias reglas",
          body: "No copiamos manuales del Valley. El mismo modelo aterriza diferente en Bogotá, CDMX y São Paulo. Diseñamos para cómo nuestra gente realmente piensa y se conecta.",
        },
        {
          title: "Un momento épico para construir",
          body: "La IA democratizó la creación. Lo que una persona — o dos hermanos, o un solopreneur — puede construir hoy es radicalmente más. Pensamos en grande y respaldamos a los que también.",
        },
      ],
    },
    focus: {
      title: "Somos agnósticos de industria. Obsesionados con producto e IA.",
      lede: "Muéstranos un problema real y un camino a un producto escalable. El sector es un detalle.",
      items: [
        {
          tag: "01",
          title: "Producto e IA como sustrato",
          body: "Construimos con agentes (OpenClaw). Nos sumamos a fundadores que tratan la IA como el cimiento del producto, no como un adorno.",
        },
        {
          tag: "02",
          title: "Sistema operativo en sitio",
          body: "Procesos automatizados, disciplina financiera, playbooks de contratación, operación que escala. La capa aburrida que hace que el growth realmente componga.",
        },
        {
          tag: "03",
          title: "Growth que se gana el nombre",
          body: "Estrategia de distribución, GTM, motion de ventas, motor de contenido. El crecimiento se vuelve opcional cuando los rieles están — y los ponemos contigo.",
        },
        {
          tag: "04",
          title: "LatAm-nativo, global por diseño",
          body: "Nacidos y construidos en LatAm. Conectamos talento, capital y clientes entre hemisferios y diseñamos para la forma particular de nuestra región.",
        },
      ],
    },
    portfolio: {
      title: "Portafolio",
      lede: "Compañías que fundamos nosotros, y proyectos que co-fundamos con gente con la que amamos construir.",
      companiesTag: "Compañías",
      projectsTag: "Proyectos",
      foundedBadge: "Fundada",
      cofoundedBadge: "Co-fundada",
      stealthBadge: "Stealth",
    },
    team: {
      title: "Dos hermanos. Un sistema operativo.",
      lede: "Angel y Stivens — talentos distintos, misma obsesión: convertir ideas en productos reales que escalan.",
    },
    build: {
      eyebrow: "Construye con nosotros",
      title: "Tú tienes la idea. Nosotros nos volvemos el equipo.",
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
      step3: "Editas, apruebas y aterriza con Angel y Stivens.",
    },
    footer: {
      tagline: "Botto · Convirtiendo ideas en negocios reales, desde Latinoamérica.",
      rights: "Todos los derechos reservados.",
    },
    lang: { label: "Idioma", en: "EN", es: "ES" },
  },
} as const;

export type Dict = (typeof dict)[Locale];
