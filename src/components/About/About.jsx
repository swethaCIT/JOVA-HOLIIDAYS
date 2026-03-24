import { useState } from "react";
import "./About.css";
import About2 from "../../assets/images/About2.png";

export default function About() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      introTitle: "Where Comforts Meets Stress-Free Travel",
      introText: `At Jova Holidays, we don’t just plan trips — we take complete responsibility for your journey. 
      From the moment you start exploring your options to the time you return home, everything is handled 
      with care, clarity, and attention to detail. Our focus is simple: make travel easy, budget-friendly, 
      and completely stress-free.`,

      cardTitle: "Travel Without Hassle",
      cardText: "At Jova Holidays, we believe travel should feel simple and enjoyable — not confusing or overwhelming. From planning to return, every detail is handled with care.",
      features: ["Comfort", "Safety"],
    },
    {
      introTitle: "Designed Around Your Budget",
      introText: `Every journey we create is designed around your needs and your budget. From complete tour 
      planning and ticket bookings to stays, pickup, and real-time on tour support, we handle everything end-to-end. 
      Whether it’s an affordable trip or a premium experience, we ensure you get the best value without 
      compromising on comfort.`,

      cardTitle: "Plan Around Your Budget",
      cardText: "Your budget is our starting point. We design trips that give you the best value without compromising on comfort or experience.",
      features: ["Savings", "Best Value"],
    },
    {
      introTitle: "Reliable Support In Every Step",
      introText: `What truly sets us apart is the way we stay connected throughout your journey. With instant 
      support, Tamil-speaking assistance even on international trips, and special care for families, elderly 
      travelers, and those with specific needs, we make every trip smooth and worry-free.`,

      cardTitle: "Connected With Care Always",
      cardText: "From end-to-end planning to real-time support, we stay connected throughout your journey. Trusted by thousands of happy travelers.",
      features: ["24/7 Support", "Tamil Help"],
    },
  ];

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="about">
      <div className="about-outer glass-card">

        {/* 🔥 OUTER BUTTONS */}
        <div className="outer-btn left" onClick={prev}>‹</div>
        <div className="outer-btn right" onClick={next}>›</div>

        {/* LEFT */}
        <div className="about-left">
          <img src={About2} alt="travel" />

          <div className="stats-card glass-card">
            <div>
              <h3>2000+</h3>
              <p>Customers</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Destinations</p>
            </div>
            <div>
              <h3>5.0</h3>
              <p>Rating</p>
            </div>
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

                  {/* 🔥 INTRO */}
                  <h2>{slide.introTitle}</h2>
                  <p className="about-intro">{slide.introText}</p>

                  {/* 🔥 CARD */}
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
      </div>
    </section>
  );
}