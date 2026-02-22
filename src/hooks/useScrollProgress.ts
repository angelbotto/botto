import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [state, setState] = useState({ scrollY: 0, progress: 0 });

  useEffect(() => {
    function update() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setState({ scrollY: y, progress: y / max });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
