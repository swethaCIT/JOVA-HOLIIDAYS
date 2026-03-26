import { useEffect, useState } from "react";
import "./Hero.css";
import { scrollToSection } from "../../utils/scroll";

import kolsai from "../../assets/images/Kolsai.png";
import glencoe from "../../assets/images/Glencoe.jpg";
import mountTitlis from "../../assets/images/Mounttitlis.png";
import cherryBlossoms from "../../assets/images/cherry-blossoms-chidorigafuchi-park-tokyo-japan.jpg";
import tharDesert from "../../assets/images/Thardesert.png";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [kolsai, glencoe, mountTitlis, cherryBlossoms, tharDesert];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay"></div>

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

        {/* ✅ FIXED BUTTONS */}
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

        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  );
}