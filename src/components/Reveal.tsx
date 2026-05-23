"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, delay = 0, y = 16, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={reduce ? false : { y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0, margin: "200px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
