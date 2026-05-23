"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10 space-y-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] items-end">
          <div className="space-y-3 max-w-md">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon">
              Botto Capital
            </div>
            <p className="text-text-muted leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-text-faint">
            <a
              href="https://x.com/bottico"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com/in/bottico"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:angel@botto.is"
              className="hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative select-none group" aria-hidden>
          <svg
            viewBox="0 0 1000 220"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="500"
              y="180"
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontWeight="500"
              fontSize="260"
              letterSpacing="-0.04em"
              fill="oklch(1 0 0 / 0.04)"
              stroke="oklch(1 0 0 / 0.10)"
              strokeWidth="1"
              className="transition-[stroke] duration-500 ease-[var(--ease-out)] group-hover:[stroke:oklch(0.72_0.28_327_/_0.6)]"
            >
              BOTTO
            </text>
            <text
              x="500"
              y="180"
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontWeight="500"
              fontSize="260"
              letterSpacing="-0.04em"
              fill="oklch(0.72 0.28 327 / 0.0)"
              className="transition-all duration-700 ease-[var(--ease-out)] group-hover:fill-[oklch(0.72_0.28_327_/_0.18)]"
            >
              BOTTO
            </text>
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-dim pt-6 border-t border-line">
          <span>© {year} Botto Capital · {t.footer.rights}</span>
          <span>Built with intention in Latin America</span>
        </div>
      </div>
    </footer>
  );
}
