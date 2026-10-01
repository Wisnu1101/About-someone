import { profile } from "../data.js";
import { useI18n } from "../i18n/useI18n.js";
import { HeartIcon } from "./Snoopy.jsx";
import SnoopyImage from "./SnoopyImage.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import "./Sections.css";

export default function Footer() {
  const { t } = useI18n();
  const links = t("nav.links") ?? [];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <SnoopyImage alt="Snoopy" />
            <div>
              <strong>{profile.fullName} 🩷</strong>
              <span>{profile.school}</span>
            </div>
          </div>

          <ul className="footer__links">
            {links.map((link) => (
              <li key={link.id}>
                <a className="chip" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer__heart">
          {t("footer.madeWith")}{" "}
          <HeartIcon
            style={{
              width: 16,
              height: 16,
              display: "inline",
              verticalAlign: "-2px",
              color: "var(--pink-500)",
            }}
          />{" "}
          <b>{t("footer.pinkWord")}</b> {t("footer.andSnoopy")}
        </p>

        <div className="footer__lang">
          <LanguageToggle />
        </div>
      </div>

      <a className="footer__top" href="#beranda" aria-label={t("footer.backToTop")}>
        ↑
      </a>
    </footer>
  );
}
