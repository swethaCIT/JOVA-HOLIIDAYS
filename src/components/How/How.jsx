import { useEffect, useRef, useState } from "react";
import "./How.css";

export default function How() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(".how-card");

    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("show");
      }, i * 150);
    });
  }, []);

  // 🔥 Track scroll for dots
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.8;

    const index = Math.round(scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <section className="how">
      <div className="how-content">

        <div className="how-header">
          <h2>How It Works</h2>
          <p>Planning your perfect trip is as easy as 1-2-3-4-5! Follow these simple steps</p>
        </div>

        {/* GRID / CAROUSEL */}
        <div
          className="how-grid"
          ref={scrollRef}
          onScroll={handleScroll}
        >

          <div className="how-card">
            <span className="step">01</span>
            <div className="icon">🔍</div>
            <h3>Choose Destination</h3>
            <p>Explore destinations and find your perfect trip.</p>
          </div>

          <div className="how-card">
            <span className="step">02</span>
            <div className="icon">📅</div>
            <h3>Customize Trip</h3>
            <p>Tailor your journey based on your needs.</p>
          </div>

          <div className="how-card">
            <span className="step">03</span>
            <div className="icon">💳</div>
            <h3>Book Securely</h3>
            <p>Safe payments with flexible options.</p>
          </div>

          <div className="how-card">
            <span className="step">04</span>
            <div className="icon">✈️</div>
            <h3>Travel & Enjoy</h3>
            <p>Pack your bags and enjoy your journey.</p>
          </div>

          <div className="how-card">
            <span className="step">05</span>
            <div className="icon">📸</div>
            <h3>Bring Your Memories</h3>
            <p>Return with unforgettable moments.</p>
          </div>

        </div>

        {/* 🔥 DOT INDICATOR */}
        <div className="dots">
          {[0,1,2,3,4].map((i) => (
            <span key={i} className={active === i ? "dot active" : "dot"} />
          ))}
        </div>

        <div className="how-footer">
          <p>Ready to start your journey? Let's make it happen!</p>
        </div>

      </div>
    </section>
  );
}