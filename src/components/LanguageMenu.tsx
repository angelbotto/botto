"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";
import { LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, { code: string; full: { en: string; es: string; pt: string } }> = {
  en: { code: "EN", full: { en: "English", es: "Inglés", pt: "Inglês" } },
  es: { code: "ES", full: { en: "Spanish", es: "Español", pt: "Espanhol" } },
  pt: { code: "PT", full: { en: "Portuguese", es: "Portugués", pt: "Português" } },
};

export function LanguageMenu({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.lang.label}
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-fuchsia-neon transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]"
      >
        {LABELS[locale].code}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)]",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            role="listbox"
            aria-label={t.lang.label}
            className="absolute right-0 mt-3 w-44 origin-top-right rounded-md border border-line-strong bg-ink-2/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.7)] overflow-hidden z-50"
          >
            {LOCALES.map((l) => {
              const active = l === locale;
              return (
                <li key={l}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => choose(l)}
                    className={cn(
                      "group flex w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]",
                      active
                        ? "text-fuchsia-neon"
                        : "text-text-muted hover:text-text hover:bg-white/[0.04]",
                    )}
                  >
                    <span className="flex items-baseline gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint group-hover:text-text-muted">
                        {LABELS[l].code}
                      </span>
                      <span className="text-[13px]">
                        {LABELS[l].full[locale]}
                      </span>
                    </span>
                    {active && <Check className="h-3.5 w-3.5" aria-hidden />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
