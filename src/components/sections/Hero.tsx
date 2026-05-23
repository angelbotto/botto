"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <BackgroundLayer />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-neon/30 bg-fuchsia-neon/[0.06] px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-fuchsia-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-neon animate-pulse-glow" />
            {t.hero.eyebrow}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance">
            {t.hero.title}
          </h1>

          <p className="text-xl text-text-muted max-w-2xl leading-relaxed text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#connect">
              <Button variant="primary" size="lg">
                <Sparkles className="h-4 w-4" />
                {t.hero.ctaPrimary}
              </Button>
            </a>
            <a href="#investments">
              <Button variant="outline" size="lg">
                {t.hero.ctaSecondary}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="pt-12 font-mono text-[11px] uppercase tracking-[0.25em] text-text-faint">
            {t.hero.runner}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundLayer() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 border-grid mask-fade-edges opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-[640px] w-[640px] rounded-full bg-fuchsia-neon/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-[480px] w-[480px] rounded-full bg-violet-neon/15 blur-[140px]"
      />
    </>
  );
}
