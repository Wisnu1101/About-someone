import { profile, aboutPhoto } from "../data.js";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { Sparkle } from "./Snoopy.jsx";

const ITEMS = [
  {
    icon: "🏫",
    title: "Sekolah",
    text: `Sekarang aku sekolah di ${profile.school}.`,
  },
  {
    icon: "🥵",
    title: "Gak tahan tempat panas",
    text: "Aku gak suka tempat yang panas. Kalau kepanasan, mood-ku bisa berubah seketika, hehe.",
  },
  {
    icon: "🎶",
    title: "Playlist favorit",
    text: "Musik favoritku banyak banget, jadi aku taruh playlist-nya aja di kotak sebelah.",
  },
];

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.42a.78.78 0 0 1-1.07.26c-2.93-1.79-6.62-2.19-10.97-1.2a.78.78 0 1 1-.35-1.52c4.76-1.09 8.85-.62 12.13 1.39.36.22.48.7.26 1.07Zm1.23-2.74a.97.97 0 0 1-1.34.32c-3.36-2.06-8.47-2.66-12.44-1.45a.97.97 0 1 1-.57-1.86c4.53-1.38 10.17-.71 14.03 1.66.46.28.6.87.32 1.33Zm.1-2.85C14.06 8.44 7.56 8.23 4.02 9.3a1.17 1.17 0 1 1-.68-2.23c4.06-1.23 11.24-.99 15.68 1.65a1.16 1.16 0 0 1-1.19 2Z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="tentang" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <Sparkle className="eyebrow__spark" /> Kenalan dulu yuk
          </span>
          <h2>Tentang Aku 🩷</h2>
          <p>Sedikit cerita tentang Discha yang suka pink, Snoopy, dan hal-hal manis.</p>
        </Reveal>

        <div className="about__grid">
          <Reveal className="card about__card" delay={80}>
            <h3>Hai, aku {profile.fullName}!</h3>
            <ul className="about__list">
              {ITEMS.map((item) => (
                <li className="about__item" key={item.title}>
                  <span className="about__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about__music">
              <div className="about__music-note">
                <strong>🎧 Playlist Spotify-ku</strong>
                <span>Isinya lagu-lagu yang nemenin hariku. Boleh banget diikuti~</span>
              </div>
              <a
                className="about__spotify"
                href={profile.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon /> Buka Playlist
              </a>
            </div>
          </Reveal>

          <Reveal className="about__portrait" delay={160}>
            <Photo
              src={aboutPhoto.src}
              alt={aboutPhoto.caption || aboutPhoto.alt}
              caption={aboutPhoto.caption}
              sticker={aboutPhoto.sticker}
              tilt={2}
            />
            <p className="about__tagline">Sweet treats &amp; sweet dreams 🐶💤</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
