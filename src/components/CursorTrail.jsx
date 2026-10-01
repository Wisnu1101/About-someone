import "./Effects.css";

/** Jejak hati lembut yang mengikuti kursor (desktop saja). */
export default function CursorTrail({ dots }) {
  if (!dots.length) return null;
  return (
    <div className="trail-layer" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.key}
          className="trail-dot"
          style={{ left: `${d.x}px`, top: `${d.y}px`, fontSize: `${d.size}px` }}
        >
          {d.glyph}
        </span>
      ))}
    </div>
  );
}
