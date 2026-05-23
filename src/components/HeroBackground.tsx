"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    const CELL = 56;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      const time = reduced ? 0 : t * 0.00075;

      const blobs = [
        { x: w * 0.2, y: h * 0.3, r: 380 },
        { x: w * 0.8, y: h * 0.7, r: 420 },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, "oklch(0.72 0.28 327 / 0.10)");
        g.addColorStop(1, "oklch(0 0 0 / 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const cx = i * CELL + CELL / 2;
          const cy = j * CELL + CELL / 2;

          const dx = i - cols / 2;
          const dy = j - rows / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const wave =
            Math.sin(time * 1.2 - dist * 0.45) * 0.5 +
            Math.sin(time * 0.7 + i * 0.35 + j * 0.25) * 0.3 +
            Math.cos(time * 0.9 - i * 0.18 + j * 0.42) * 0.2;

          const norm = (wave + 1) / 2;
          const scale = 0.15 + norm * 0.9;
          const size = CELL * 0.55 * scale;
          const half = size / 2;

          const intensity = Math.pow(norm, 1.5);
          const baseAlpha = 0.08 + intensity * 0.5;

          ctx.strokeStyle = `oklch(0.72 0.28 327 / ${baseAlpha * 0.85})`;
          ctx.lineWidth = 0.9;
          const r = Math.max(1, size * 0.18);
          roundedRect(ctx, cx - half, cy - half, size, size, r);
          ctx.stroke();

          if (intensity > 0.78) {
            ctx.fillStyle = `oklch(0.72 0.28 327 / ${(intensity - 0.78) * 0.6})`;
            roundedRect(ctx, cx - half, cy - half, size, size, r);
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />
    </div>
  );
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
