import { useMemo, useState } from "react";
import { photoCandidates } from "../utils/photos.js";
import { SnoopyFace } from "./Snoopy.jsx";
import "./SnoopyImage.css";

/* Base path gambar Snoopy — ekstensi bebas (.png/.jpg/.jpeg/.webp). */
const SNOOPY_BASE = "/photos/snoopy";

/*
 * PNG transparan didahulukan (latar putihnya sudah dibuang),
 * baru kemudian format lain sebagai cadangan.
 */
const PRIORITY = [
  `${SNOOPY_BASE}.png`,
  `${SNOOPY_BASE}.webp`,
  ...photoCandidates(SNOOPY_BASE),
].filter((src, i, arr) => arr.indexOf(src) === i);

/* Cache sederhana: sekali ketemu file yang jalan, dipakai untuk semua pemakaian. */
let cachedSrc = null;

/**
 * Menampilkan gambar Snoopy (foto) sebagai pengganti gambar vektor.
 * Kalau filenya belum ada, otomatis balik ke Snoopy SVG biar tetap lucu.
 */
export default function SnoopyImage({
  className = "",
  style,
  alt = "Snoopy",
  fallback = true,
}) {
  const candidates = useMemo(() => PRIORITY, []);
  const [index, setIndex] = useState(0);
  const [dead, setDead] = useState(false);

  const src = cachedSrc ?? candidates[index];

  if (dead || !src) {
    return fallback ? <SnoopyFace className={className} style={style} /> : null;
  }

  return (
    <img
      className={`snoopy-img${className ? ` ${className}` : ""}`}
      style={style}
      src={src}
      alt={alt}
      draggable="false"
      decoding="async"
      onLoad={() => {
        cachedSrc = src;
      }}
      onError={() => {
        if (index + 1 >= candidates.length) {
          console.info(
            "[Snoopy] Gambar belum ada. Taruh salah satu dari:",
            candidates.join("  |  "),
          );
          setDead(true);
          return;
        }
        setIndex(index + 1);
      }}
    />
  );
}
