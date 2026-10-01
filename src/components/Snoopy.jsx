/* ============================================================
   Hand-drawn SVG Snoopy family 🐶 — no external assets needed.
   ============================================================ */

const INK = "#463640";

/* A reusable Snoopy head, centred on (0,0) in local coordinates. */
function SnoopyHead({ x = 0, y = 0, scale = 1, earColor = INK }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* ears */}
      <path
        d="M -34 -64 C -62 -72 -84 -46 -78 -10 C -74 14 -52 24 -42 11 C -33 0 -37 -34 -34 -64 Z"
        fill={earColor}
      />
      <path
        d="M 34 -64 C 62 -72 84 -46 78 -10 C 74 14 52 24 42 11 C 33 0 37 -34 34 -64 Z"
        fill={earColor}
      />

      {/* head */}
      <ellipse cx="0" cy="0" rx="56" ry="54" fill="#ffffff" stroke={INK} strokeWidth="4.5" />

      {/* cheeks */}
      <ellipse cx="-44" cy="16" rx="11" ry="8" fill="#ffb3d1" opacity="0.75" />
      <ellipse cx="44" cy="16" rx="11" ry="8" fill="#ffb3d1" opacity="0.75" />

      {/* eyes */}
      <ellipse cx="-21" cy="-9" rx="7.5" ry="9.5" fill={INK} />
      <ellipse cx="21" cy="-9" rx="7.5" ry="9.5" fill={INK} />
      <circle cx="-18.5" cy="-12.5" r="2.6" fill="#fff" />
      <circle cx="23.5" cy="-12.5" r="2.6" fill="#fff" />

      {/* nose */}
      <ellipse cx="0" cy="11" rx="12.5" ry="9.5" fill={INK} />
      <ellipse cx="-3.5" cy="8" rx="3" ry="2.2" fill="#ffffff" opacity="0.5" />

      {/* mouth */}
      <path
        d="M 0 21 L 0 30 M 0 30 C -8 37 -17 34 -19 27 M 0 30 C 8 37 17 34 19 27"
        fill="none"
        stroke={INK}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </g>
  );
}

/* ------------------------------------------------ Head only ------------------------------------------------ */
export function SnoopyFace({ className = "", style, earColor = INK }) {
  return (
    <svg
      viewBox="-92 -84 184 176"
      className={className}
      style={style}
      role="img"
      aria-label="Snoopy"
    >
      <SnoopyHead earColor={earColor} />
    </svg>
  );
}

/* ------------------------------------------------ Peeking over an edge ------------------------------------------------ */
export function SnoopyPeek({ className = "", style }) {
  return (
    <svg
      viewBox="-120 -118 240 210"
      className={className}
      style={style}
      role="img"
      aria-label="Snoopy mengintip"
    >
      {/* paws on the ledge */}
      <g>
        <rect x="-52" y="42" width="44" height="40" rx="20" fill="#ffffff" stroke={INK} strokeWidth="4.5" />
        <rect x="8" y="42" width="44" height="40" rx="20" fill="#ffffff" stroke={INK} strokeWidth="4.5" />
        <path d="M -40 62 L -20 62 M 20 62 L 40 62" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      </g>
      <SnoopyHead y="-28" scale="0.96" />
    </svg>
  );
}

/* ------------------------------------------------ Hugging a heart ------------------------------------------------ */
export function SnoopyHeart({ className = "", style, heartColor = "#ff6fa5" }) {
  return (
    <svg
      viewBox="-124 -118 248 236"
      className={className}
      style={style}
      role="img"
      aria-label="Snoopy memeluk hati"
    >
      <SnoopyHead y="-34" scale="0.94" />

      {/* heart */}
      <g transform="translate(0 62)">
        <path
          d="M 0 40 C -54 6 -54 -36 -26 -36 C -10 -36 0 -25 0 -17 C 0 -25 10 -36 26 -36 C 54 -36 54 6 0 40 Z"
          fill={heartColor}
          stroke="rgba(70,54,64,0.35)"
          strokeWidth="3"
        />
        <path d="M -24 -14 C -30 -6 -30 2 -26 10" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      </g>

      {/* hugging paws */}
      <ellipse cx="-62" cy="62" rx="20" ry="16" fill="#ffffff" stroke={INK} strokeWidth="4.5" />
      <ellipse cx="62" cy="62" rx="20" ry="16" fill="#ffffff" stroke={INK} strokeWidth="4.5" />
    </svg>
  );
}

/* ------------------------------------------------ Napping on the doghouse ------------------------------------------------ */
export function SnoopySleep({ className = "", style }) {
  return (
    <svg
      viewBox="-150 -118 300 250"
      className={className}
      style={style}
      role="img"
      aria-label="Snoopy tidur di atas rumah anjing"
    >
      {/* doghouse */}
      <g>
        <path d="M -108 40 L 0 -24 L 108 40 Z" fill="#ffb3d1" stroke={INK} strokeWidth="4.5" strokeLinejoin="round" />
        <rect x="-86" y="40" width="172" height="88" rx="8" fill="#ffd6e8" stroke={INK} strokeWidth="4.5" />
        <path d="M -30 128 L -30 78 A 30 30 0 0 1 30 78 L 30 128 Z" fill="#8a4b64" stroke={INK} strokeWidth="4.5" />
        <rect x="-108" y="-8" width="216" height="14" rx="7" fill="#ff9ac6" stroke={INK} strokeWidth="4" />
      </g>

      {/* sleeping Snoopy head on the roof */}
      <g transform="translate(0 -84) scale(0.66)">
        <SnoopyHead />
        {/* closed eyes override */}
        <path
          d="M -30 -9 C -24 -2 -16 -2 -12 -9 M 12 -9 C 16 -2 24 -2 30 -9"
          fill="none"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <ellipse cx="-21" cy="-9" rx="9" ry="9" fill="#ffffff" opacity="0.98" />
        <ellipse cx="21" cy="-9" rx="9" ry="9" fill="#ffffff" opacity="0.98" />
        <path
          d="M -30 -9 C -24 -2 -16 -2 -12 -9 M 12 -9 C 16 -2 24 -2 30 -9"
          fill="none"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>

      {/* Zzz */}
      <g fill="#f24e92" fontFamily="Baloo 2, sans-serif" fontWeight="800">
        <text x="66" y="-92" fontSize="26">z</text>
        <text x="92" y="-118" fontSize="20">z</text>
        <text x="112" y="-140" fontSize="15">z</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------ Small icons ------------------------------------------------ */
export function HeartIcon({ className = "", style, filled = true }) {
  return (
    <svg viewBox="0 0 32 30" className={className} style={style} aria-hidden="true">
      <path
        d="M16 28S1 19 1 10.6C1 5.6 4.8 2 9.2 2 12.2 2 14.8 3.8 16 6.4 17.2 3.8 19.8 2 22.8 2 27.2 2 31 5.6 31 10.6 31 19 16 28 16 28Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PawPrint({ className = "", style }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <ellipse cx="32" cy="42" rx="18" ry="15" fill="currentColor" />
      <ellipse cx="12" cy="24" rx="8" ry="10" fill="currentColor" transform="rotate(-18 12 24)" />
      <ellipse cx="26" cy="13" rx="8" ry="10.5" fill="currentColor" transform="rotate(-6 26 13)" />
      <ellipse cx="41" cy="13" rx="8" ry="10.5" fill="currentColor" transform="rotate(6 41 13)" />
      <ellipse cx="53" cy="26" rx="8" ry="10" fill="currentColor" transform="rotate(18 53 26)" />
    </svg>
  );
}

export function Sparkle({ className = "", style }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <path
        d="M20 0 C22 12 28 18 40 20 C28 22 22 28 20 40 C18 28 12 22 0 20 C12 18 18 12 20 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
