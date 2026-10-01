import { useMemo, useState } from "react";
import { photoCandidates } from "../utils/photos.js";
import { useI18n } from "../i18n/useI18n.js";
import SnoopyImage from "./SnoopyImage.jsx";
import "./Photo.css";

function Placeholder({ label, hint }) {
  const { t } = useI18n();
  return (
    <div className="photo__placeholder">
      <SnoopyImage className="photo__placeholder-art" alt="Snoopy" />
      <span className="photo__placeholder-text">{label ?? t("photo.placeholder")}</span>
      {hint ? <span className="photo__placeholder-hint">{hint}</span> : null}
    </div>
  );
}

function PhotoImage({ candidates, alt, hint }) {
  const [index, setIndex] = useState(0);
  const src = candidates[index];

  if (!src) return <Placeholder label={alt} hint={hint} />;

  return (
    <img
      className="photo__img"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (index + 1 >= candidates.length) {
          console.info(
            `[Foto] File untuk "${alt}" belum ada. Taruh salah satu dari:`,
            candidates.join("  |  "),
          );
        }
        setIndex(index + 1);
      }}
    />
  );
}

/**
 * Gambar dengan bingkai lucu + fallback Snoopy otomatis
 * kalau file fotonya belum ditaruh di folder public.
 *
 * Menerima .jpg / .jpeg / .png / .webp tanpa perlu ubah kode.
 */
export default function Photo({ src, alt = "", caption, sticker = "🎀", tilt = 0 }) {
  const candidates = useMemo(() => photoCandidates(src), [src]);
  /* Petunjuk nama file hanya muncul saat development, biar versi jadi tetap rapi. */
  const hint = import.meta.env.DEV && candidates.length ? candidates.join("  ·  ") : null;

  return (
    <figure className="photo" style={{ ["--tilt"]: `${tilt}deg` }}>
      <span className="photo__tape" aria-hidden="true" />
      <span className="photo__sticker" aria-hidden="true">
        {sticker}
      </span>

      <div className="photo__frame">
        {/* key = daftar kandidat, jadi state ikut reset kalau src diganti */}
        <PhotoImage key={candidates.join("|")} candidates={candidates} alt={alt} hint={hint} />
      </div>

      {caption ? <figcaption className="photo__caption">{caption}</figcaption> : null}
    </figure>
  );
}
