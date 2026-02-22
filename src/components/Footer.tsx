export function Footer() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const year = now.getFullYear();

  return (
    <footer className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-2.5 px-5 md:px-9 py-6 md:py-8 border-t border-[var(--color-line)]">
      <div className="text-[9px] tracking-[2px] text-[var(--color-text-faint)] uppercase leading-[2] text-center md:text-left">
        <div>{dateStr}</div>
        <div>Bogota, Colombia</div>
      </div>
      <div className="text-[8px] tracking-[2px] text-[var(--color-text-ghost)] uppercase">
        Crafted with obsession
      </div>
      <div className="text-[9px] tracking-[2px] text-[var(--color-text-faint)] uppercase leading-[2] text-center md:text-right">
        <div>&copy; {year} Botto</div>
        <div>All systems nominal</div>
      </div>
    </footer>
  );
}
