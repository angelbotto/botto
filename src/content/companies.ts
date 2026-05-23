import type { Locale } from "@/lib/i18n";

type L10n = Record<Locale, string>;

export type Entity = {
  slug: string;
  name: string;
  role: "founded" | "cofounded";
  year?: number;
  url?: string;
  status?: "live" | "stealth";
  tagline: L10n;
  sector: L10n;
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
      pt: "Plataforma B2B de frete middle-mile que move a economia industrial da América Latina.",
    },
    sector: { en: "Logistics", es: "Logística", pt: "Logística" },
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
      pt: "Plataforma de dinheiro global — contas multimoeda, cartões e cripto sem fronteiras.",
    },
    sector: { en: "Fintech", es: "Fintech", pt: "Fintech" },
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
      pt: "A forma mais fácil de ganhar dinheiro na internet.",
    },
    sector: {
      en: "Creator Economy",
      es: "Economía Creadora",
      pt: "Economia Criadora",
    },
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
      pt: "Colecionáveis digitais onde cada drop tem um ganhador garantido.",
    },
    sector: { en: "Web3", es: "Web3", pt: "Web3" },
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
      pt: "Construindo em privado. Em breve mais.",
    },
    sector: { en: "Stealth", es: "Stealth", pt: "Stealth" },
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
      pt: "Construindo em privado. Em breve mais.",
    },
    sector: { en: "Stealth", es: "Stealth", pt: "Stealth" },
  },
];
