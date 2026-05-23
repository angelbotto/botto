"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { LangToggle } from "@/components/ui/LangToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#dna", key: "dna" },
  { href: "#focus", key: "focus" },
  { href: "#investments", key: "investments" },
  { href: "#team", key: "team" },
  { href: "#connect", key: "connect" },
] as const;

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className="h-7 w-7 rounded-sm bg-gradient-to-br from-fuchsia-neon to-violet-neon glow-fuchsia transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span className="font-mono text-sm tracking-[0.18em] uppercase">
            Botto<span className="text-fuchsia-neon">.</span>Capital
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-text-muted hover:text-text transition-colors"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-line text-text"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <>
                  <path d="M3 3l10 10M13 3L3 13" />
                </>
              ) : (
                <>
                  <path d="M2 4h12M2 8h12M2 12h12" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-xl">
          <ul className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-text-muted hover:text-text border-b border-line/50 last:border-0"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
