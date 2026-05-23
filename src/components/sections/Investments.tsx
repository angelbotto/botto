"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { companies } from "@/content/companies";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Investments() {
  const { locale, t } = useLocale();

  const roleLabel = (role: (typeof companies)[number]["role"]) => {
    if (role === "founded") return t.investments.foundedBy;
    if (role === "cofounded") return t.investments.cofounded;
    return t.investments.backed;
  };

  return (
    <section id="investments" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionHeading
          tag="03 — Investments"
          title={t.investments.title}
          lede={t.investments.lede}
        />

        <div className="grid gap-px bg-line border border-line rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((c, i) => {
            const Wrapper = c.url ? "a" : "div";
            const wrapperProps = c.url
              ? { href: c.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Reveal key={c.slug} delay={i * 0.04}>
                <Wrapper
                  {...wrapperProps}
                  className={cn(
                    "relative block bg-ink p-8 h-full group transition-colors hover:bg-white/[0.02]",
                    c.url && "cursor-pointer",
                  )}
                >
                  <div className="flex items-start justify-between mb-6">
                    <LogoMark name={c.name} />
                    {c.url && (
                      <ArrowUpRight className="h-4 w-4 text-text-faint group-hover:text-fuchsia-neon transition-colors" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">{c.name}</h3>
                      {c.year && (
                        <span className="font-mono text-[11px] text-text-faint">
                          {c.year}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed text-pretty">
                      {c.tagline[locale]}
                    </p>
                    <div className="flex items-center gap-2 pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      <span className="text-fuchsia-neon/70">{c.sector[locale]}</span>
                      <span aria-hidden>·</span>
                      <span>
                        {roleLabel(c.role)}{" "}
                        {c.founder === "angel"
                          ? "Angel"
                          : c.founder === "stivens"
                            ? "Stivens"
                            : "Botto"}
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LogoMark({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="relative h-12 w-12 rounded-md border border-line-strong bg-gradient-to-br from-fuchsia-neon/10 to-violet-neon/5 grid place-items-center font-mono text-sm font-medium text-text">
      {initials}
    </div>
  );
}
