export type Locale = "en" | "es";
export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export const dict = {
  en: {
    nav: {
      dna: "Our DNA",
      focus: "Our Focus",
      investments: "Investments",
      team: "Team",
      connect: "Pitch us",
    },
    hero: {
      eyebrow: "Botto Capital — Family Office",
      title: "We build the companies we wish existed.",
      subtitle:
        "Operator-led family office backing and co-founding category-defining tech companies across Latin America and beyond.",
      ctaPrimary: "Pitch us your idea",
      ctaSecondary: "See what we back",
      runner: "Building since day one · Operators not spectators",
    },
    dna: {
      title: "Our DNA",
      lede: "We are founders first. Capital is a byproduct.",
      items: [
        {
          title: "Operator-Built",
          body: "We are active general partners who have founded and scaled real companies. We don't just write checks — we ship, recruit, sell and build alongside you.",
        },
        {
          title: "Idea-to-Reality",
          body: "Bring us a thesis, a wedge or a half-baked prototype. We help refine the narrative, validate the wedge and decide together if it deserves to exist.",
        },
        {
          title: "LatAm-Native, Global-Bound",
          body: "Born and built in Latin America. We understand the rails, the talent pool and the asymmetries. We design for global scale from day one.",
        },
        {
          title: "Long Conviction",
          body: "No churn capital, no quarterly noise. We compound with founders across decades and across cycles.",
        },
      ],
    },
    focus: {
      title: "Our Focus",
      lede: "Categories where we have built scars, networks and asymmetric insight.",
      items: [
        {
          tag: "01",
          title: "Logistics & Supply Chain",
          body: "Real-world movement of goods, freight and last-mile. Hard-tech that touches atoms, not just bits. (Liftit's DNA.)",
        },
        {
          tag: "02",
          title: "Fintech & Embedded Finance",
          body: "Programmable money, credit infrastructure and rails that unlock dormant LatAm GDP.",
        },
        {
          tag: "03",
          title: "AI-Native Products",
          body: "We build with agents (OpenClaw). We back founders who treat AI as the substrate, not the feature.",
        },
        {
          tag: "04",
          title: "Creator Economy & Cultural Tech",
          body: "Tools, platforms and IP that reshape how Latin culture monetises itself globally.",
        },
      ],
    },
    investments: {
      title: "Investments",
      lede: "Companies we've founded, co-founded or backed.",
      foundedBy: "Founded by",
      cofounded: "Co-founded",
      backed: "Backed",
    },
    team: {
      title: "Team",
      lede: "Two general partners. One mission.",
      board: "Board & Advisors",
      boardSoon: "Coming soon",
    },
    connect: {
      title: "Pitch us your idea",
      lede: "Have an idea, a thesis or a company? Drop it below. Our AI will help you sharpen the narrative — then it lands in our inbox.",
      placeholder:
        "What problem are you obsessed with? Who hurts most? What's your wedge? Write rough — we'll polish together.",
      improve: "Sharpen with AI",
      improving: "Sharpening…",
      improved: "Here's a sharper version. Edit freely.",
      send: "Send to Botto",
      sending: "Sending…",
      sent: "Got it. We read every pitch. Expect a reply within 5 business days.",
      error: "Something went wrong. Try again or email us directly.",
      nameLabel: "Your name",
      emailLabel: "Email",
      companyLabel: "Company (optional)",
      ideaLabel: "Your idea",
      directTitle: "Other inquiries",
      directBody: "Press, partnerships, hiring — anything else.",
      directCta: "Email us directly",
    },
    footer: {
      tagline: "Botto Capital · Building the future from Latin America.",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    lang: {
      label: "Language",
      en: "EN",
      es: "ES",
    },
  },
  es: {
    nav: {
      dna: "ADN",
      focus: "Foco",
      investments: "Inversiones",
      team: "Equipo",
      connect: "Pítchanos",
    },
    hero: {
      eyebrow: "Botto Capital — Family Office",
      title: "Construimos las compañías que quisiéramos que existieran.",
      subtitle:
        "Family office liderado por operadores que respalda y co-funda compañías de base tecnológica en Latinoamérica y el mundo.",
      ctaPrimary: "Pítchanos tu idea",
      ctaSecondary: "Mira qué construimos",
      runner: "Construyendo desde el día uno · Operadores, no espectadores",
    },
    dna: {
      title: "Nuestro ADN",
      lede: "Somos fundadores primero. El capital es consecuencia.",
      items: [
        {
          title: "Construido por operadores",
          body: "Somos general partners activos que han fundado y escalado compañías reales. No solo firmamos cheques — enviamos código, reclutamos, vendemos y construimos contigo.",
        },
        {
          title: "De idea a realidad",
          body: "Tráenos una tesis, un wedge o un prototipo a medio cocinar. Te ayudamos a afilar la narrativa, validar el ángulo y decidir juntos si merece existir.",
        },
        {
          title: "LatAm de origen, global por diseño",
          body: "Nacidos y construidos en Latinoamérica. Entendemos los rieles, el talento y las asimetrías. Diseñamos para escala global desde el día uno.",
        },
        {
          title: "Convicción larga",
          body: "Sin capital golondrina, sin ruido trimestral. Componemos junto a fundadores por décadas y a lo largo de ciclos.",
        },
      ],
    },
    focus: {
      title: "Nuestro Foco",
      lede: "Categorías donde tenemos cicatrices, red y ventajas asimétricas.",
      items: [
        {
          tag: "01",
          title: "Logística y Cadena de Suministro",
          body: "Movimiento real de bienes, carga y última milla. Hard-tech que toca átomos, no solo bits. (El ADN de Liftit.)",
        },
        {
          tag: "02",
          title: "Fintech & Finanzas Embebidas",
          body: "Dinero programable, infraestructura de crédito y rieles que liberan el PIB dormido de LatAm.",
        },
        {
          tag: "03",
          title: "Productos AI-Native",
          body: "Construimos con agentes (OpenClaw). Respaldamos a fundadores que tratan la IA como sustrato, no como feature.",
        },
        {
          tag: "04",
          title: "Economía Creadora & Cultura Tech",
          body: "Herramientas, plataformas y propiedad intelectual que rediseñan cómo la cultura latina se monetiza globalmente.",
        },
      ],
    },
    investments: {
      title: "Inversiones",
      lede: "Compañías que hemos fundado, co-fundado o respaldado.",
      foundedBy: "Fundada por",
      cofounded: "Co-fundada",
      backed: "Respaldada",
    },
    team: {
      title: "Equipo",
      lede: "Dos general partners. Una misión.",
      board: "Junta y Asesores",
      boardSoon: "Próximamente",
    },
    connect: {
      title: "Pítchanos tu idea",
      lede: "¿Tienes una idea, una tesis o una compañía? Escríbela. Nuestra IA te ayudará a afilar la narrativa — luego aterriza en nuestro inbox.",
      placeholder:
        "¿Qué problema te obsesiona? ¿Quién sufre más? ¿Cuál es tu ángulo? Escribe en bruto — pulimos juntos.",
      improve: "Afilar con IA",
      improving: "Afilando…",
      improved: "Aquí va una versión más afilada. Edítala libremente.",
      send: "Enviar a Botto",
      sending: "Enviando…",
      sent: "Recibido. Leemos cada pitch. Espera respuesta en 5 días hábiles.",
      error: "Algo salió mal. Intenta de nuevo o escríbenos directo.",
      nameLabel: "Tu nombre",
      emailLabel: "Correo",
      companyLabel: "Compañía (opcional)",
      ideaLabel: "Tu idea",
      directTitle: "Otros temas",
      directBody: "Prensa, alianzas, contratación — cualquier otra cosa.",
      directCta: "Escríbenos directo",
    },
    footer: {
      tagline: "Botto Capital · Construyendo el futuro desde Latinoamérica.",
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
    },
    lang: {
      label: "Idioma",
      en: "EN",
      es: "ES",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
