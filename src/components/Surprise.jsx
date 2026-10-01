import { useCallback, useMemo, useRef, useState } from "react";
import { useI18n } from "../i18n/useI18n.js";
import Reveal from "./Reveal.jsx";
import { Sparkle } from "./Snoopy.jsx";
import SnoopyImage from "./SnoopyImage.jsx";

export default function Surprise({ onCelebrate }) {
  const { t } = useI18n();
  const [noteIndex, setNoteIndex] = useState(null);
  const [count, setCount] = useState(0);
  const lastIndex = useRef(-1);

  const notes = useMemo(() => t("littleNotes") ?? [], [t]);
  const marquee = t("surprise.marquee") ?? [];
  /* Teks catatan diturunkan dari index — jadi otomatis ikut ganti bahasa. */
  const note = noteIndex === null ? null : notes[noteIndex];

  const pickNote = useCallback(() => {
    let index = Math.floor(Math.random() * notes.length);
    if (notes.length > 1 && index === lastIndex.current) {
      index = (index + 1) % notes.length;
    }
    lastIndex.current = index;
    setNoteIndex(index);
    setCount((c) => c + 1);
    onCelebrate?.();
  }, [notes, onCelebrate]);

  return (
    <section id="kejutan" className="section surprise">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> {t("surprise.eyebrow")}
          </span>
          <h2>{t("surprise.title")}</h2>
          <p>{t("surprise.subtitle")}</p>
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
            <p className="surprise__note">{t("surprise.welcome")}</p>
          )}

          {count > 0 && (
            <p className="surprise__counter">{t("surprise.opened", { n: count })}</p>
          )}

          <div className="surprise__actions">
            <button className="btn" type="button" onClick={pickNote}>
              {count === 0 ? t("surprise.open") : t("surprise.another")}
            </button>
            <a className="btn btn--ghost" href="#beranda">
              {t("surprise.backToTop")}
            </a>
          </div>
        </Reveal>

        <div className="surprise__marquee" aria-hidden="true">
          <div className="surprise__track">
            {[...marquee, ...marquee].map((word, i) => (
              <span className="surprise__word" key={`${word}-${i}`}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="surprise__snoopy-wrap">
          <SnoopyImage className="surprise__snoopy" alt="Snoopy" />
        </div>
      </div>
    </section>
  );
}
