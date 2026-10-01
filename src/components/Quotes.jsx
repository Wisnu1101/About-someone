import { quotes } from "../data.js";
import Reveal from "./Reveal.jsx";
import { Sparkle } from "./Snoopy.jsx";

export default function Quotes() {
  return (
    <section id="pesan" className="section quotes">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> Pesan buat kamu
          </span>
          <h2>Never Give Up ✨</h2>
          <p>Kata-kata kecil yang aku pegang terus — semoga bikin harimu semangat lagi.</p>
        </Reveal>

        <div className="quotes__list">
          {quotes.map((quote, i) => (
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
