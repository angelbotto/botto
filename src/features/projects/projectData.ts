export interface Venture {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
}

export const ventures: Venture[] = [
  {
    id: "01",
    name: "Liftit",
    url: "https://liftit.co",
    description: "Logistics technology redefining freight across Latin America",
    icon: "truck",
  },
  {
    id: "02",
    name: "BEU",
    url: "https://beu.is",
    description: "Creator economy marketplace powering digital monetization",
    icon: "play",
  },
  {
    id: "03",
    name: "Tikin",
    url: "https://tikin.is",
    description: "Payment orchestration & cross-border fintech infrastructure",
    icon: "exchange",
  },
];
