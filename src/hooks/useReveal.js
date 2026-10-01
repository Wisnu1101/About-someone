import { useEffect, useRef, useState } from "react";

/**
 * Menambahkan efek muncul (fade + slide) saat elemen masuk ke layar.
 * Pakai: const { ref, isVisible } = useReveal();
 */
export function useReveal(options = {}) {
  const { threshold = 0.16, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const ref = useRef(null);
  /* Kalau IntersectionObserver tidak tersedia (browser lama / SSR),
     langsung tampil tanpa animasi. */
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
