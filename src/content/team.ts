import type { Locale } from "@/lib/i18n";

type L10n = Record<Locale, string>;

export type Partner = {
  slug: string;
  name: string;
  role: L10n;
  bio: L10n;
  linkedin?: string;
  twitter?: string;
};

export const partners: Partner[] = [
  {
    slug: "angel",
    name: "Angel Celis Botto",
    role: {
      en: "Operating Partner",
      es: "Operating Partner",
      pt: "Operating Partner",
    },
    bio: {
      en: "Operating partner across the Botto portfolio with a focus on operations, finance, technology and process. Founded Liftit (B2B logistics, scaled across LatAm) and built OpenClaw, an agentic AI runtime. 15+ years shipping product and designing the operating systems that let companies outgrow their founders without breaking.",
      es: "Operating partner del portafolio Botto con foco en operación, finanzas, tecnología y procesos. Fundó Liftit (logística B2B, escalada en LatAm) y construyó OpenClaw, un runtime de agentes IA. +15 años enviando producto y diseñando los sistemas operativos que permiten a las compañías crecer más allá de su fundador sin romperse.",
      pt: "Operating partner do portfólio Botto com foco em operação, finanças, tecnologia e processos. Fundou a Liftit (logística B2B, escalada na América Latina) e construiu o OpenClaw, um runtime de agentes IA. +15 anos enviando produto e desenhando os sistemas operacionais que permitem às empresas crescerem além do seu fundador sem quebrar.",
    },
    linkedin: "https://linkedin.com/in/bottico",
    twitter: "https://x.com/bottico",
  },
  {
    slug: "stivens",
    name: "Stivens Gómez Botto",
    role: {
      en: "Growth Partner",
      es: "Growth Partner",
      pt: "Growth Partner",
    },
    bio: {
      en: "Innovative, data-driven Growth Manager with a strong focus on sales and marketing. 7+ years leading growth initiatives and cross-functional teams across technology, design, marketing, sales, data and analytics. His approach is rooted in a deep passion for understanding user needs — running experiments to validate hypotheses, designing customer acquisition strategies, building sustainable retention models, and developing financially viable monetization plans for every product he oversees.",
      es: "Growth Manager innovador y data-driven, con foco en ventas y marketing. +7 años liderando iniciativas de growth y equipos cross-funcionales en tecnología, diseño, marketing, ventas, data y analytics. Su enfoque parte de una pasión profunda por entender al usuario — ejecuta experimentos para validar hipótesis, diseña estrategias de adquisición, construye modelos sostenibles de retención y desarrolla planes de monetización financieramente viables para cada producto que lidera.",
      pt: "Growth Manager inovador e data-driven, com foco em vendas e marketing. +7 anos liderando iniciativas de growth e equipes cross-funcionais em tecnologia, design, marketing, vendas, data e analytics. Sua abordagem parte de uma paixão profunda por entender o usuário — executa experimentos para validar hipóteses, desenha estratégias de aquisição, constrói modelos sustentáveis de retenção e desenvolve planos de monetização financeiramente viáveis para cada produto que lidera.",
    },
  },
];
