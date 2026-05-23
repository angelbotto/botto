import { cn } from "@/lib/utils";

type Props = {
  tag: string;
  title: string;
  lede?: string;
  icon?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  lede,
  icon,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "space-y-7",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
          <span className="text-fuchsia-neon" aria-hidden>
            {icon ?? <Spark />}
          </span>
          {tag}
        </span>
      </div>
      <h2 className="text-[2.25rem] sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-balance leading-[1.1]">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "text-lg text-text-muted text-pretty leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

function Spark() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 1v3M6 8v3M1 6h3M8 6h3M2.5 2.5l2 2M7.5 7.5l2 2M2.5 9.5l2-2M7.5 4.5l2-2" />
    </svg>
  );
}
