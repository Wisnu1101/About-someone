import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n.js";
import SnoopyImage from "./SnoopyImage.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang } = useI18n();
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = t("nav.links") ?? [];
  const drawerLinks = [...links, { id: "kejutan", label: t("nav.surprise") }];

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menandai bagian yang sedang terlihat */
  useEffect(() => {
    const ids = [...links.map((l) => l.id), "kejutan"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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
          aria-label={t("nav.toHome")}
          onClick={() => setMenuOpen(false)}
        >
          <span className="nav__brand-avatar">
            <SnoopyImage alt="Snoopy" />
          </span>
          <span>{t("nav.brand")}</span>
        </a>

        <nav className="nav__desktop" aria-label={t("nav.mainNav")}>
          <ul className="nav__links">
            {links.map((link) => (
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
          <LanguageToggle className="nav__lang" />

          <a className="btn nav__cta" href="#kejutan">
            {t("nav.surprise")}
          </a>

          <button
            type="button"
            className={`nav__burger${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
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
          {drawerLinks.map((link) => (
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

        <LanguageToggle className="nav__lang nav__lang--drawer" />
      </div>
    </header>
  );
}
