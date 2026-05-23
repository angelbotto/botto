"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { LanguageMenu } from "@/components/LanguageMenu";
import { cn } from "@/lib/utils";

const links = [
  { href: "#dna", key: "dna" },
  { href: "#focus", key: "focus" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#team", key: "team" },
  { href: "#build", key: "build" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-[var(--dur-hover)] ease-[var(--ease-out)]",
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="group text-[15px] font-medium tracking-[-0.01em]"
        >
          <span className="text-white group-hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]">
            Botto
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] font-medium">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="group relative text-white/75 hover:text-white transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
            >
              {t.nav[l.key]}
              <span
                aria-hidden
                className="absolute left-0 right-0 -bottom-1 h-px bg-fuchsia-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] origin-left"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageMenu className="hidden sm:block" />
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
        <nav className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-xl">
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
            <li className="py-3.5 flex items-center justify-between">
              <span className="text-sm text-white/60 font-mono uppercase tracking-[0.18em]">
                {t.lang.label}
              </span>
              <LanguageMenu />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
