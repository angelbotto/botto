"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { HeroBackground } from "@/components/HeroBackground";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl space-y-7"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-neon animate-pulse-glow" />
            {t.hero.eyebrow}
          </div>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-balance">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="pt-4">
            <a
              href="#dna"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[15px] font-medium text-black transition-all hover:bg-fuchsia-neon hover:text-white hover:scale-[1.02]"
            >
              {t.hero.cta}
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#dna"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-faint hover:text-text transition-colors"
        aria-label={t.hero.scrollHint}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          {t.hero.scrollHint}
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-scroll-hint" />
      </a>
    </section>
  );
}
