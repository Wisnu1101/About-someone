import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = ["🩷", "💗", "💕", "🎀", "🌸", "✨", "🐶", "☁️"];
const COLORS = ["#ff9ac6", "#ff77ae", "#f24e92", "#ffbcd8", "#ffd6e8"];

let seq = 0;

/**
 * Hati-hati kecil yang mengambang naik dari dasar layar.
 * Plus ledakan emoji saat diklik di mana saja.
 */
export function useFloatingHearts({ spawnEveryMs = 1500 } = {}) {
  const [floaters, setFloaters] = useState([]);
  const [bursts, setBursts] = useState([]);
  const reduceRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceRef.current = mq.matches;
    const onChange = (e) => {
      reduceRef.current = e.matches;
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  /* spawn otomatis */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setInterval(() => {
      if (reduceRef.current || document.hidden) return;
      setFloaters((prev) => [
        ...prev.slice(-14),
        {
          key: ++seq,
          left: 3 + Math.random() * 94,
          glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          duration: 9 + Math.random() * 8,
          size: 14 + Math.random() * 18,
          drift: (Math.random() - 0.5) * 120,
        },
      ]);
    }, spawnEveryMs);
    return () => window.clearInterval(id);
  }, [spawnEveryMs]);

  /* klik = ledakan kecil */
  const burst = useCallback((clientX, clientY) => {
    if (reduceRef.current) return;
    const count = 7;
    const made = Array.from({ length: count }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
      const dist = 46 + Math.random() * 58;
      return {
        key: ++seq,
        x: clientX,
        y: clientY,
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist - 18}px`,
        rot: `${(Math.random() - 0.5) * 120}deg`,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 12 + Math.random() * 12,
      };
    });
    setBursts((prev) => [...prev.slice(-40), ...made]);
    const keys = made.map((m) => m.key);
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => !keys.includes(b.key)));
    }, 850);
  }, []);

  /* bersihkan floater yang sudah selesai */
  const removeFloater = useCallback((key) => {
    setFloaters((prev) => prev.filter((f) => f.key !== key));
  }, []);

  return { floaters, bursts, burst, removeFloater };
}
