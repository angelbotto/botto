"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { HeroBackground } from "@/components/HeroBackground";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden border-b border-line"
    >
      <HeroBackground />

      <motion.div
        style={{ y: reduce ? 0 : heroY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32"
      >
        <motion.div
          initial={reduce ? false : { y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 1, 0.32, 1] }}
          className="max-w-3xl space-y-7"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-neon animate-pulse-glow" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 1, 0.32, 1] }}
            className="text-[2.5rem] sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-balance"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed text-pretty"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton href="#dna">
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <a
              href="#build"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted hover:text-white transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
            >
              <span className="relative">
                {t.nav.build}
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-fuchsia-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] origin-left" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 -translate-x-0.5 group-hover:translate-x-0.5 transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)]" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        style={{ opacity: fade }}
        href="#dna"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-faint hover:text-text transition-colors"
        aria-label={t.hero.scrollHint}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          {t.hero.scrollHint}
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-scroll-hint" />
      </motion.a>
    </section>
  );
}
