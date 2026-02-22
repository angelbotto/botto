import { useKonamiCode } from "@/hooks/useKonamiCode";
import { AnimatePresence, motion } from "motion/react";

export function EasterEgg() {
  const triggered = useKonamiCode();

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center bg-[rgba(2,0,16,0.6)]"
        >
          <span
            className="font-display font-bold text-[clamp(20px,3.5vw,44px)] tracking-[0.08em]"
            style={{
              color: "var(--color-accent)",
              textShadow:
                "0 0 40px var(--color-accent), 0 0 80px var(--color-accent-glow)",
            }}
          >
            {"// sudo make future"}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
