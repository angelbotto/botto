import { cn } from "@/lib/utils";

type Props = {
  tag: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ tag, title, lede, align = "center", className }: Props) {
  return (
    <div
      className={cn(
        "space-y-6",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-neon",
          align === "center" && "justify-center w-full",
        )}
      >
        <span className="h-px w-8 bg-fuchsia-neon/50" aria-hidden />
        {tag}
        <span className="h-px w-8 bg-fuchsia-neon/50" aria-hidden />
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-[3rem] font-medium tracking-tight text-balance leading-[1.15]">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "text-lg text-text-muted text-pretty leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
