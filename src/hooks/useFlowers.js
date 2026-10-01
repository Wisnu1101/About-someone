import { useCallback, useEffect, useRef, useState } from "react";

const FLOWERS = ["🌸", "🌷", "🌺", "🌼", "💮", "🏵️", "🌻", "🌹", "🩷", "🎀", "✨"];
const PETALS = ["🌸", "🌷", "🌺", "💮", "🩷"];

let seq = 0;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Efek bunga bermunculan saat Snoopy dipencet. 🌸
 * Satu klik = sekumpulan bunga mekar + kelopak yang naik pelan.
 */
export function useFlowers() {
  const [flowers, setFlowers] = useState([]);
  const reduceRef = useRef(false);
  const timers = useRef([]);

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

  /* bersihkan timer saat unmount */
  useEffect(() => {
    const list = timers.current;
    return () => list.forEach((t) => window.clearTimeout(t));
  }, []);

  const bloom = useCallback((clientX, clientY) => {
    if (reduceRef.current) return;

    const made = [];

    /* bunga mekar menyebar dari titik klik */
    const burstCount = 12;
    for (let i = 0; i < burstCount; i += 1) {
      const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.5;
      const dist = 55 + Math.random() * 85;
      made.push({
        key: ++seq,
        kind: "bloom",
        x: clientX,
        y: clientY,
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist - 30}px`,
        rot: `${(Math.random() - 0.5) * 220}deg`,
        glyph: pick(FLOWERS),
        size: 16 + Math.random() * 16,
        dur: `${(0.85 + Math.random() * 0.45).toFixed(2)}s`,
      });
    }

    /* kelopak yang naik pelan ke atas */
    for (let i = 0; i < 7; i += 1) {
      made.push({
        key: ++seq,
        kind: "petal",
        x: clientX + (Math.random() - 0.5) * 90,
        y: clientY + (Math.random() - 0.5) * 30,
        dx: `${(Math.random() - 0.5) * 140}px`,
        dy: `${-(180 + Math.random() * 220)}px`,
        rot: `${(Math.random() - 0.5) * 300}deg`,
        glyph: pick(PETALS),
        size: 14 + Math.random() * 14,
        dur: `${(1.3 + Math.random() * 0.8).toFixed(2)}s`,
      });
    }

    setFlowers((prev) => [...prev.slice(-60), ...made]);

    const keys = made.map((m) => m.key);
    const t = window.setTimeout(() => {
      setFlowers((prev) => prev.filter((f) => !keys.includes(f.key)));
    }, 2300);
    timers.current.push(t);
  }, []);

  const remove = useCallback((key) => {
    setFlowers((prev) => prev.filter((f) => f.key !== key));
  }, []);

  return { flowers, bloom, remove };
}
