import { useEffect, useRef, useState } from "react";

/**
 * Jejak hati lembut yang mengikuti kursor.
 * Nonaktif otomatis di layar sentuh & mode hemat gerak.
 */
export function useTrail({ enabled = true } = {}) {
  const [dots, setDots] = useState([]);
  const seq = useRef(0);
  const last = useRef(0);
  const allowed = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !enabled) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    allowed.current = !reduce && !touch;
    if (!allowed.current) return;

    const GLYPHS = ["🩷", "💗", "✨", "🎀", "🌸"];

    const onMove = (e) => {
      const now = performance.now();
      const gap = 130;
      if (now - last.current < gap) return;
      last.current = now;

      const dot = {
        key: ++seq.current,
        x: e.clientX,
        y: e.clientY,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        size: 12 + Math.random() * 10,
      };
      setDots((prev) => [...prev.slice(-10), dot]);

      const key = dot.key;
      window.setTimeout(() => {
        setDots((prev) => prev.filter((d) => d.key !== key));
      }, 900);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return dots;
}
