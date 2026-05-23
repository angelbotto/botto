"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none";

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 px-4 text-sm rounded-md",
  md: "h-11 px-5 text-sm rounded-md",
  lg: "h-12 px-6 text-base rounded-md",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-fuchsia-neon/95 text-ink hover:bg-fuchsia-neon glow-fuchsia hover:scale-[1.01] active:scale-[0.99]",
  ghost:
    "text-text hover:text-fuchsia-neon hover:bg-white/[0.04]",
  outline:
    "border border-line-strong text-text hover:border-fuchsia-neon/60 hover:text-fuchsia-neon hover:bg-fuchsia-neon/[0.06]",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", size = "md", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    />
  );
});
