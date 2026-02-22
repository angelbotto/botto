import { TypewriterTitle } from "./TypewriterTitle";
import { Subtitle } from "./Subtitle";
import { ScrollIndicator } from "@/components/ScrollIndicator";

interface HeroProps {
  started: boolean;
}

export function Hero({ started }: HeroProps) {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5">
      <div className="w-[50px] h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mb-[18px] opacity-0 animate-[fadeIn_1s_ease_2s_forwards]" />
      <TypewriterTitle started={started} />
      <Subtitle />
      <ScrollIndicator />
    </section>
  );
}
