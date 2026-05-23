export type Entity = {
  slug: string;
  name: string;
  founder: "angel" | "stivens" | "both";
  year?: number;
  url?: string;
  tagline: { en: string; es: string };
  sector: { en: string; es: string };
};

export const companies: Entity[] = [
  {
    slug: "liftit",
    name: "Liftit",
    founder: "angel",
    year: 2017,
    url: "https://liftit.co",
    tagline: {
      en: "Middle-mile freight platform moving Latin America's industrial economy.",
      es: "Plataforma de carga middle-mile que mueve la economía industrial de Latinoamérica.",
    },
    sector: { en: "Logistics", es: "Logística" },
  },
  {
    slug: "tikin",
    name: "Tikin",
    founder: "both",
    year: 2024,
    url: "https://tikin.is",
    tagline: {
      en: "Global money platform — multi-currency accounts, cards and crypto without borders.",
      es: "Plataforma de dinero global — cuentas multimoneda, tarjetas y cripto sin fronteras.",
    },
    sector: { en: "Fintech", es: "Fintech" },
  },
  {
    slug: "beu",
    name: "Beu",
    founder: "both",
    year: 2014,
    url: "https://beu.app",
    tagline: {
      en: "The easiest way to earn money on the internet.",
      es: "La forma más fácil de hacer dinero en internet.",
    },
    sector: { en: "Creator Economy", es: "Economía Creadora" },
  },
];

export const projects: Entity[] = [
  {
    slug: "cobralo",
    name: "Cobralo",
    founder: "both",
    url: "https://cobralo.co",
    tagline: {
      en: "Digital collectibles where every drop has a guaranteed winner.",
      es: "Coleccionables digitales donde cada drop tiene un ganador garantizado.",
    },
    sector: { en: "Web3", es: "Web3" },
  },
  {
    slug: "catabum",
    name: "Catabum",
    founder: "both",
    tagline: {
      en: "Coming soon. Building in private.",
      es: "Pronto. En construcción.",
    },
    sector: { en: "Stealth", es: "Stealth" },
  },
  {
    slug: "laperla",
    name: "La Perla",
    founder: "both",
    tagline: {
      en: "Coming soon. Building in private.",
      es: "Pronto. En construcción.",
    },
    sector: { en: "Stealth", es: "Stealth" },
  },
];
