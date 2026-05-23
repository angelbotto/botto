import { cn } from "@/lib/utils";

type Props = {
  variant: 0 | 1 | 2 | 3;
  className?: string;
};

const visuals: Record<Props["variant"], React.ReactNode> = {
  0: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="g0" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="oklch(0.72 0.28 327)" stopOpacity="0.55" />
          <stop offset="60%" stopColor="oklch(0.68 0.25 297)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <circle cx="200" cy="120" r="120" fill="url(#g0)" />
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="120"
          r={20 + i * 6}
          fill="none"
          stroke="oklch(0.72 0.28 327 / 0.28)"
          strokeWidth={i % 3 === 0 ? "0.8" : "0.3"}
          className="origin-center transition-opacity duration-500 ease-[var(--ease-out)]"
          style={{ opacity: i % 3 === 0 ? 0.6 : 0.3 }}
        />
      ))}
    </svg>
  ),
  1: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.25 297)" stopOpacity="0.42" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#g1)" />
      {Array.from({ length: 32 }).map((_, i) => (
        <line
          key={i}
          x1={i * 14}
          y1="0"
          x2={i * 14 - 60}
          y2="240"
          stroke="oklch(0.72 0.28 327 / 0.2)"
          strokeWidth="0.6"
        />
      ))}
    </svg>
  ),
  2: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="g2" cx="80%" cy="20%" r="80%">
          <stop offset="0%" stopColor="oklch(0.82 0.16 195)" stopOpacity="0.35" />
          <stop offset="50%" stopColor="oklch(0.68 0.25 297)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#g2)" />
      <g stroke="oklch(1 0 0 / 0.14)" fill="none" strokeWidth="0.7">
        <path d="M0 180 Q 100 120 200 160 T 400 130" />
        <path d="M0 200 Q 100 140 200 180 T 400 150" />
        <path d="M0 160 Q 100 100 200 140 T 400 110" />
      </g>
      <circle
        cx="320"
        cy="60"
        r="3"
        fill="oklch(0.72 0.28 327)"
        className="transition-[r] duration-500 group-hover:[r:4]"
      />
      <circle cx="280" cy="100" r="2" fill="oklch(0.68 0.25 297)" />
      <circle cx="350" cy="90" r="1.5" fill="oklch(0.82 0.16 195)" />
    </svg>
  ),
  3: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="g3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.28 327)" stopOpacity="0.48" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#g3)" />
      {Array.from({ length: 8 }).map((_, i) =>
        Array.from({ length: 14 }).map((__, j) => (
          <rect
            key={`${i}-${j}`}
            x={20 + j * 26}
            y={20 + i * 26}
            width="14"
            height="14"
            fill="none"
            stroke={`oklch(0.72 0.28 327 / ${0.05 + (j / 14) * 0.35})`}
            strokeWidth="0.8"
          />
        )),
      )}
    </svg>
  ),
};

export function CardVisual({ variant, className }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[5/3] w-full overflow-hidden rounded-md border border-line group-hover:border-line-strong transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)]",
        className,
      )}
    >
      {visuals[variant]}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--dur-hover)] ease-[var(--ease-out)] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.28 327 / 0.14), transparent 60%)",
        }}
        aria-hidden
      />
    </div>
  );
}
