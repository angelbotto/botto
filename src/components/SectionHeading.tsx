import { cn } from "@/lib/utils";

type Props = {
  tag: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ tag, title, lede, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fuchsia-neon",
        )}
      >
        <span className="h-px w-6 bg-fuchsia-neon/60" aria-hidden />
        {tag}
      </div>
      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {lede && (
        <p className="text-lg text-text-muted text-pretty leading-relaxed">{lede}</p>
      )}
    </div>
  );
}
