"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { CardVisual } from "@/components/CardVisual";

const VISUALS = ["blueprint", "orbit", "rings", "grid"] as const;

export function DNA() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  return (
    <section
      id="dna"
      className="relative py-32 lg:py-40 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="Our DNA"
          title={t.dna.title}
          lede={t.dna.lede}
          icon={<DnaIcon />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden max-w-6xl mx-auto">
          {t.dna.items.map((item, i) => {
            const visual = VISUALS[i % VISUALS.length];
            const imageFirst = i === 1 || i === 2;
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
                className="group relative flex flex-col bg-ink min-h-[420px] hover:bg-white/[0.015] transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
              >
                {imageFirst ? (
                  <>
                    <CardVisual variant={visual} className="border-b border-line" />
                    <DnaBody item={item} />
                  </>
                ) : (
                  <>
                    <DnaBody item={item} />
                    <CardVisual variant={visual} className="border-t border-line mt-auto" />
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DnaBody({
  item,
}: {
  item: { title: string; body: string; tag?: string };
}) {
  return (
    <div className="p-8 lg:p-10 space-y-3 flex-1">
      <h3 className="text-xl lg:text-[1.45rem] font-medium tracking-tight leading-snug">
        {item.title}
      </h3>
      <p className="text-[15px] text-text-muted leading-relaxed text-pretty">
        {item.body}
      </p>
    </div>
  );
}

function DnaIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M2 1 Q 6 6 2 11" />
      <path d="M10 1 Q 6 6 10 11" />
      <line x1="3" y1="3.5" x2="9" y2="3.5" />
      <line x1="3" y1="6" x2="9" y2="6" />
      <line x1="3" y1="8.5" x2="9" y2="8.5" />
    </svg>
  );
}
