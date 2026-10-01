import { friends, icons } from "../data.js";
import { useI18n } from "../i18n/useI18n.js";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { Sparkle } from "./Snoopy.jsx";

export default function Friends() {
  const { t } = useI18n();
  const items = t("friends.items") ?? [];

  return (
    <section id="sahabat" className="section friends">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> {t("friends.eyebrow")}
          </span>
          <h2>{t("friends.title")}</h2>
        </Reveal>

        <Reveal className="friends__intro" delay={60}>
          <p>{t("friends.intro")}</p>
        </Reveal>

        <div className="friends__grid">
          {friends.map((friend, i) => {
            const info = items.find((it) => it.id === friend.id) ?? {};
            return (
              <Reveal key={friend.id} className="friends__card" delay={i * 120}>
                <Photo
                  src={friend.src}
                  alt={info.title ?? ""}
                  sticker={icons.friends[i % icons.friends.length]}
                  tilt={i % 2 === 0 ? -2.5 : 2.5}
                />
                <h3 className="friends__title">{info.title}</h3>
                <p className="friends__note">{info.note}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
