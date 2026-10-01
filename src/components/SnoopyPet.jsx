import { useCallback, useRef, useState } from "react";
import { useI18n } from "../i18n/useI18n.js";
import { useFlowers } from "../hooks/useFlowers.js";
import Flowers from "./Flowers.jsx";
import SnoopyImage from "./SnoopyImage.jsx";

let bubbleSeq = 0;

/**
 * Snoopy melayang di pojok kanan bawah.
 * Kalau dipencet → muncul bunga-bunga mekar di sekitar kursor. 🌸
 */
export default function SnoopyPet() {
  const { t } = useI18n();
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
      const bubbles = t("pet.bubbles") ?? [];
      const text = bubbles[Math.floor(Math.random() * bubbles.length)] ?? "";
      setBubble({ key: ++bubbleSeq, text });
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
    [bloom, t],
  );

  return (
    <>
      <button
        type="button"
        className="snoopy-pet"
        onClick={handleClick}
        aria-label={t("pet.ariaLabel")}
        title={t("pet.title")}
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
