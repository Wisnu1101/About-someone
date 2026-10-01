import { profile } from "../data.js";
import { HeartIcon } from "./Snoopy.jsx";
import SnoopyImage from "./SnoopyImage.jsx";
import "./Sections.css";

const FOOTER_LINKS = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "favorit", label: "Favorit" },
  { id: "sahabat", label: "Sahabat" },
  { id: "pesan", label: "Pesan" },
  { id: "kejutan", label: "Kejutan" },
];

export default function Footer() {
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
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a className="chip" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer__heart">
          Dibuat dengan <HeartIcon style={{ width: 16, height: 16, display: "inline", verticalAlign: "-2px", color: "var(--pink-500)" }} />{" "}
          <b>pink</b> &amp; Snoopy buat kamu 🐶🎀
        </p>
      </div>

      <a className="footer__top" href="#beranda" aria-label="Balik ke atas">
        ↑
      </a>
    </footer>
  );
}
