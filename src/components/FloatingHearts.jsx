import "./Effects.css";

/** Hati & emoji yang melayang naik dari bawah layar. */
export function FloatingHearts({ floaters, onDone }) {
  return (
    <div className="effects-layer" aria-hidden="true">
      {floaters.map((f) => (
        <span
          key={f.key}
          className="floater"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
          }}
          onAnimationEnd={() => onDone?.(f.key)}
        >
          {f.glyph}
        </span>
      ))}
    </div>
  );
}

/** Kilatan emoji kecil di titik yang diklik. */
export function BurstLayer({ bursts }) {
  return (
    <div className="burst-layer" aria-hidden="true">
      {bursts.map((b) => (
        <span
          key={b.key}
          className="burst"
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`,
            fontSize: `${b.size}px`,
            animationDelay: "0s",
            ["--dx"]: b.dx,
            ["--dy"]: b.dy,
            ["--rot"]: b.rot,
          }}
        >
          {b.glyph}
        </span>
      ))}
    </div>
  );
}
