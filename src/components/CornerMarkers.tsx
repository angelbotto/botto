const corners = [
  { pos: "top-[18px] left-[18px]", points: "0,12 0,0 12,0" },
  { pos: "top-[18px] right-[18px]", points: "12,0 24,0 24,12" },
  { pos: "bottom-[18px] left-[18px]", points: "0,12 0,24 12,24" },
  { pos: "bottom-[18px] right-[18px]", points: "12,24 24,24 24,12" },
] as const;

export function CornerMarkers() {
  return (
    <>
      {corners.map((c) => (
        <div
          key={c.points}
          className={`fixed z-[15] pointer-events-none opacity-0 animate-[fadeIn_1s_ease_3s_forwards] hidden md:block ${c.pos}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[22px] h-[22px] stroke-[var(--color-border)] stroke-1 fill-none"
          >
            <polyline points={c.points} />
          </svg>
        </div>
      ))}
    </>
  );
}
