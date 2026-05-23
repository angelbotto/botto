"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Atom, Lightbulb, Globe, Infinity as InfinityIcon } from "lucide-react";

const ICONS = [Atom, Lightbulb, Globe, InfinityIcon];

export function DNA() {
  const { t } = useLocale();
  return (
    <section id="dna" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionHeading tag="01 — DNA" title={t.dna.title} lede={t.dna.lede} />

        <div className="grid gap-px bg-line lg:grid-cols-2 border border-line rounded-xl overflow-hidden">
          {t.dna.items.map((item, i) => {
            const Icon = ICONS[i] ?? Atom;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="relative bg-ink p-8 lg:p-10 group transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex items-start gap-5">
                  <div className="h-10 w-10 shrink-0 rounded-md border border-line-strong bg-fuchsia-neon/5 grid place-items-center text-fuchsia-neon group-hover:glow-fuchsia transition-all">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-pretty">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
