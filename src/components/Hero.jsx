import { profile, heroPhoto } from "../data.js";
import { useI18n } from "../i18n/useI18n.js";
import { useReveal } from "../hooks/useReveal.js";
import Photo from "./Photo.jsx";
import { HeartIcon, Sparkle, PawPrint } from "./Snoopy.jsx";
import SnoopyImage from "./SnoopyImage.jsx";
import "./Hero.css";

export default function Hero() {
  const { t } = useI18n();
  const { ref: textRef, isVisible: textVisible } = useReveal();
  const { ref: photoRef, isVisible: photoVisible } = useReveal({ threshold: 0.05 });

  const nicknames = profile.nicknames;
  const facts = t("quickFacts") ?? [];

  return (
    <section id="beranda" className="hero">
      {/* dekorasi latar */}
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
        <Sparkle className="hero__spark hero__spark--1" />
        <Sparkle className="hero__spark hero__spark--2" />
        <Sparkle className="hero__spark hero__spark--3" />
        <PawPrint className="hero__paw hero__paw--1" />
        <PawPrint className="hero__paw hero__paw--2" />
      </div>

      <div className="container hero__inner">
        <div className={`hero__text reveal${textVisible ? " is-visible" : ""}`} ref={textRef}>
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> {profile.school}
          </span>

          <h1 className="hero__title">
            {t("hero.greeting")}
            <br />
            {t("hero.introWord")} <span className="hero__name">{t("hero.name")}</span>
            <span className="hero__wave" aria-hidden="true">
              🩷
            </span>
          </h1>

          <p className="hero__nick">
            {t("hero.nickIntro")}{" "}
            {nicknames.map((n, i) => (
              <span key={n}>
                <b>{n}</b>
                {i < nicknames.length - 1 ? " · " : " "}
              </span>
            ))}
            <span aria-hidden="true">👋🏻</span>
          </p>

          <p className="hero__intro">{t("hero.intro")}</p>

          <div className="hero__actions">
            <a className="btn" href="#favorit">
              {t("hero.ctaFavorites")} <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#sahabat">
              {t("hero.ctaFriends")}
            </a>
          </div>

          <ul className="hero__facts">
            {facts.map((f) => (
              <li key={f.label} className="chip">
                <span aria-hidden="true">{f.emoji}</span>
                <span className="hero__fact-label">{f.label}:</span> {f.value}
              </li>
            ))}
          </ul>

          <p className="hero__hint">
            <HeartIcon className="hero__hint-heart" /> {t("hero.hint")}
          </p>
        </div>

        {/* Satu foto utama di beranda */}
        <div className={`hero__photo reveal${photoVisible ? " is-visible" : ""}`} ref={photoRef}>
          <Photo
            src={heroPhoto.src}
            alt={t("hero.name")}
            caption={t("hero.photoCaption")}
            sticker={heroPhoto.sticker}
            tilt={-2}
          />
        </div>
      </div>

      <div className="hero__ledge" aria-hidden="true">
        <SnoopyImage className="hero__snoopy" alt="Snoopy" />
      </div>
    </section>
  );
}
