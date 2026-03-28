import { useState } from "react";
import "./About.css";
import About2 from "../../assets/images/About2.png";

export default function About() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      introTitle: "Where Comfort Meets Stress-Free Travel",
      introText: "We handle everything for your journey.",
      cardTitle: "Travel Without Hassle",
      cardText: "Simple and smooth travel experience.",
      features: ["Comfort", "Safety"],
    },
    {
      introTitle: "Designed Around Your Budget",
      introText: "Trips tailored to your budget.",
      cardTitle: "Plan Around Your Budget",
      cardText: "Best value guaranteed.",
      features: ["Savings", "Best Value"],
    },
    {
      introTitle: "Reliable Support In Every Step",
      introText: "We stay connected always.",
      cardTitle: "Connected With Care",
      cardText: "Trusted by travelers.",
      features: ["24/7 Support", "Tamil Help"],
    },
  ];

  const next = () => setActive((prev) => (prev + 1) % slides.length);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="about">
      <div className="about-outer">

        {/* BUTTONS */}
        <div className="outer-btn left" onClick={prev}>‹</div>
        <div className="outer-btn right" onClick={next}>›</div>

        {/* LEFT */}
        <div className="about-left">
          <img src={About2} alt="travel" />

          <div className="stats-card">
            <div><h3>2000+</h3><p>Customers</p></div>
            <div><h3>300+</h3><p>Destinations</p></div>
            <div><h3>5.0</h3><p>Rating</p></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <div className="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div className="carousel-slide" key={i}>
                  <h2>{slide.introTitle}</h2>
                  <p className="about-intro">{slide.introText}</p>

                  <div className="carousel-card">
                    <h3>{slide.cardTitle}</h3>
                    <p>{slide.cardText}</p>

                    <div className="feature-circles">
                      {slide.features.map((f, idx) => (
                        <span key={idx} className="circle">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={active === i ? "dot active" : "dot"}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}