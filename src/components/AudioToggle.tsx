import { useAmbientAudio } from "@/hooks/useAmbientAudio";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

export function AudioToggle() {
  const { isPlaying, toggle, updateScroll } = useAmbientAudio();
  const { progress } = useScrollProgress();

  useEffect(() => {
    updateScroll(progress);
  }, [progress, updateScroll]);

  return (
    <button
      onClick={toggle}
      aria-label="Toggle ambient audio"
      className={cn(
        "fixed bottom-[22px] right-[22px] z-50 w-[34px] h-[34px]",
        "border rounded-full flex items-center justify-center",
        "opacity-0 animate-[fadeIn_1s_ease_3.5s_forwards] transition-all duration-400 cursor-pointer",
        isPlaying
          ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)] shadow-[0_0_20px_var(--color-accent-glow)]"
          : "border-[var(--color-border)] bg-[var(--color-accent-subtle)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent-glow)] hover:shadow-[0_0_20px_var(--color-accent-glow)]",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "w-[13px] h-[13px] fill-none stroke-[1.5] transition-colors duration-300",
          isPlaying ? "stroke-[var(--color-accent)]" : "stroke-[var(--color-text-dim)]",
        )}
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 010 7.07" opacity={isPlaying ? 1 : 0.3} />
        <path d="M19.07 4.93a10 10 0 010 14.14" opacity={isPlaying ? 1 : 0.3} />
      </svg>
    </button>
  );
}
