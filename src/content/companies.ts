export type CompanyRole = "founded" | "cofounded" | "backed";

export type Company = {
  slug: string;
  name: string;
  role: CompanyRole;
  founder: "angel" | "stivens" | "both";
  year?: number;
  url?: string;
  tagline: { en: string; es: string };
  sector: { en: string; es: string };
};

export const companies: Company[] = [
  {
    slug: "liftit",
    name: "Liftit",
    role: "founded",
    founder: "angel",
    year: 2017,
    url: "https://liftit.co",
    tagline: {
      en: "B2B freight platform for Latin America's middle-mile.",
      es: "Plataforma B2B de carga para el middle-mile latinoamericano.",
    },
    sector: { en: "Logistics", es: "Logística" },
  },
  {
    slug: "tikin",
    name: "Tikin",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "catabum",
    name: "Catabum",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "beu",
    name: "Beu",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "cobralo",
    name: "Cobralo",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "laperla",
    name: "La Perla",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "pollitos",
    name: "Pollitos",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
  {
    slug: "scout",
    name: "Scout",
    role: "cofounded",
    founder: "both",
    tagline: {
      en: "Add a real tagline.",
      es: "Agregar tagline real.",
    },
    sector: { en: "TBD", es: "Por definir" },
  },
];
