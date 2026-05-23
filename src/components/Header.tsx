"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const links = [
  { href: "#dna", key: "dna" },
  { href: "#focus", key: "focus" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#team", key: "team" },
  { href: "#build", key: "build" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => setLocale((locale === "en" ? "es" : "en") as Locale);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="text-[15px] font-medium tracking-[-0.01em] hover:text-fuchsia-neon transition-colors"
        >
          Botto
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLocale}
            className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-fuchsia-neon transition-colors"
            aria-label={t.lang.label}
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center text-white"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" />
              ) : (
                <path d="M2 5h14M2 13h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-black/95 backdrop-blur-xl">
          <ul className="mx-auto max-w-7xl px-6 py-4 flex flex-col">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-sm text-white/80 hover:text-white border-b border-line/50 last:border-0"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  toggleLocale();
                  setOpen(false);
                }}
                className="w-full text-left py-3.5 text-sm text-white/60 font-mono uppercase tracking-[0.18em]"
              >
                {locale === "en" ? "ES" : "EN"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
