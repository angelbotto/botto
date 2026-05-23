export type Locale = "en" | "es";
export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export const dict = {
  en: {
    nav: {
      dna: "Our DNA",
      focus: "Our Focus",
      portfolio: "Portfolio",
      team: "Team",
      build: "Build with us",
    },
    hero: {
      eyebrow: "Botto Capital — Family Office",
      title: "We don't invest. We co-create.",
      subtitle:
        "Operator-led family office that co-founds and executes category-defining tech companies across Latin America — with founders, not just capital.",
      cta: "Our Focus",
      scrollHint: "Our DNA",
    },
    dna: {
      title: "Operator-built. Founder-first. Long horizon.",
      lede: "Three traits that shape every decision and every company we touch.",
      items: [
        {
          title: "Operators, Not Spectators",
          body: "We have founded and scaled real companies. We ship code, recruit, sell and operate alongside founders — from day zero through scale.",
        },
        {
          title: "Founder-First, Always",
          body: "Capital is the easy part. We back people, share scars, defend the long game and let founders keep control of their narrative and their cap table.",
        },
        {
          title: "Long Horizons, No Churn",
          body: "We don't ride trends. We compound across decades, across cycles, and stay around long after the round closes.",
        },
        {
          title: "LatAm-Native, Globally Bound",
          body: "Born and built in Latin America. We design for global scale from day one and route talent, capital and customers across hemispheres.",
        },
      ],
    },
    focus: {
      title: "We back founders who build the real things.",
      lede: "Categories where we have scars, networks and unfair insight.",
      items: [
        {
          tag: "01",
          title: "Logistics & Industrial Tech",
          body: "Physical movement of goods, freight rails, last-mile infrastructure. Companies that touch atoms, not just bits. Where Liftit was born.",
        },
        {
          tag: "02",
          title: "Fintech & Programmable Money",
          body: "Multi-currency rails, embedded credit, crypto-native accounts. Infrastructure that unlocks dormant LatAm GDP.",
        },
        {
          tag: "03",
          title: "AI-Native Products",
          body: "We build with agents (OpenClaw) and back founders who treat AI as the substrate, not the feature.",
        },
        {
          tag: "04",
          title: "Creator & Cultural Economy",
          body: "Tools, platforms and IP that reshape how Latin creators, makers and culture monetize globally.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      lede: "Companies we have founded, co-founded and operate. Projects we are building right now.",
      companiesTag: "Companies",
      projectsTag: "Projects",
      foundedBy: "Founded by",
      cofounded: "Co-founded",
    },
    team: {
      title: "The people behind Botto Capital.",
      lede: "Two general partners. One mission: co-create the next generation of Latin tech.",
    },
    build: {
      eyebrow: "Build with us",
      title: "Tell us your idea. We build it with you.",
      lede:
        "We don't write checks for slide decks. Tell us what you want to build — our AI sharpens your narrative, and we read every submission ourselves.",
      placeholder:
        "What do you want to build? Who hurts most without it? What's your unfair edge? Write rough — we sharpen together.",
      improve: "Sharpen with AI",
      improving: "Sharpening…",
      improved: "Here's a sharper version. Edit freely.",
      send: "Send to Botto",
      sending: "Sending…",
      sent: "Got it. We read every submission. Expect a reply within 5 business days.",
      error: "Something went wrong. Try again or email us directly.",
      nameLabel: "Your name",
      emailLabel: "Email",
      companyLabel: "Company (optional)",
      ideaLabel: "Your idea",
      directTitle: "Other inquiries",
      directBody: "Press, partnerships, hiring — anything else.",
      directCta: "Email us directly",
      howItWorks: "How it works",
      step1: "Write your idea — rough is fine.",
      step2: "Our AI rewrites it as a sharp pitch.",
      step3: "Edit, approve, and it lands with Angel & Stivens.",
    },
    footer: {
      tagline: "Botto Capital · Co-creating the future of Latin tech.",
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
      eyebrow: "Botto Capital — Family Office",
      title: "No invertimos. Co-creamos.",
      subtitle:
        "Family office liderado por operadores que co-funda y ejecuta compañías tecnológicas en Latinoamérica — junto a los fundadores, no solo con capital.",
      cta: "Nuestro Foco",
      scrollHint: "Nuestro ADN",
    },
    dna: {
      title: "Operadores. Fundadores primero. Horizonte largo.",
      lede: "Tres rasgos que definen cada decisión y cada compañía que tocamos.",
      items: [
        {
          title: "Operadores, no espectadores",
          body: "Hemos fundado y escalado compañías reales. Enviamos código, reclutamos, vendemos y operamos junto al fundador — desde el día cero hasta la escala.",
        },
        {
          title: "Fundador primero, siempre",
          body: "El capital es lo fácil. Respaldamos personas, compartimos cicatrices, defendemos el largo plazo y dejamos al fundador con el control de su narrativa y su cap table.",
        },
        {
          title: "Largo plazo, sin ruido",
          body: "No surfeamos tendencias. Componemos junto al fundador por décadas, atravesamos ciclos y nos quedamos mucho después de que cierre la ronda.",
        },
        {
          title: "LatAm de origen, global por diseño",
          body: "Nacidos y construidos en Latinoamérica. Diseñamos para escala global desde el día uno y conectamos talento, capital y clientes entre hemisferios.",
        },
      ],
    },
    focus: {
      title: "Respaldamos fundadores que construyen lo real.",
      lede: "Categorías donde tenemos cicatrices, red y ventajas injustas.",
      items: [
        {
          tag: "01",
          title: "Logística & Tech Industrial",
          body: "Movimiento físico de bienes, rieles de carga, infraestructura de última milla. Compañías que tocan átomos, no solo bits. La cuna de Liftit.",
        },
        {
          tag: "02",
          title: "Fintech & Dinero Programable",
          body: "Rieles multimoneda, crédito embebido, cuentas cripto-nativas. Infraestructura que libera el PIB dormido de LatAm.",
        },
        {
          tag: "03",
          title: "Productos AI-Native",
          body: "Construimos con agentes (OpenClaw) y respaldamos a fundadores que tratan la IA como sustrato, no como feature.",
        },
        {
          tag: "04",
          title: "Economía Creadora & Cultural",
          body: "Herramientas, plataformas y propiedad intelectual que rediseñan cómo los creadores, makers y cultura latina monetizan globalmente.",
        },
      ],
    },
    portfolio: {
      title: "Portafolio",
      lede: "Compañías que hemos fundado, co-fundado y operamos. Proyectos que estamos construyendo ahora mismo.",
      companiesTag: "Compañías",
      projectsTag: "Proyectos",
      foundedBy: "Fundada por",
      cofounded: "Co-fundada",
    },
    team: {
      title: "Las personas detrás de Botto Capital.",
      lede: "Dos general partners. Una misión: co-crear la próxima generación de tecnología latina.",
    },
    build: {
      eyebrow: "Construye con nosotros",
      title: "Cuéntanos tu idea. La construimos juntos.",
      lede:
        "No giramos cheques sobre slide decks. Cuéntanos qué quieres construir — nuestra IA afila tu narrativa, y nosotros leemos cada envío en persona.",
      placeholder:
        "¿Qué quieres construir? ¿Quién sufre más sin esto? ¿Cuál es tu ventaja injusta? Escribe en bruto — afilamos juntos.",
      improve: "Afilar con IA",
      improving: "Afilando…",
      improved: "Aquí va una versión más afilada. Edítala libremente.",
      send: "Enviar a Botto",
      sending: "Enviando…",
      sent: "Recibido. Leemos cada envío. Espera respuesta en 5 días hábiles.",
      error: "Algo salió mal. Intenta de nuevo o escríbenos directo.",
      nameLabel: "Tu nombre",
      emailLabel: "Correo",
      companyLabel: "Compañía (opcional)",
      ideaLabel: "Tu idea",
      directTitle: "Otros temas",
      directBody: "Prensa, alianzas, contratación — cualquier otra cosa.",
      directCta: "Escríbenos directo",
      howItWorks: "Cómo funciona",
      step1: "Escribe tu idea — en bruto está bien.",
      step2: "Nuestra IA la reescribe como un pitch afilado.",
      step3: "Editas, apruebas y aterriza con Angel y Stivens.",
    },
    footer: {
      tagline: "Botto Capital · Co-creando el futuro de la tecnología latina.",
      rights: "Todos los derechos reservados.",
    },
    lang: { label: "Idioma", en: "EN", es: "ES" },
  },
} as const;

export type Dict = (typeof dict)[Locale];
