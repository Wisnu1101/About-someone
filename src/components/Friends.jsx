import { friends, friendText } from "../data.js";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { Sparkle } from "./Snoopy.jsx";

export default function Friends() {
  return (
    <section id="sahabat" className="section friends">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> Sahabat
          </span>
          <h2>Sahabat Dekatku 🫶🏻</h2>
        </Reveal>

        <Reveal className="friends__intro" delay={60}>
          <p>{friendText}</p>
        </Reveal>

        <div className="friends__grid">
          {friends.map((friend, i) => (
            <Reveal key={friend.id} className="friends__card" delay={i * 120}>
              <Photo
                src={friend.src}
                alt={friend.title}
                sticker={i === 0 ? "🌷" : "🐶"}
                tilt={i % 2 === 0 ? -2.5 : 2.5}
              />
              <h3 className="friends__title">{friend.title}</h3>
              <p className="friends__note">{friend.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
