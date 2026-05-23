export type Partner = {
  slug: string;
  name: string;
  role: { en: string; es: string };
  superpower: { en: string; es: string };
  bio: { en: string; es: string };
  linkedin?: string;
  twitter?: string;
};

export const partners: Partner[] = [
  {
    slug: "angel",
    name: "Angel Celis Botto",
    role: { en: "Founder · Operations & Tech", es: "Fundador · Operación y Tech" },
    superpower: {
      en: "Operations, finance, tech, process",
      es: "Operación, finanzas, tecnología, procesos",
    },
    bio: {
      en: "Founded Liftit (B2B logistics, scaled across LatAm). Builds OpenClaw, an agentic AI runtime. 15+ years shipping product, designing operating systems, and making the boring layer of a company work so growth can compound.",
      es: "Fundó Liftit (logística B2B, escalada en LatAm). Construye OpenClaw, un runtime de agentes IA. +15 años enviando producto, diseñando sistemas operativos y haciendo que la capa aburrida de la compañía funcione para que el growth componga.",
    },
    linkedin: "https://linkedin.com/in/bottico",
    twitter: "https://x.com/bottico",
  },
  {
    slug: "stivens",
    name: "Stivens Gómez Botto",
    role: { en: "Founder · Growth & BD", es: "Fundador · Growth y BD" },
    superpower: {
      en: "Growth, marketing, sales, business development",
      es: "Growth, marketing, ventas, business development",
    },
    bio: {
      en: "Builds the growth engine across every Botto company — distribution, GTM, sales motion, partnerships. Turns operating discipline into compounding revenue, in LatAm and beyond.",
      es: "Construye el motor de growth en cada compañía Botto — distribución, GTM, motion de ventas, alianzas. Convierte la disciplina operativa en ingresos que componen, en LatAm y más allá.",
    },
  },
];
