import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { cn } from "@/lib/cn";
import { ProjectGrid } from "./ProjectGrid";

export function Projects() {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>();

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center py-[140px] px-5 md:px-10">
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3.5 mb-16 text-[9px] tracking-[6px] uppercase text-[var(--color-accent-glow)]",
          "opacity-0 translate-y-[35px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isVisible && "opacity-100 translate-y-0",
        )}
      >
        <span className="flex-none w-[25px] h-px bg-[var(--color-border)]" />
        <span>Ventures</span>
        <span className="flex-none w-[25px] h-px bg-[var(--color-border)]" />
      </div>
      <ProjectGrid />
    </section>
  );
}
