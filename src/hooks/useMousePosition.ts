import { useEffect, useRef, useCallback } from "react";

interface MousePos {
  x: number;
  y: number;
}

export function useMousePosition(lerp = 0.06) {
  const raw = useRef<MousePos>({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const smoothed = useRef<MousePos>({ ...raw.current });
  const raf = useRef(0);
  const subscribers = useRef(new Set<(pos: MousePos) => void>());

  useEffect(() => {
    function onMove(e: MouseEvent) {
      raw.current.x = e.clientX;
      raw.current.y = e.clientY;
    }

    function tick() {
      smoothed.current.x += (raw.current.x - smoothed.current.x) * lerp;
      smoothed.current.y += (raw.current.y - smoothed.current.y) * lerp;
      subscribers.current.forEach((fn) => fn({ ...smoothed.current }));
      raf.current = requestAnimationFrame(tick);
    }

    document.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [lerp]);

  const subscribe = useCallback((fn: (pos: MousePos) => void) => {
    subscribers.current.add(fn);
    return () => {
      subscribers.current.delete(fn);
    };
  }, []);

  const getRaw = useCallback(() => raw.current, []);
  const getSmoothed = useCallback(() => smoothed.current, []);

  return { subscribe, getRaw, getSmoothed };
}
