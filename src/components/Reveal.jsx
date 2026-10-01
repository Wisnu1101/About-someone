import { useReveal } from "../hooks/useReveal.js";

/**
 * Pembungkus animasi "muncul saat di-scroll".
 * <Reveal delay={120}> ... </Reveal>
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  threshold,
  style,
}) {
  const { ref, isVisible } = useReveal(threshold ? { threshold } : undefined);
  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ["--reveal-delay"]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
