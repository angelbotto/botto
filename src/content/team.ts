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
    role: { en: "General Partner", es: "General Partner" },
    bio: {
      en: "Founder of Liftit (B2B logistics, raised >$80M across LatAm). Builder of OpenClaw, an agentic AI runtime. Active operator who has shipped, recruited and sold across hard-tech, fintech and AI for 15+ years.",
      es: "Fundador de Liftit (logística B2B, +$80M levantados en LatAm). Constructor de OpenClaw, un runtime de agentes IA. Operador activo que ha enviado producto, reclutado y vendido en hard-tech, fintech e IA por más de 15 años.",
    },
    linkedin: "https://linkedin.com/in/bottico",
    twitter: "https://x.com/bottico",
  },
  {
    slug: "stivens",
    name: "Stivens Gómez Botto",
    role: { en: "General Partner", es: "General Partner" },
    bio: {
      en: "Add real bio.",
      es: "Agregar biografía real.",
    },
  },
];
