import { useState, useEffect, useRef } from "react";

const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

export function useKonamiCode(duration = 3000) {
  const [triggered, setTriggered] = useState(false);
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.keyCode === KONAMI[idx.current]) {
        idx.current++;
        if (idx.current === KONAMI.length) {
          idx.current = 0;
          setTriggered(true);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setTriggered(false), duration);
        }
      } else {
        idx.current = 0;
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(timer.current);
    };
  }, [duration]);

  return triggered;
}
