export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-9 py-4 md:py-5 bg-[rgba(2,0,16,0.85)] backdrop-blur-sm border-b border-[var(--color-line)] animate-[fadeDown_1s_ease_2.5s_both]">
      <div className="text-[8px] tracking-[2.5px] text-[var(--color-accent-glow)] uppercase">
        4.7110° N · 74.0721° W
      </div>
      <div className="flex items-center gap-[7px] text-[8px] tracking-[2.5px] text-[var(--color-accent-glow)] uppercase">
        <div className="w-1 h-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)] animate-[pulse_2s_ease-in-out_infinite]" />
        <span>System Online</span>
      </div>
    </nav>
  );
}
