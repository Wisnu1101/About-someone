import { useI18n } from "../i18n/useI18n.js";
import Reveal from "./Reveal.jsx";
import { Sparkle, HeartIcon } from "./Snoopy.jsx";

const PINK_SHADES = ["#ffeaf3", "#ffd6e8", "#ffbcd8", "#ff9ac6", "#ff77ae", "#f24e92", "#d63a78"];

function FavGroup({ icon, title, subtitle, items }) {
  return (
    <div className="fav__group">
      <Reveal className="fav__group-head">
        <h3 className="fav__group-title">
          <span aria-hidden="true">{icon}</span> {title}
          <span className="fav__count">{items.length}</span>
        </h3>
        {subtitle ? <p className="fav__group-sub">{subtitle}</p> : null}
      </Reveal>

      <div className="fav__grid">
        {items.map((item, i) => (
          <Reveal key={item.name} className="fav__card" delay={i * 90} as="article">
            <span className="fav__emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <h4 className="fav__name">{item.name}</h4>
            <p>{item.note}</p>
            <span className="fav__tag">{item.tag}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Favorites() {
  const { t } = useI18n();
  const foods = t("foods") ?? [];
  const drinks = t("drinks") ?? [];

  return (
    <section id="favorit" className="section fav">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> {t("favorites.eyebrow")}
          </span>
          <h2>{t("favorites.title")}</h2>
          <p>{t("favorites.subtitle")}</p>
        </Reveal>

        {/* 4 makanan favorit */}
        <FavGroup
          icon="🍽️"
          title={t("favorites.foodsTitle")}
          subtitle={t("favorites.foodsSub")}
          items={foods}
        />

        {/* 3 minuman favorit */}
        <FavGroup
          icon="🧋"
          title={t("favorites.drinksTitle")}
          subtitle={t("favorites.drinksSub")}
          items={drinks}
        />

        <Reveal className="fav__color" delay={120}>
          <HeartIcon className="hero__hint-heart" style={{ width: 26, height: 26 }} />
          <div className="fav__swatches" aria-hidden="true">
            {PINK_SHADES.map((shade) => (
              <span key={shade} className="fav__swatch" style={{ background: shade }} />
            ))}
          </div>
          <p className="fav__color-text">{t("favorites.colorTitle")}</p>
          <p className="fav__color-text" style={{ fontSize: "0.98rem", margin: 0 }}>
            {t("favorites.colorSub")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
