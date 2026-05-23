"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { CardVisual } from "@/components/CardVisual";

const VISUALS = ["orbit", "blueprint", "grid", "wave"] as const;

export function Focus() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  return (
    <section
      id="focus"
      className="relative py-32 lg:py-40 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="Our Focus"
          title={t.focus.title}
          lede={t.focus.lede}
          icon={<FocusIcon />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden max-w-6xl mx-auto">
          {t.focus.items.map((item, i) => {
            const visual = VISUALS[i % VISUALS.length];
            return (
              <motion.article
                key={item.title}
                initial={reduce ? false : { y: 14 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0, margin: "200px 0px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.21, 1, 0.32, 1],
                }}
                className="group relative flex flex-col bg-ink min-h-[440px] hover:bg-white/[0.015] transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
              >
                <CardVisual variant={visual} className="border-b border-line" />
                <div className="p-8 lg:p-10 space-y-3 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon mb-2">
                    {item.tag}
                  </div>
                  <h3 className="text-xl lg:text-[1.45rem] font-medium tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FocusIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="6" cy="6" r="4.5" />
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="6" r="0.8" fill="currentColor" />
    </svg>
  );
}
