import { cn } from "@/lib/utils";

type Variant = "rings" | "lines" | "wave" | "grid" | "blueprint" | "orbit";

type Props = {
  variant: Variant;
  className?: string;
};

const ACCENT = "oklch(0.72 0.28 327)";
const ACCENT_SOFT = "oklch(0.72 0.28 327 / 0.4)";
const VIOLET = "oklch(0.68 0.25 297)";

const visuals: Record<Variant, React.ReactNode> = {
  rings: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="rings-g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.55" />
          <stop offset="60%" stopColor={VIOLET} stopOpacity="0.15" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <circle cx="200" cy="120" r="120" fill="url(#rings-g)" />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="120"
          r={20 + i * 8}
          fill="none"
          stroke={ACCENT_SOFT}
          strokeWidth={i % 3 === 0 ? "0.8" : "0.4"}
        />
      ))}
    </svg>
  ),
  blueprint: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="bp-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
        <pattern id="bp-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="oklch(1 0 0 / 0.06)" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#bp-dots)" />
      <rect width="400" height="240" fill="url(#bp-g)" />
      {/* Stacked nested squares like inchargecapital sector expertise */}
      <g
        stroke={ACCENT_SOFT}
        fill="none"
        strokeWidth="1"
        transform="translate(200 130)"
      >
        <rect x="-60" y="-44" width="120" height="88" rx="14" />
        <rect x="-46" y="-32" width="92" height="64" rx="10" stroke={ACCENT} />
        <rect x="-32" y="-22" width="64" height="44" rx="7" />
        <line x1="-60" y1="0" x2="-46" y2="0" />
        <line x1="46" y1="0" x2="60" y2="0" />
      </g>
    </svg>
  ),
  orbit: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="orbit-g" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.32" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#orbit-g)" />
      <g transform="translate(200 120)" fill="none" strokeWidth="0.8">
        <ellipse cx="0" cy="0" rx="150" ry="55" stroke={ACCENT_SOFT} />
        <ellipse cx="0" cy="0" rx="110" ry="40" stroke={ACCENT_SOFT} />
        <ellipse cx="0" cy="0" rx="70" ry="25" stroke={ACCENT} />
        <circle cx="0" cy="0" r="6" fill={ACCENT} />
        <circle cx="70" cy="-2" r="3" fill={ACCENT} />
        <circle cx="-105" cy="3" r="2.4" fill={VIOLET} />
        <circle cx="148" cy="-1" r="2" fill="oklch(0.82 0.16 195)" />
      </g>
    </svg>
  ),
  lines: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="lines-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={VIOLET} stopOpacity="0.42" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#lines-g)" />
      {Array.from({ length: 32 }).map((_, i) => (
        <line
          key={i}
          x1={i * 14}
          y1="0"
          x2={i * 14 - 60}
          y2="240"
          stroke={ACCENT_SOFT}
          strokeWidth="0.6"
        />
      ))}
    </svg>
  ),
  wave: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="wave-g" cx="80%" cy="20%" r="80%">
          <stop offset="0%" stopColor="oklch(0.82 0.16 195)" stopOpacity="0.35" />
          <stop offset="50%" stopColor={VIOLET} stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#wave-g)" />
      <g stroke="oklch(1 0 0 / 0.14)" fill="none" strokeWidth="0.8">
        <path d="M0 180 Q 100 120 200 160 T 400 130" />
        <path d="M0 200 Q 100 140 200 180 T 400 150" />
        <path d="M0 160 Q 100 100 200 140 T 400 110" />
      </g>
      <circle cx="320" cy="60" r="3" fill={ACCENT} />
      <circle cx="280" cy="100" r="2" fill={VIOLET} />
      <circle cx="350" cy="90" r="1.5" fill="oklch(0.82 0.16 195)" />
    </svg>
  ),
  grid: (
    <svg
      viewBox="0 0 400 240"
      className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="grid-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.48" />
          <stop offset="100%" stopColor="oklch(0.04 0.012 320)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="oklch(0.04 0.012 320)" />
      <rect width="400" height="240" fill="url(#grid-g)" />
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
        "relative aspect-[5/3] w-full overflow-hidden",
        className,
      )}
    >
      {visuals[variant]}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--dur-hover)] ease-[var(--ease-out)] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.28 327 / 0.18), transparent 60%)",
        }}
        aria-hidden
      />
    </div>
  );
}
