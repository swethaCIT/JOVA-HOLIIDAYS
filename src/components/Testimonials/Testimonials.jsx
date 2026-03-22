import { useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Elavarasan",
    text: "I booked a surprise birthday trip and everything was handled perfectly. The experience was smooth, memorable, and beautifully planned from start to finish.",
    rating: 5,
  },
  {
    name: "Becky",
    text: "Excellent planning and communication. Everything from hotel to transport was seamless and stress-free.",
    rating: 5,
  },
  {
    name: "Dharoon",
    text: "Very professional and helpful team. They guided us properly and ensured everything went smoothly.",
    rating: 4.5,
  },
  {
    name: "Balamurugan",
    text: "Our Goa trip was well organized and memorable. Great support throughout the journey.",
    rating: 5,
  },
  {
    name: "Ajisha",
    text: "Fantastic service and very friendly team. Made the whole trip stress-free.",
    rating: 4.5,
  },
  {
    name: "Vignesh",
    text: "Kashmir trip was arranged wonderfully. Great value and excellent service.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [slide, setSlide] = useState(0);

  const visible = reviews.slice(slide * 3, slide * 3 + 3);

  return (
    <section className="testimonials">

      <div className="testimonial-wrapper">

        {/* LEFT */}
        <div className="testimonial-left">
          <h2>What Our Travelers Say</h2>
          <p>
            Hear from our happy customers who experienced seamless travel
            planning with Jova Holidays.
          </p>
        </div>

        {/* RIGHT */}
        <div className="testimonial-right">

          <div className="cards">
            {visible.map((item, i) => (
              <div key={i} className="card">

                <p>{item.text}</p>

                <div className="bottom">
                  <h4>{item.name}</h4>

                  {/* ⭐ STARS */}
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

          {/* DOT CONTROLS */}
          <div className="controls">
            <button onClick={() => setSlide(0)} className={slide === 0 ? "active" : ""}></button>
            <button onClick={() => setSlide(1)} className={slide === 1 ? "active" : ""}></button>
          </div>

        </div>

      </div>

    </section>
  );
}