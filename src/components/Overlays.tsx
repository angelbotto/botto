export function Overlays() {
  return (
    <>
      {/* Scan lines */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(2,0,16,0.02) 3px, rgba(2,0,16,0.02) 4px)",
        }}
      />
      {/* Vignette - deep space purple tint */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(2,0,16,0.3) 70%, rgba(2,0,16,0.55) 100%)",
        }}
      />
      {/* Noise */}
      <div
        className="fixed z-[3] pointer-events-none opacity-[0.012] animate-[noise_0.4s_steps(3)_infinite]"
        style={{
          inset: "-50%",
          width: "200%",
          height: "200%",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
