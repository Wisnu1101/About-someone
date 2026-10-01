import { useI18n } from "../i18n/useI18n.js";
import Reveal from "./Reveal.jsx";
import { Sparkle } from "./Snoopy.jsx";

export default function Quotes() {
  const { t } = useI18n();
  const items = t("quotes.items") ?? [];

  return (
    <section id="pesan" className="section quotes">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> {t("quotes.eyebrow")}
          </span>
          <h2>{t("quotes.title")}</h2>
          <p>{t("quotes.subtitle")}</p>
        </Reveal>

        <div className="quotes__list">
          {items.map((quote, i) => (
            <Reveal key={quote.text} className="quote" delay={i * 110}>
              <span className="quote__mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="quote__text">{quote.text}</p>
              <span className="quote__emoji" aria-hidden="true">
                {quote.emoji}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
