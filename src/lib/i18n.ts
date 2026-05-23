export type Locale = "en" | "es" | "pt";
export const LOCALES: Locale[] = ["en", "es", "pt"];
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
          title: "Conviction over diversification.",
          body: "Few bets. Deep presence. We don't spray capital across a portfolio — we sit in the operating chair of every company we put our name behind.",
        },
        {
          title: "The system is the moat.",
          body: "Product, operations, automated process and growth strategy live as a single engine. Growth only compounds when the operating system is already in place. We install both, in parallel, from day zero.",
        },
        {
          title: "Latin America has its own grammar.",
          body: "The same model lands differently in Bogotá, Mexico City and São Paulo. We don't translate Silicon Valley manuals — we design from how our region thinks, sells and connects.",
        },
        {
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
          title: "Product · AI · Blockchain as substrate",
          body: "We build with agents (OpenClaw) and back products where AI and on-chain rails are the foundation, not features. Interface, moat and unit economics — all reshaped by them.",
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
    lang: { label: "Language", en: "EN", es: "ES", pt: "PT" },
    theme: { label: "Theme", light: "Light", dark: "Dark" },
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
          title: "Convicción sobre diversificación.",
          body: "Pocas apuestas. Presencia profunda. No esparcimos capital en un portafolio — nos sentamos en la silla operativa de cada compañía donde ponemos el nombre.",
        },
        {
          title: "El sistema es el moat.",
          body: "Producto, operación, procesos automáticos y estrategia de growth viven como un solo motor. El crecimiento solo compone cuando el sistema operativo ya está en sitio. Instalamos ambos, en paralelo, desde el día cero.",
        },
        {
          title: "Latinoamérica tiene su propia gramática.",
          body: "El mismo modelo aterriza diferente en Bogotá, CDMX y São Paulo. No traducimos manuales del Valley — diseñamos desde cómo nuestra región piensa, vende y se conecta.",
        },
        {
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
          title: "Producto · IA · Blockchain como sustrato",
          body: "Construimos con agentes (OpenClaw) y respaldamos productos donde la IA y los rieles on-chain son cimiento, no features. Interfaz, moat y unit economics — todo se reescribe con ellos.",
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
    lang: { label: "Idioma", en: "EN", es: "ES", pt: "PT" },
    theme: { label: "Tema", light: "Claro", dark: "Oscuro" },
  },
  pt: {
    nav: {
      dna: "DNA",
      focus: "Foco",
      portfolio: "Portfólio",
      team: "Partners",
      build: "Construa conosco",
    },
    hero: {
      eyebrow: "Botto · Family Office",
      title: "Ideias morrem em slides. Nós as tornamos reais.",
      subtitle:
        "Family office que entra como partner operacional e de growth, levando ideias do zero ao produto escalado — desenhado na América Latina, construído para o mundo.",
      cta: "Como trabalhamos",
      scrollHint: "Nosso DNA",
    },
    dna: {
      title: "Nosso DNA",
      lede: "Quatro convicções que decidem cada empresa que tocamos.",
      items: [
        {
          title: "Convicção acima de diversificação.",
          body: "Poucas apostas. Presença profunda. Não pulverizamos capital num portfólio — sentamos na cadeira operacional de cada empresa onde colocamos o nome.",
        },
        {
          title: "O sistema é o moat.",
          body: "Produto, operação, processos automatizados e estratégia de growth vivem como um único motor. O crescimento só compõe quando o sistema operacional já está no lugar. Instalamos os dois, em paralelo, desde o dia zero.",
        },
        {
          title: "A América Latina tem sua própria gramática.",
          body: "O mesmo modelo aterrissa diferente em Bogotá, Cidade do México e São Paulo. Não traduzimos manuais do Vale — projetamos a partir de como nossa região pensa, vende e se conecta.",
        },
        {
          title: "A janela da IA.",
          body: "A barreira de criação colapsou. Estamos dentro da melhor janela da história para construir daqui. Pensamos grande e apoiamos quem também pensa.",
        },
      ],
    },
    focus: {
      title: "Agnósticos de indústria. Obcecados por produto e IA.",
      lede: "Não escolhemos setores — escolhemos problemas com caminho a produto escalável. A categoria é um detalhe.",
      items: [
        {
          tag: "01",
          title: "Produto · IA · Blockchain como substrato",
          body: "Construímos com agentes (OpenClaw) e apoiamos produtos onde a IA e os trilhos on-chain são fundação, não features. Interface, moat e unit economics — tudo é reescrito por eles.",
        },
        {
          tag: "02",
          title: "Um sistema operacional que escala",
          body: "Processos automatizados, disciplina financeira, playbooks de contratação, infraestrutura de ops. A camada pouco glamourosa que permite a uma empresa crescer além do seu fundador sem quebrar.",
        },
        {
          tag: "03",
          title: "Growth como motor instalado",
          body: "Estratégia de distribuição, GTM, motion de vendas, infraestrutura de conteúdo, modelos de retenção, monetização. O crescimento deixa de ser esperança e vira sistema.",
        },
        {
          tag: "04",
          title: "Fluência regional, escala global",
          body: "Projetamos para a forma particular da LatAm, depois conectamos talento, capital e clientes entre hemisférios. Verdade local, ambição global.",
        },
      ],
    },
    portfolio: {
      title: "Portfólio",
      lede: "Empresas fundadas pela Botto e projetos que co-fundamos junto a builders nos quais acreditamos.",
      companiesTag: "Empresas",
      projectsTag: "Projetos",
      foundedBadge: "Fundada",
      cofoundedBadge: "Co-fundada",
      stealthBadge: "Stealth",
    },
    team: {
      title: "Partners",
      lede: "As pessoas por trás de cada empresa Botto. Operadores, builders e craftspeople sentados na cadeira, não no banco.",
    },
    build: {
      eyebrow: "Construa conosco",
      title: "Você traz a ideia. Nós trazemos o sistema operacional.",
      lede:
        "Não assinamos cheques em cima de slides. Traga um problema que você não consegue parar de pensar — nossa IA afia a narrativa, lemos cada palavra em pessoa, e se fizer sentido sentamos à mesa desde o dia um.",
      placeholder:
        "Que problema te obceca? Quem sofre mais? O que você construiria primeiro? Escreva no rascunho — afiamos juntos.",
      improve: "Afiar com IA",
      improving: "Afiando…",
      improved: "Aqui vai uma versão mais afiada. Edite à vontade.",
      send: "Enviar à Botto",
      sending: "Enviando…",
      sent: "Recebido. Lemos cada envio em pessoa. Espere uma resposta em 5 dias úteis.",
      error: "Algo deu errado. Tente de novo ou escreva direto.",
      nameLabel: "Seu nome",
      emailLabel: "E-mail",
      companyLabel: "Projeto ou empresa (opcional)",
      ideaLabel: "O que você quer construir",
      directTitle: "Outros assuntos",
      directBody: "Imprensa, parcerias, contratação — qualquer outra coisa.",
      directCta: "Escreva direto",
      howItWorks: "Como funciona",
      step1: "Escreva sua ideia — rascunho está bom.",
      step2: "Nossa IA reescreve como um pitch afiado.",
      step3: "Edita, aprova, e chega aos partners.",
    },
    footer: {
      tagline: "Botto · Family office que transforma ideias em negócios reais que escalam.",
      rights: "Todos os direitos reservados.",
    },
    lang: { label: "Idioma", en: "EN", es: "ES", pt: "PT" },
    theme: { label: "Tema", light: "Claro", dark: "Escuro" },
  },
} as const;

export type Dict = (typeof dict)[Locale];
