"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { CardVisual } from "@/components/CardVisual";
import { companies, projects, type Entity } from "@/content/companies";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VISUAL_BY_SLUG: Record<string, "rings" | "lines" | "wave" | "grid" | "blueprint" | "orbit"> = {
  liftit: "lines",
  tikin: "orbit",
  beu: "wave",
  cobralo: "grid",
  catabum: "blueprint",
  laperla: "rings",
};

export function Portfolio() {
  const { locale, t } = useLocale();
  return (
    <section
      id="portfolio"
      className="relative py-32 lg:py-40 scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-20">
        <SectionHeading
          tag="Portfolio"
          title={t.portfolio.title}
          lede={t.portfolio.lede}
          icon={<PortfolioIcon />}
        />

        <div className="space-y-10 max-w-6xl mx-auto">
          <GroupHeading label={t.portfolio.companiesTag} count={companies.length} />
          <EntityGrid items={companies} locale={locale} t={t} />
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
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
  locale: Locale;
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
          <PortfolioCard entity={entity} locale={locale} t={t} muted={muted} />
        </motion.div>
      ))}
    </div>
  );
}

function PortfolioCard({
  entity,
  locale,
  t,
  muted = false,
}: {
  entity: Entity;
  locale: Locale;
  t: { portfolio: { foundedBadge: string; cofoundedBadge: string; stealthBadge: string } };
  muted?: boolean;
}) {
  const Wrapper = entity.url ? "a" : "div";
  const wrapperProps = entity.url
    ? { href: entity.url, target: "_blank", rel: "noreferrer" }
    : {};
  const roleBadge =
    entity.role === "founded" ? t.portfolio.foundedBadge : t.portfolio.cofoundedBadge;
  const visual = VISUAL_BY_SLUG[entity.slug] ?? "rings";

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "relative block h-full group bg-ink overflow-hidden",
        entity.url && "cursor-pointer",
      )}
    >
      {/* Background visual fills entire card */}
      <div className="relative aspect-[5/4]">
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.06]",
            muted && "opacity-70",
          )}
        >
          <CardVisualBg variant={visual} />
        </div>

        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent group-hover:from-ink/85 group-hover:via-ink/30 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]"
          aria-hidden
        />

        {/* Centered brand mark */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center px-6">
            <div
              className="font-medium tracking-[-0.04em] text-white/95 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)] group-hover:text-fuchsia-neon"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1 }}
            >
              {entity.name.toLowerCase()}
            </div>
          </div>
        </div>

        {/* Top-right arrow */}
        {entity.url && (
          <div className="absolute top-4 right-4 z-10">
            <ArrowUpRight className="h-4 w-4 text-white/55 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]" />
          </div>
        )}

        {/* Stealth badge top-left */}
        {entity.status === "stealth" && (
          <div className="absolute top-4 left-4 z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-neon border border-fuchsia-neon/40 rounded-sm px-1.5 py-0.5 bg-ink/60 backdrop-blur-sm">
              {t.portfolio.stealthBadge}
            </span>
          </div>
        )}
      </div>

      {/* Meta strip at bottom (hairline border) */}
      <div className="border-t border-line p-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
        <span className="text-fuchsia-neon/80">{entity.sector[locale]}</span>
        <span className="text-text-muted">
          {entity.year ? `${entity.year} · ` : ""}{roleBadge}
        </span>
      </div>

      {/* Tagline tooltip-ish on hover (slide up from bottom) */}
      <div className="absolute inset-x-0 bottom-12 px-4 py-3 bg-ink-2/95 backdrop-blur-md border-t border-fuchsia-neon/30 translate-y-full group-hover:translate-y-0 transition-transform duration-[var(--dur-enter)] ease-[var(--ease-out)] pointer-events-none">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[15px] font-medium tracking-tight text-white">{entity.name}</span>
        </div>
        <p className="text-[12px] text-text-muted leading-snug line-clamp-2">
          {entity.tagline[locale]}
        </p>
      </div>
    </Wrapper>
  );
}

function CardVisualBg({ variant }: { variant: keyof typeof VISUAL_BY_SLUG | "rings" | "orbit" | "blueprint" | "wave" | "lines" | "grid" }) {
  return (
    <CardVisual
      variant={variant as "rings" | "lines" | "wave" | "grid" | "blueprint" | "orbit"}
      className="!aspect-auto h-full w-full"
    />
  );
}

function PortfolioIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="2.5" width="9" height="7" rx="1" />
      <path d="M4 2.5V1.5h4v1" />
      <line x1="1.5" y1="5.5" x2="10.5" y2="5.5" />
    </svg>
  );
}
