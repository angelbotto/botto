import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseGlow() {
  const divRef = useRef<HTMLDivElement>(null);
  const { subscribe } = useMousePosition(0.06);

  useEffect(() => {
    return subscribe((pos) => {
      if (divRef.current) {
        divRef.current.style.transform = `translate(${pos.x - 250}px, ${pos.y - 250}px)`;
      }
    });
  }, [subscribe]);

  return (
    <div
      ref={divRef}
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[1] will-change-transform"
      style={{
        background:
          "radial-gradient(circle, var(--color-accent-subtle) 0%, rgba(138,106,255,0.012) 40%, transparent 70%)",
      }}
    />
  );
}
