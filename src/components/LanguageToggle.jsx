import { useI18n } from "../i18n/useI18n.js";
import "./LanguageToggle.css";

/**
 * Tombol ganti bahasa. Tampilan utama tetap English,
 * tombol ini buat pindah ke Indonesia (dan balik lagi).
 */
export default function LanguageToggle({ className = "" }) {
  const { lang, setLang, t, languages } = useI18n();

  return (
    <div
      className={`lang${className ? ` ${className}` : ""}`}
      role="group"
      aria-label={t("nav.langLabel")}
      title={t("nav.langTo")}
    >
      <span className="lang__globe" aria-hidden="true">
        🌐
      </span>
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang__btn${lang === item.code ? " is-active" : ""}`}
          aria-pressed={lang === item.code}
          aria-label={item.full}
          title={item.full}
          onClick={() => setLang(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
