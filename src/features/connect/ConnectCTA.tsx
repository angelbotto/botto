export function ConnectCTA() {
  return (
    <div>
      <h2
        className="font-display font-bold text-[clamp(36px,6vw,72px)] tracking-[0.06em] mb-3.5"
        style={{
          background: "linear-gradient(135deg, var(--color-text-bright) 0%, var(--color-accent) 60%, var(--color-tertiary) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Let's Build
      </h2>
      <p className="text-[11px] tracking-[2.5px] text-[var(--color-text-dim)] uppercase mb-12 max-w-[480px] mx-auto leading-[1.9]">
        Open to conversations about technology, ventures & the future
      </p>
      <div className="relative inline-block">
        <div
          className="absolute top-1/2 left-1/2 w-[140%] h-[250%] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[ctaPulse_3s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(ellipse, var(--color-accent-subtle) 0%, transparent 70%)",
          }}
        />
        <a
          href="https://cal.com/bottico"
          target="_blank"
          rel="noopener"
          className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-[18px] font-mono text-[11px] tracking-[4px] uppercase no-underline text-[var(--color-accent)] border border-[var(--color-border-hover)] bg-[var(--color-accent-subtle)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hover:bg-[var(--color-accent-glow)] hover:border-[var(--color-accent)] hover:shadow-[0_0_35px_var(--color-accent-glow),inset_0_0_35px_var(--color-accent-subtle)] hover:-translate-y-0.5"
        >
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[var(--color-accent-subtle)] to-transparent transition-[left] duration-600 group-hover:left-full" />
          <span>Book a Call</span>
          <span className="text-[13px] transition-transform duration-300 group-hover:translate-x-[5px]">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
