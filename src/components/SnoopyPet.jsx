import { useCallback, useRef, useState } from "react";
import { useFlowers } from "../hooks/useFlowers.js";
import Flowers from "./Flowers.jsx";
import SnoopyImage from "./SnoopyImage.jsx";

const BUBBLES = [
  "Hehe, geli! 🌸",
  "Bunga buat kamu 🩷",
  "Snoopy sayang kamu 🐶",
  "Mekar deh! 🌷",
  "Pencet lagi dong 🎀",
  "Wangi banget 💮",
  "Semangat ya! ✨",
  "Cup cup cup 🥰",
];

let bubbleSeq = 0;

/**
 * Snoopy melayang di pojok kanan bawah.
 * Kalau dipencet → muncul bunga-bunga mekar di sekitar kursor. 🌸
 */
export default function SnoopyPet() {
  const { flowers, bloom, remove } = useFlowers();
  const [bubble, setBubble] = useState(null);
  const [rings, setRings] = useState([]);
  const timers = useRef([]);

  const handleClick = useCallback(
    (event) => {
      /* titik bunga = tengah gambar Snoopy */
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX ?? rect.left + rect.width / 2;
      const y = event.clientY ?? rect.top + rect.height / 2;

      bloom(x, y);

      /* balon ucapan random */
      setBubble({ key: ++bubbleSeq, text: BUBBLES[Math.floor(Math.random() * BUBBLES.length)] });
      const t1 = window.setTimeout(() => setBubble(null), 1600);
      timers.current.push(t1);

      /* cincin sinar */
      const ringKey = ++bubbleSeq;
      setRings((prev) => [...prev.slice(-3), ringKey]);
      const t2 = window.setTimeout(() => {
        setRings((prev) => prev.filter((r) => r !== ringKey));
      }, 750);
      timers.current.push(t2);
    },
    [bloom],
  );

  return (
    <>
      <button
        type="button"
        className="snoopy-pet"
        onClick={handleClick}
        aria-label="Pencet Snoopy untuk lihat bunga"
        title="Pencet aku! 🌸"
      >
        {rings.map((r) => (
          <span className="snoopy-pet__ring" key={r} aria-hidden="true" />
        ))}

        {bubble ? (
          <span className="snoopy-pet__bubble" key={bubble.key} aria-hidden="true">
            {bubble.text}
          </span>
        ) : null}

        <SnoopyImage className="snoopy-pet__img" alt="Snoopy" />
      </button>

      <Flowers flowers={flowers} onDone={remove} />
    </>
  );
}
