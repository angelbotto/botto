"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { companies, projects, type Entity } from "@/content/companies";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const { locale, t } = useLocale();
  return (
    <section id="portfolio" className="relative py-32 lg:py-48 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20 lg:space-y-28">
        <SectionHeading
          tag="03 · Portfolio"
          title={t.portfolio.title}
          lede={t.portfolio.lede}
          align="center"
        />

        <div className="space-y-12">
          <GroupHeading label={t.portfolio.companiesTag} count={companies.length} />
          <div className="grid gap-px bg-line border border-line rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <EntityCard entity={c} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <GroupHeading label={t.portfolio.projectsTag} count={projects.length} />
          <div className="grid gap-px bg-line border border-line rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <EntityCard entity={p} locale={locale} muted />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupHeading({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
        {label}
      </div>
      <div className="h-px flex-1 bg-line" />
      <div className="font-mono text-[11px] text-text-faint tabular-nums">
        {String(count).padStart(2, "0")}
      </div>
    </div>
  );
}

function EntityCard({
  entity,
  locale,
  muted = false,
}: {
  entity: Entity;
  locale: "en" | "es";
  muted?: boolean;
}) {
  const Wrapper = entity.url ? "a" : "div";
  const wrapperProps = entity.url
    ? { href: entity.url, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "relative block h-full p-8 group transition-colors bg-ink",
        entity.url ? "cursor-pointer hover:bg-white/[0.02]" : "",
        muted && "opacity-90",
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <LogoMark name={entity.name} muted={muted} />
        {entity.url && (
          <ArrowUpRight className="h-4 w-4 text-text-faint group-hover:text-fuchsia-neon transition-colors" />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <h3 className="text-xl font-medium tracking-tight">{entity.name}</h3>
          {entity.year && (
            <span className="font-mono text-[11px] text-text-faint">{entity.year}</span>
          )}
        </div>
        <p className="text-sm text-text-muted leading-relaxed text-pretty min-h-[3.5em]">
          {entity.tagline[locale]}
        </p>
        <div className="flex items-center gap-2 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
          <span className="text-fuchsia-neon/70">{entity.sector[locale]}</span>
          <span aria-hidden>·</span>
          <span>
            {entity.founder === "angel"
              ? "Founded · Angel"
              : entity.founder === "stivens"
                ? "Founded · Stivens"
                : "Co-founded"}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

function LogoMark({ name, muted }: { name: string; muted?: boolean }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={cn(
        "relative h-12 w-12 rounded-md border grid place-items-center font-mono text-sm font-medium text-text overflow-hidden",
        muted
          ? "border-line bg-white/[0.02]"
          : "border-line-strong bg-gradient-to-br from-fuchsia-neon/15 to-violet-neon/8",
      )}
    >
      <span className="relative z-10">{initials}</span>
    </div>
  );
}
