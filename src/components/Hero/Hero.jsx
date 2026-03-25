import { useEffect, useState } from "react";
import "./Hero.css";

// Import images in order
import kolsai from "../../assets/images/Kolsai.png";
import glencoe from "../../assets/images/Glencoe.jpg";
import mountTitlis from "../../assets/images/Mounttitlis.png";
import cherryBlossoms from "../../assets/images/cherry-blossoms-chidorigafuchi-park-tokyo-japan.jpg";
import tharDesert from "../../assets/images/Thardesert.png";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images in your specified order
  const images = [kolsai, glencoe, mountTitlis, cherryBlossoms, tharDesert];

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // Image carousel - change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        {/* Logo */}
        <div className="hero-logo">
          <span className="logo-icon">✈</span>
          <span className="logo-text">Jova Holidays</span>
        </div>

        {/* Heading */}
        <h1>
          Your Journey Begins <br />
          Where Dreams Take Flight
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Discover breathtaking destinations that awaken your wanderlust.
          From hidden gems to iconic landmarks, we craft unique experiences
          and create memories that last a lifetime.
        </p>

        {/* Highlight Line */}
        <p className="hero-tagline">
          Your Trusted Partner in Exceptional Travel Experiences
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn primary">Explore Destinations</button>
          <button className="btn secondary">Plan Your Trip</button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>

      </div>
    </section>
  );
}