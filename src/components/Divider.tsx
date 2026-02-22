import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { cn } from "@/lib/cn";

export function Divider() {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="relative w-full h-px z-10 overflow-visible">
      <div className="w-full h-px bg-[var(--color-line)]" />
      <div
        className={cn(
          "absolute -top-px -left-1/4 w-1/2 h-[3px] opacity-0",
          "bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent",
          "blur-[0.5px] shadow-[0_0_20px_var(--color-accent-glow)]",
          isVisible && "animate-[sweep_3s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]",
        )}
      />
    </div>
  );
}
