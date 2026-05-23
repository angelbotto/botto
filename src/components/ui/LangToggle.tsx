"use client";

import { useLocale } from "@/components/LocaleProvider";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-line p-0.5 text-xs font-mono",
        className,
      )}
      role="group"
      aria-label={t.lang.label}
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={cn(
            "px-2 py-1 rounded transition-colors",
            locale === l
              ? "bg-fuchsia-neon/15 text-fuchsia-neon"
              : "text-text-faint hover:text-text",
          )}
          aria-pressed={locale === l}
        >
          {t.lang[l]}
        </button>
      ))}
    </div>
  );
}
