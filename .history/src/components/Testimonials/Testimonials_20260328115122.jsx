import { useState, useRef, useEffect } from "react";
import "./Testimonials.css";

const reviews = [
  { name: "Elavarasan", text: "I booked a surprise birthday trip and everything was handled perfectly. The experience was smooth, memorable, and beautifully planned from start to finish.", rating: 5 },
  { name: "Becky", text: "Excellent planning and communication. Everything from hotel to transport was seamless and stress-free.", rating: 5 },
  { name: "Dharoon", text: "Very professional and helpful team. They guided us properly and ensured everything went smoothly.", rating: 4.5 },
  { name: "Balamurugan", text: "Our Goa trip was well organized and memorable. Great support throughout the journey.", rating: 5 },
  { name: "Ajisha", text: "Fantastic service and very friendly team. Made the whole trip stress-free.", rating: 4.5 },
  { name: "Vignesh", text: "Kashmir trip was arranged wonderfully. Great value and excellent service.", rating: 5 },
];

export default function Testimonials() {
  const [slide, setSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const containerRef = useRef(null);

  // ✅ RESPONSIVE FIX (VERY IMPORTANT)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ DATA SPLIT
  const visible = isMobile
    ? reviews
    : reviews.slice(slide * 3, slide * 3 + 3);

  // ✅ BUTTON FIX (WORKS BOTH)
  const next = () => {
    if (isMobile) {
      const container = containerRef.current;
      const card = container?.querySelector(".card");

      if (!container || !card) return;

      const gap = 16;
      const cardWidth = card.offsetWidth + gap;

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    } else {
      setSlide((prev) => (prev + 1) % 2);
    }
  };

  const prev = () => {
    if (isMobile) {
      const container = containerRef.current;
      const card = container?.querySelector(".card");

      if (!container || !card) return;

      const gap = 16;
      const cardWidth = card.offsetWidth + gap;

      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    } else {
      setSlide((prev) => (prev - 1 + 2) % 2);
    }
  };

  // ✅ AUTO SCROLL + DOT TRACK
  useEffect(() => {
    if (!isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        const card = container.querySelector(".card");
        if (!card) return;

        const cardWidth = card.offsetWidth + 16;

        let nextScroll = container.scrollLeft + cardWidth;

        if (nextScroll >= container.scrollWidth - container.clientWidth) {
          nextScroll = 0;
        }

        container.scrollTo({
          left: nextScroll,
          behavior: "smooth",
        });
      }, 2500);
    };

    const handleScroll = () => {
      const cards = container.querySelectorAll(".card");
      let closestIndex = 0;
      let closestOffset = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const offset = Math.abs(rect.left - 20);

        if (offset < closestOffset) {
          closestOffset = offset;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    startAutoScroll();

    return () => {
      clearInterval(interval);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="testimonials">
      <div className="testimonial-wrapper">

        <div className="testimonial-left">
          <h2>What Our Travelers Say</h2>
          <p>
            Hear from our happy customers who experienced seamless travel
            planning with Jova Holidays.
          </p>
        </div>

        <div className="testimonial-right">

          {/* ✅ DESKTOP ONLY BUTTONS */}
          {!isMobile && (
            <div className="nav-buttons">
              <button onClick={prev}>‹</button>
              <button onClick={next}>›</button>
            </div>
          )}

          <div className="cards" ref={containerRef}>
            {visible.map((item, i) => (
              <div
                key={i}
                className={`card ${activeIndex === i ? "active-card" : ""}`}
              >
                <p>{item.text}</p>

                <div className="bottom">
                  <h4>{item.name}</h4>

                  <div className="stars">
                    {[1,2,3,4,5].map((star, index) => (
                      <span
                        key={index}
                        className={
                          star <= item.rating
                            ? "star filled"
                            : star - 0.5 === item.rating
                            ? "star half"
                            : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ DOTS EVERYWHERE */}
          <div className="dots">
            {isMobile
              ? reviews.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === activeIndex ? "active" : ""}`}
                  />
                ))
              : [0, 1].map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === slide ? "active" : ""}`}
                    onClick={() => setSlide(i)}
                  />
                ))}
          </div>

        </div>
      </div>
    </section>
  );
}