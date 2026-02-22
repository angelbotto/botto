import { useRef, useState, useCallback } from "react";

export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ctx = useRef<AudioContext | null>(null);
  const masterGain = useRef<GainNode | null>(null);
  const shimmerGain = useRef<GainNode | null>(null);

  const init = useCallback(() => {
    if (ctx.current) return;

    const ac = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    ctx.current = ac;

    const mg = ac.createGain();
    mg.gain.value = 0;
    mg.connect(ac.destination);
    masterGain.current = mg;

    // Bass drone — 55Hz
    const o1 = ac.createOscillator();
    o1.type = "sine";
    o1.frequency.value = 55;
    const g1 = ac.createGain();
    g1.gain.value = 0.1;
    o1.connect(g1);
    g1.connect(mg);
    o1.start();

    // Sub harmonic — 82.41Hz
    const o2 = ac.createOscillator();
    o2.type = "sine";
    o2.frequency.value = 82.41;
    const g2 = ac.createGain();
    g2.gain.value = 0.05;
    o2.connect(g2);
    g2.connect(mg);
    o2.start();

    // Shimmer — 220Hz
    const o3 = ac.createOscillator();
    o3.type = "sine";
    o3.frequency.value = 220;
    const sg = ac.createGain();
    sg.gain.value = 0.02;
    o3.connect(sg);
    sg.connect(mg);
    o3.start();
    shimmerGain.current = sg;

    // LFO modulation
    const lfo = ac.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.12;
    const lg = ac.createGain();
    lg.gain.value = 0.015;
    lfo.connect(lg);
    lg.connect(sg.gain);
    lfo.start();
  }, []);

  const toggle = useCallback(() => {
    init();
    const ac = ctx.current!;
    const mg = masterGain.current!;

    if (!isPlaying) {
      mg.gain.linearRampToValueAtTime(0.12, ac.currentTime + 1.5);
    } else {
      mg.gain.linearRampToValueAtTime(0, ac.currentTime + 1);
    }
    setIsPlaying((p) => !p);
  }, [isPlaying, init]);

  const updateScroll = useCallback((progress: number) => {
    if (!isPlaying || !shimmerGain.current || !ctx.current) return;
    shimmerGain.current.gain.linearRampToValueAtTime(
      0.02 + progress * 0.04,
      ctx.current.currentTime + 0.1,
    );
  }, [isPlaying]);

  return { isPlaying, toggle, updateScroll };
}
