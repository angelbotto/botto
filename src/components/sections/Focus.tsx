"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { CardVisual } from "@/components/CardVisual";

export function Focus() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  return (
    <section
      id="focus"
      className="relative py-32 lg:py-44 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="02 · Focus"
          title={t.focus.title}
          lede={t.focus.lede}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {t.focus.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduce ? false : { y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0, margin: "200px 0px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.21, 1, 0.32, 1],
              }}
              className="group space-y-5 cursor-default"
            >
              <CardVisual variant={((i + 2) % 4) as 0 | 1 | 2 | 3} />
              <div className="space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
                    {item.tag}
                  </span>
                  <span className="h-px flex-1 bg-line group-hover:bg-line-strong transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]" />
                </div>
                <h3 className="text-2xl lg:text-[1.6rem] font-medium tracking-tight leading-snug group-hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-pretty">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
