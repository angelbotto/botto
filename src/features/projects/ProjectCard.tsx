import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { cn } from "@/lib/cn";
import type { Venture } from "./projectData";

const icons: Record<string, React.ReactNode> = {
  truck: (
    <svg viewBox="0 0 32 32" className="w-8 h-8 stroke-[var(--color-accent-glow)] stroke-[1.2] fill-none transition-all duration-500 opacity-50 group-hover:stroke-[var(--color-accent)] group-hover:opacity-100" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="16" height="11" rx="2" />
      <rect x="19" y="14" width="7" height="7" rx="1" />
      <circle cx="9" cy="23" r="2.5" />
      <circle cx="23" cy="23" r="2.5" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 32 32" className="w-8 h-8 stroke-[var(--color-accent-glow)] stroke-[1.2] fill-none transition-all duration-500 opacity-50 group-hover:stroke-[var(--color-accent)] group-hover:opacity-100" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="26" height="18" rx="3" />
      <polygon points="13,8 13,17 20,12.5" />
      <line x1="3" y1="25" x2="14" y2="25" strokeWidth="1.5" opacity=".4" />
    </svg>
  ),
  exchange: (
    <svg viewBox="0 0 32 32" className="w-8 h-8 stroke-[var(--color-accent-glow)] stroke-[1.2] fill-none transition-all duration-500 opacity-50 group-hover:stroke-[var(--color-accent)] group-hover:opacity-100" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="16" r="7" />
      <circle cx="22" cy="16" r="7" />
    </svg>
  ),
};

interface ProjectCardProps {
  venture: Venture;
  index: number;
}

export function ProjectCard({ venture, index }: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionReveal<HTMLAnchorElement>(0.1);

  return (
    <a
      ref={ref}
      href={venture.url}
      target="_blank"
      rel="noopener"
      className={cn(
        "group relative flex flex-col gap-3.5 p-10 pb-9 md:px-8",
        "bg-[var(--color-bg-panel)] border border-[var(--color-border)]",
        "no-underline text-[var(--color-text-bright)]",
        "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "overflow-hidden",
        "hover:bg-[var(--color-accent-subtle)] hover:border-[var(--color-border-hover)] hover:-translate-y-[3px]",
        "opacity-0 translate-y-[35px]",
        isVisible && "opacity-100 translate-y-0",
      )}
      style={{ transitionDelay: isVisible ? `${index * 0.15}s` : "0s" }}
    >
      {/* Scan sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-glow)] via-[var(--color-accent-subtle)] to-transparent -translate-y-full pointer-events-none group-hover:animate-[cardSweep_0.9s_ease-out_forwards]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-[var(--color-tertiary)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      <span className="text-[8px] tracking-[3px] text-[var(--color-accent-subtle)]">
        {venture.id}
      </span>
      <span className="font-display font-bold text-[clamp(24px,3vw,38px)] tracking-[0.03em] leading-[1.1] transition-all duration-400 group-hover:text-[var(--color-accent)] group-hover:[text-shadow:0_0_20px_var(--color-accent-glow)]">
        {venture.name}
      </span>
      <span className="text-[10px] tracking-[0.4px] text-[var(--color-text)] leading-[1.8] max-w-[280px]">
        {venture.description}
      </span>

      <div className="mt-auto pt-3">
        {icons[venture.icon]}
      </div>

      <span className="absolute top-[18px] right-[18px] text-base text-[var(--color-accent-glow)] opacity-35 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:opacity-100">
        ↗
      </span>
    </a>
  );
}
