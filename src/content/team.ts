export type Partner = {
  slug: string;
  name: string;
  role: { en: string; es: string };
  bio: { en: string; es: string };
  linkedin?: string;
  twitter?: string;
};

export const partners: Partner[] = [
  {
    slug: "angel",
    name: "Angel Celis Botto",
    role: { en: "Operating Partner", es: "Operating Partner" },
    bio: {
      en: "Operating partner across the Botto portfolio with a focus on operations, finance, technology and process. Founded Liftit (B2B logistics, scaled across LatAm) and built OpenClaw, an agentic AI runtime. 15+ years shipping product and designing the operating systems that let companies outgrow their founders without breaking.",
      es: "Operating partner del portafolio Botto con foco en operación, finanzas, tecnología y procesos. Fundó Liftit (logística B2B, escalada en LatAm) y construyó OpenClaw, un runtime de agentes IA. +15 años enviando producto y diseñando los sistemas operativos que permiten a las compañías crecer más allá de su fundador sin romperse.",
    },
    linkedin: "https://linkedin.com/in/bottico",
    twitter: "https://x.com/bottico",
  },
  {
    slug: "stivens",
    name: "Stivens Gómez Botto",
    role: { en: "Growth Partner", es: "Growth Partner" },
    bio: {
      en: "Innovative, data-driven Growth Manager with a strong focus on sales and marketing. 7+ years leading growth initiatives and cross-functional teams across technology, design, marketing, sales, data and analytics. His approach is rooted in a deep passion for understanding user needs — running experiments to validate hypotheses, designing customer acquisition strategies, building sustainable retention models, and developing financially viable monetization plans for every product he oversees.",
      es: "Growth Manager innovador y data-driven, con foco en ventas y marketing. +7 años liderando iniciativas de growth y equipos cross-funcionales en tecnología, diseño, marketing, ventas, data y analytics. Su enfoque parte de una pasión profunda por entender al usuario — ejecuta experimentos para validar hipótesis, diseña estrategias de adquisición, construye modelos sostenibles de retención y desarrolla planes de monetización financieramente viables para cada producto que lidera.",
    },
  },
];
