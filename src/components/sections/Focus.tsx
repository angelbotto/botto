"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Focus() {
  const { t } = useLocale();
  return (
    <section id="focus" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionHeading tag="02 — Focus" title={t.focus.title} lede={t.focus.lede} />

        <div className="grid gap-6 md:grid-cols-2">
          {t.focus.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="group relative overflow-hidden rounded-xl border border-line bg-ink p-8 lg:p-10 hover:border-fuchsia-neon/40 transition-colors"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-neon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-neon mb-6">
                {item.tag}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-pretty">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
