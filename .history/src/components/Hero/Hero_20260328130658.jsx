import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import { scrollToSection } from "../../utils/scroll";

import kolsai from "../../assets/images/Kolsai.png";
import glencoe from "../../assets/images/Glencoe.jpg";
import mountTitlis from "../../assets/images/Mounttitlis.png";
import cherryBlossoms from "../../assets/images/cherry-blossoms-chidorigafuchi-park-tokyo-japan.jpg";
import tharDesert from "../../assets/images/Thardesert.png";

const DISPLAY_DURATION = 5000;
const FADE_DURATION    = 1000;

export default function Hero() {
  const images = [kolsai, glencoe, mountTitlis, cherryBlossoms, tharDesert];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx,    setNextIdx]    = useState(1);
  const [isFading,   setIsFading]   = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isFading) return;

    const timeout = setTimeout(() => {
      setCurrentIdx(nextIdx);
      setNextIdx((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, FADE_DURATION);

    return () => clearTimeout(timeout);
  }, [isFading, nextIdx, images.length]);

  return (
    <section className="hero">
      <div
        className="hero__bg hero__bg--current"
        style={{ backgroundImage: `url(${images[currentIdx]})` }}
        aria-hidden="true"
      />

      <div
        className={`hero__bg hero__bg--next${isFading ? " hero__bg--visible" : ""}`}
        style={{ backgroundImage: `url(${images[nextIdx]})` }}
        aria-hidden="true"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-logo">
          <span className="logo-icon">✈</span>
          <span className="logo-text">Jova Holidays</span>
        </div>

        <h1>
          Your Journey Begins <br />
          Where Dreams Take Flight
        </h1>

        <p className="hero-desc">
          Discover breathtaking destinations that awaken your wanderlust.
          From hidden gems to iconic landmarks, we craft unique experiences
          and create memories that last a lifetime.
        </p>

        <p className="hero-tagline">
          Your Trusted Partner in Exceptional Travel Experiences
        </p>

        <div className="hero-buttons">
          <button
            className="btn primary"
            onClick={() => scrollToSection("destinations", 90)}
          >
            Explore Destinations
          </button>

          <button
            className="btn secondary"
            onClick={() => scrollToSection("cta", 90)}
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}