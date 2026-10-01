import { useEffect, useState } from "react";
import SnoopyImage from "./SnoopyImage.jsx";
import "./Navbar.css";

const LINKS = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "favorit", label: "Favorit" },
  { id: "sahabat", label: "Sahabat" },
  { id: "pesan", label: "Pesan" },
];

const ALL_LINKS = [...LINKS, { id: "kejutan", label: "Kejutan 🎁" }];

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menandai bagian yang sedang terlihat */
  useEffect(() => {
    const sections = ALL_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Tutup menu pakai tombol Esc */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`nav${stuck ? " is-stuck" : ""}${menuOpen ? " has-menu" : ""}`}>
      <div className="nav__inner">
        <a
          className="nav__brand"
          href="#beranda"
          aria-label="Ke beranda"
          onClick={() => setMenuOpen(false)}
        >
          <span className="nav__brand-avatar">
            <SnoopyImage alt="Snoopy" />
          </span>
          <span>Discha 🩷</span>
        </a>

        <nav className="nav__desktop" aria-label="Navigasi utama">
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav__link${active === link.id ? " is-active" : ""}`}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          <a className="btn nav__cta" href="#kejutan">
            Kejutan <span aria-hidden="true">🎁</span>
          </a>

          <button
            type="button"
            className={`nav__burger${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__drawer${menuOpen ? " is-open" : ""}`}>
        <ul className="nav__drawer-list">
          {ALL_LINKS.map((link) => (
            <li key={link.id}>
              <a
                className={`nav__link${active === link.id ? " is-active" : ""}`}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
