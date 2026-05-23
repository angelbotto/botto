"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  href,
  onClick,
  children,
  className,
  strength = 0.25,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 18, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  const onMove = (e: MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x, y, display: "inline-flex" }}
      className={cn(
        "items-center gap-2 rounded-md bg-white px-5 py-2.5 text-[15px] font-medium text-ink transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)] active:scale-[0.97]",
        hovering &&
          "bg-fuchsia-neon text-white shadow-[0_8px_40px_-12px_oklch(0.72_0.28_327_/_0.55)]",
        className,
      )}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={onLeave}
        className="inline-block focus-visible:outline-fuchsia-neon"
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="inline-block focus-visible:outline-fuchsia-neon"
    >
      {inner}
    </button>
  );
}
