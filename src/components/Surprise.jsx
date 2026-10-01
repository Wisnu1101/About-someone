import { useCallback, useRef, useState } from "react";
import { littleNotes } from "../data.js";
import Reveal from "./Reveal.jsx";
import { Sparkle } from "./Snoopy.jsx";
import SnoopyImage from "./SnoopyImage.jsx";

const MARQUEE_WORDS = [
  "🩷 Never give up",
  "🐶 Snoopy hug",
  "🎀 Sweet things take time",
  "🌸 Chase your dreams",
  "✨ You are doing great",
];

export default function Surprise({ onCelebrate }) {
  const [note, setNote] = useState(null);
  const [count, setCount] = useState(0);
  const lastIndex = useRef(-1);

  const pickNote = useCallback(() => {
    let index = Math.floor(Math.random() * littleNotes.length);
    if (littleNotes.length > 1 && index === lastIndex.current) {
      index = (index + 1) % littleNotes.length;
    }
    lastIndex.current = index;
    setNote(littleNotes[index]);
    setCount((c) => c + 1);
    onCelebrate?.();
  }, [onCelebrate]);

  return (
    <section id="kejutan" className="section surprise">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> Kejutan kecil
          </span>
          <h2>Pencet Tombolnya 🎁</h2>
          <p>Ada pesan manis random yang nunggu kamu di sini. Coba pencet terus ya~</p>
        </Reveal>

        <Reveal className="surprise__box" delay={80}>
          <span className="surprise__gift" aria-hidden="true">
            🎁
          </span>

          {note ? (
            <p className="surprise__note" key={note}>
              {note}
            </p>
          ) : (
            <p className="surprise__note">
              Halloowww! Selamat datang di sudut pink-ku 🩷 tekan tombol di bawah ya!
            </p>
          )}

          {count > 0 && (
            <p className="surprise__counter">
              Kamu sudah buka {count} pesan manis. Makin banyak makin manis! 🍬
            </p>
          )}

          <div className="surprise__actions">
            <button className="btn" type="button" onClick={pickNote}>
              {count === 0 ? "Buka Kejutan 🎀" : "Pesan lain dong! ✨"}
            </button>
            <a className="btn btn--ghost" href="#beranda">
              Balik ke Atas 🩷
            </a>
          </div>
        </Reveal>

        <div className="surprise__marquee" aria-hidden="true">
          <div className="surprise__track">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span className="surprise__word" key={`${word}-${i}`}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="surprise__snoopy-wrap">
          <SnoopyImage className="surprise__snoopy" alt="Snoopy memeluk hati" />
        </div>
      </div>
    </section>
  );
}
