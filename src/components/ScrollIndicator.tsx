export function ScrollIndicator() {
  return (
    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0 animate-[fadeUp_1s_ease_3.2s_forwards]">
      <span className="text-[7px] tracking-[4px] uppercase text-[var(--color-accent-subtle)]">
        Explore
      </span>
      <div
        className="w-px bg-gradient-to-b from-[var(--color-accent-glow)] to-transparent animate-[scroll-pulse_2.5s_ease-in-out_infinite]"
        style={{ height: 35 }}
      />
    </div>
  );
}
