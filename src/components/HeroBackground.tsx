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

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type Particle = { x: number; y: number; r: number; vx: number; vy: number; hue: number };
    const particles: Particle[] = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.3 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.00012,
        vy: (Math.random() - 0.5) * 0.00012,
        hue: 280 + Math.random() * 40,
      });
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // ambient violet glow blobs
      const blobs = [
        { x: w * 0.15, y: h * 0.4, r: 380, color: "rgba(168, 85, 247, 0.18)" },
        { x: w * 0.85, y: h * 0.7, r: 460, color: "rgba(217, 70, 239, 0.13)" },
        { x: w * 0.5, y: h * 0.1, r: 320, color: "rgba(99, 47, 168, 0.12)" },
      ];
      for (const b of blobs) {
        const offset = Math.sin(t * 0.00018 + b.x) * 30;
        const g = ctx.createRadialGradient(b.x + offset, b.y + offset * 0.6, 0, b.x + offset, b.y + offset * 0.6, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x + offset, b.y + offset * 0.6, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, 0.6)`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // subtle scanlines
      ctx.fillStyle = "rgba(255,255,255,0.012)";
      for (let y = 0; y < h; y += 3) {
        ctx.fillRect(0, y, w, 1);
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
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"
        aria-hidden
      />
    </div>
  );
}
