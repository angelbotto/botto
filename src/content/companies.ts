export type Entity = {
  slug: string;
  name: string;
  role: "founded" | "cofounded";
  year?: number;
  url?: string;
  status?: "live" | "stealth";
  tagline: { en: string; es: string };
  sector: { en: string; es: string };
};

export const companies: Entity[] = [
  {
    slug: "liftit",
    name: "Liftit",
    role: "founded",
    status: "live",
    year: 2017,
    url: "https://liftit.co",
    tagline: {
      en: "B2B middle-mile freight platform moving Latin America's industrial economy.",
      es: "Plataforma B2B de carga middle-mile que mueve la economía industrial de Latinoamérica.",
    },
    sector: { en: "Logistics", es: "Logística" },
  },
  {
    slug: "tikin",
    name: "Tikin",
    role: "founded",
    status: "live",
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
    role: "founded",
    status: "live",
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
    role: "cofounded",
    status: "live",
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
    role: "cofounded",
    status: "stealth",
    url: "https://catabum.com",
    tagline: {
      en: "Building in private. More soon.",
      es: "Construyendo en privado. Pronto más.",
    },
    sector: { en: "Stealth", es: "Stealth" },
  },
  {
    slug: "laperla",
    name: "La Perla",
    role: "cofounded",
    status: "stealth",
    url: "https://laperla.is",
    tagline: {
      en: "Building in private. More soon.",
      es: "Construyendo en privado. Pronto más.",
    },
    sector: { en: "Stealth", es: "Stealth" },
  },
];
