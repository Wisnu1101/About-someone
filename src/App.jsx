import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Favorites from "./components/Favorites.jsx";
import Friends from "./components/Friends.jsx";
import Quotes from "./components/Quotes.jsx";
import Surprise from "./components/Surprise.jsx";
import Footer from "./components/Footer.jsx";
import { FloatingHearts, BurstLayer } from "./components/FloatingHearts.jsx";
import CursorTrail from "./components/CursorTrail.jsx";
import SnoopyPet from "./components/SnoopyPet.jsx";
import { PawPrint } from "./components/Snoopy.jsx";

import { useFloatingHearts } from "./hooks/useFloatingHearts.js";
import { useTrail } from "./hooks/useTrail.js";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export default function App() {
  const { floaters, bursts, burst, removeFloater } = useFloatingHearts({ spawnEveryMs: 1600 });
  const trail = useTrail();

  /* Klik di mana saja = ledakan hati kecil, kecuali di tombol/link biar gak ganggu. */
  const handleClick = useCallback(
    (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, input, textarea, select")) {
        return;
      }
      burst(event.clientX, event.clientY);
    },
    [burst],
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  const celebrate = useCallback(() => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    burst(x, y);
    window.setTimeout(() => burst(x - 120, y + 40), 160);
    window.setTimeout(() => burst(x + 120, y + 40), 300);
  }, [burst]);

  return (
    <div className="app">
      {/* latar belakang bergerak pelan */}
      <div className="bg-layer" aria-hidden="true">
        <span className="bg-orb bg-orb--1" />
        <span className="bg-orb bg-orb--2" />
        <span className="bg-orb bg-orb--3" />
        <PawPrint className="bg-paw bg-paw--1" />
        <PawPrint className="bg-paw bg-paw--2" />
        <PawPrint className="bg-paw bg-paw--3" />
      </div>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Favorites />
        <Friends />
        <Quotes />
        <Surprise onCelebrate={celebrate} />
      </main>

      <Footer />

      {/* lapisan efek interaktif */}
      <FloatingHearts floaters={floaters} onDone={removeFloater} />
      <BurstLayer bursts={bursts} />
      <CursorTrail dots={trail} />

      {/* Snoopy melayang — dipencet keluar bunga 🌸 */}
      <SnoopyPet />
    </div>
  );
}
