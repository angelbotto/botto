"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-[1fr_auto] items-end">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span
              className="h-6 w-6 rounded-sm bg-gradient-to-br from-fuchsia-neon to-violet-neon"
              aria-hidden
            />
            <span className="font-mono text-xs tracking-[0.18em] uppercase">
              Botto<span className="text-fuchsia-neon">.</span>Capital
            </span>
          </div>
          <p className="text-sm text-text-muted max-w-md">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-faint font-mono">
          <span>© {year} Botto Capital.</span>
          <span className="hidden md:inline">·</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
