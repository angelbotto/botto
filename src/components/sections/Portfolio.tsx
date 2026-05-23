"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { companies, projects, type Entity } from "@/content/companies";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const { locale, t } = useLocale();
  return (
    <section
      id="portfolio"
      className="relative py-32 lg:py-44 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20 lg:space-y-28">
        <SectionHeading
          tag="03 · Portfolio"
          title={t.portfolio.title}
          lede={t.portfolio.lede}
          align="center"
        />

        <div className="space-y-10">
          <GroupHeading label={t.portfolio.companiesTag} count={companies.length} />
          <EntityGrid items={companies} locale={locale} t={t} />
        </div>

        <div className="space-y-10">
          <GroupHeading label={t.portfolio.projectsTag} count={projects.length} />
          <EntityGrid items={projects} locale={locale} t={t} muted />
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

function EntityGrid({
  items,
  locale,
  t,
  muted,
}: {
  items: Entity[];
  locale: "en" | "es";
  t: { portfolio: { foundedBadge: string; cofoundedBadge: string; stealthBadge: string } };
  muted?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
      {items.map((entity, i) => (
        <motion.div
          key={entity.slug}
          initial={reduce ? false : { y: 14 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0, margin: "200px 0px" }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.21, 1, 0.32, 1] }}
        >
          <EntityCard entity={entity} locale={locale} t={t} muted={muted} />
        </motion.div>
      ))}
    </div>
  );
}

function EntityCard({
  entity,
  locale,
  t,
  muted = false,
}: {
  entity: Entity;
  locale: "en" | "es";
  t: { portfolio: { foundedBadge: string; cofoundedBadge: string; stealthBadge: string } };
  muted?: boolean;
}) {
  const Wrapper = entity.url ? "a" : "div";
  const wrapperProps = entity.url
    ? { href: entity.url, target: "_blank", rel: "noreferrer" }
    : {};
  const roleBadge =
    entity.role === "founded" ? t.portfolio.foundedBadge : t.portfolio.cofoundedBadge;
  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "relative block h-full p-8 group bg-ink transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]",
        entity.url && "cursor-pointer hover:bg-white/[0.025]",
        muted && "opacity-95",
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-neon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--dur-hover)] ease-[var(--ease-out)]"
      />
      <div className="flex items-start justify-between gap-4 mb-6">
        <LogoMark name={entity.name} muted={muted} />
        {entity.url && (
          <ArrowUpRight className="h-4 w-4 text-text-faint group-hover:text-fuchsia-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]" />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-xl font-medium tracking-tight">{entity.name}</h3>
          {entity.year && (
            <span className="font-mono text-[11px] text-text-faint">{entity.year}</span>
          )}
          {entity.status === "stealth" && (
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-neon/80 border border-fuchsia-neon/30 rounded-sm px-1.5 py-0.5">
              {t.portfolio.stealthBadge}
            </span>
          )}
        </div>
        <p className="text-sm text-text-muted leading-relaxed text-pretty min-h-[3.5em]">
          {entity.tagline[locale]}
        </p>
        <div className="flex items-center gap-2 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
          <span className="text-fuchsia-neon/70">{entity.sector[locale]}</span>
          <span aria-hidden>·</span>
          <span>{roleBadge}</span>
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
        "relative h-12 w-12 rounded-md border grid place-items-center font-mono text-sm font-medium text-text overflow-hidden transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]",
        muted
          ? "border-line bg-white/[0.02] group-hover:border-line-strong"
          : "border-line-strong bg-gradient-to-br from-fuchsia-neon/15 to-violet-neon/8 group-hover:scale-105 group-hover:from-fuchsia-neon/25 group-hover:to-violet-neon/12",
      )}
    >
      <span className="relative z-10">{initials}</span>
    </div>
  );
}
