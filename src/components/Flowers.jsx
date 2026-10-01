import "./Flowers.css";

/** Bunga-bunga yang bermunculan saat Snoopy dipencet. 🌸 */
export default function Flowers({ flowers, onDone }) {
  if (!flowers.length) return null;
  return (
    <div className="flowers-layer" aria-hidden="true">
      {flowers.map((f) => (
        <span
          key={f.key}
          className={`flower flower--${f.kind}`}
          style={{
            left: `${f.x}px`,
            top: `${f.y}px`,
            fontSize: `${f.size}px`,
            ["--dx"]: f.dx,
            ["--dy"]: f.dy,
            ["--rot"]: f.rot,
            ["--dur"]: f.dur,
          }}
          onAnimationEnd={() => onDone?.(f.key)}
        >
          {f.glyph}
        </span>
      ))}
    </div>
  );
}
