const links = [
  { label: "X / Twitter", href: "https://x.com/bottico" },
  { label: "Instagram", href: "https://instagram.com/bottico" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bottico" },
  { label: "Email", href: "mailto:angel@botto.is" },
] as const;

export function SocialLinks() {
  return (
    <div className="flex gap-7 justify-center mt-13 flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto") ? undefined : "noopener"}
          className="group relative text-[10px] tracking-[3px] text-[var(--color-text-dim)] no-underline uppercase py-[5px] transition-all duration-400 hover:text-[var(--color-accent)] hover:[text-shadow:0_0_12px_var(--color-accent-glow)]"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)] transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
        </a>
      ))}
    </div>
  );
}
