import { useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <section className="hero">
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
          <button className="btn primary">Explore Packages</button>
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