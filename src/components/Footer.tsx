"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-16 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10 space-y-12">
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
              className="hover:text-fuchsia-neon transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com/in/bottico"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-neon transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:angel@botto.is"
              className="hover:text-fuchsia-neon transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="select-none" aria-hidden>
          <svg
            viewBox="0 0 1000 220"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="bottoGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="50%" stopColor="rgba(217,70,239,0.35)" />
                <stop offset="100%" stopColor="rgba(168,85,247,0.18)" />
              </linearGradient>
            </defs>
            <text
              x="500"
              y="180"
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontWeight="500"
              fontSize="260"
              letterSpacing="-0.04em"
              fill="url(#bottoGrad)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            >
              BOTTO
            </text>
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-dim pt-4 border-t border-line">
          <span>© {year} Botto Capital · {t.footer.rights}</span>
          <span>Built with intention in Latin America</span>
        </div>
      </div>
    </footer>
  );
}
