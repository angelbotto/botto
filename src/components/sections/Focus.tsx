"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CardVisual } from "@/components/CardVisual";

export function Focus() {
  const { t } = useLocale();
  return (
    <section id="focus" className="relative py-32 lg:py-48 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="02 · Our Focus"
          title={t.focus.title}
          lede={t.focus.lede}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {t.focus.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="space-y-5 group">
              <CardVisual variant={((i + 2) % 4) as 0 | 1 | 2 | 3} />
              <div className="space-y-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                <p className="text-text-muted leading-relaxed text-pretty">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
