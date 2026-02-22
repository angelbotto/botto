import { useEffect } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/cn";

const WORDS = ["BOTTO", "ANGEL", "BUILD", "DREAM", "BOTTO"];

interface TypewriterTitleProps {
  started: boolean;
}

export function TypewriterTitle({ started }: TypewriterTitleProps) {
  const { chars, cursorVisible, start, rescramble } = useTypewriter({
    words: WORDS,
  });

  useEffect(() => {
    if (started) {
      const timer = setTimeout(start, 700);
      return () => clearTimeout(timer);
    }
  }, [started, start]);

  return (
    <h1
      className="font-display font-bold text-[clamp(60px,12vw,180px)] tracking-[0.08em] leading-[0.95] text-[var(--color-text-bright)] inline-block uppercase relative opacity-0 animate-[titleIn_0.6s_ease_1s_forwards] cursor-default"
      style={{
        textShadow:
          "0 0 30px var(--color-accent-glow), 0 0 60px var(--color-accent-subtle), 0 0 100px var(--color-accent-subtle)",
      }}
      onMouseEnter={rescramble}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block min-w-[0.06em] transition-colors duration-150"
        >
          {char}
        </span>
      ))}
      <span
        className={cn(
          "inline-block w-1 h-[0.72em] ml-1.5 align-middle",
          "bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent),0_0_25px_var(--color-accent)]",
          cursorVisible ? "opacity-100 animate-[blink_1s_step-end_infinite]" : "opacity-0",
        )}
      />
    </h1>
  );
}
