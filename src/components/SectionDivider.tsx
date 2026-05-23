export function SectionDivider() {
  return (
    <div
      className="relative h-px w-full overflow-hidden bg-line"
      aria-hidden
      role="separator"
    >
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-fuchsia-neon/40 to-transparent"
      />
    </div>
  );
}
