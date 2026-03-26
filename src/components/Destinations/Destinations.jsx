import { useState } from "react";
import "./Destinations.css";

const domesticData = [
  { name: "Goa", duration: "2N/3D", tagline: "Sun, Sand & Party", ideal: "Friends, Couples", image: "Goa.jpg" },
  { name: "Kerala", duration: "4N/5D", tagline: "God's Own Country", ideal: "Honeymoon, Family", image: "Kerala.png" },
  { name: "Coorg & Mysore", duration: "3N/4D", tagline: "Coffee Hills & Heritage", ideal: "Couples, Family", image: "Mysore.png" },
  { name: "Kullu & Manali", duration: "4N/5D", tagline: "Snow & Adventure", ideal: "Honeymoon, Friends", image: "Manali.png" },
  { name: "Kashmir", duration: "4N/5D", tagline: "Paradise on Earth", ideal: "Family, Couples", image: "Kashmir.png" },
  { name: "Sikkim & Darjeeling", duration: "4N/5D", tagline: "Hills & Tea Gardens", ideal: "Nature Lovers", image: "Sikkim.png" },
  { name: "Meghalaya", duration: "4N/5D", tagline: "Clouds & Waterfalls", ideal: "Explorers", image: "Meghalaya.png" },
  { name: "Andaman & Nicobar", duration: "4N/5D", tagline: "Island Escape", ideal: "Couples", image: "Andaman.png" },
  { name: "Lakshadweep", duration: "3N/4D", tagline: "Exotic Beaches", ideal: "Luxury, Honeymoon", image: "Lakshadweep.jpg" },
  { name: "Delhi – Agra – Jaipur", duration: "4N/5D", tagline: "Royal Heritage", ideal: "History Lovers", image: "Agra.png" },
];

const internationalData = [
  { name: "Singapore", duration: "4N/5D", tagline: "City & Family Fun", ideal: "Family", image: "Singapore.png" },
  { name: "Malaysia", duration: "3N/4D", tagline: "Truly Asia", ideal: "Friends", image: "Malaysia.png" },
  { name: "Thailand", duration: "4N/5D", tagline: "Beaches & Nightlife", ideal: "Couples", image: "Thailand.jpg" },
  { name: "Vietnam", duration: "4N/5D", tagline: "Culture & Nature", ideal: "Explorers", image: "Vietnam.png" },
  { name: "Bali", duration: "4N/5D", tagline: "Romantic Escape", ideal: "Honeymoon", image: "Bali.png" },
  { name: "Dubai", duration: "4N/5D", tagline: "Luxury & Desert", ideal: "Shopping", image: "Dubai.png" },
  { name: "Maldives", duration: "3N/4D", tagline: "Island Romance", ideal: "Couples", image: "Maldives.png" },
  { name: "Europe", duration: "10N/11D", tagline: "Timeless Beauty", ideal: "Family", image: "Europe.png" },
  { name: "Japan", duration: "6N/7D", tagline: "Modern & Tradition", ideal: "Culture Lovers", image: "Japan.png" },
  { name: "Kenya", duration: "6N/7D", tagline: "Wildlife Safari", ideal: "Adventure", image: "Kenya.png" },
  { name: "Georgia", duration: "5N/6D", tagline: "Hidden Europe", ideal: "Nature Lovers", image: "Georgia.jpg" },
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState("domestic");
  const [showAll, setShowAll] = useState(false);

  const data = activeTab === "domestic" ? domesticData : internationalData;
  const visibleCards = showAll ? data : data.slice(0, 4);

  return (
    <section className="destinations">

      {/* ===== BANNER ===== */}
      <div className="dest-banner">
        <div className="banner-overlay"></div>

        <div className="banner-center">
          <h2>Explore Destinations</h2>
          <p>Discover destinations made for you</p>
        </div>
      </div>

      {/* TOGGLE */}
      <div className="dest-toggle">
        <button
          className={activeTab === "domestic" ? "active" : ""}
          onClick={() => {
            setActiveTab("domestic");
            setShowAll(false);
          }}
        >
          Domestic 🇮🇳
        </button>

        <button
          className={activeTab === "international" ? "active" : ""}
          onClick={() => {
            setActiveTab("international");
            setShowAll(false);
          }}
        >
          International 🌍
        </button>
      </div>

      {/* GRID */}
      <div className="dest-grid">
        {visibleCards.map((item, index) => (
          <div className="dest-card" key={index}>

            {/* IMAGE */}
            <div
              className="dest-img"
              style={{ backgroundImage: item.image ? `url(/images/${item.image})` : "none" }}
            >
              {/* ✅ DURATION GLASS BADGE */}
              <span className="duration-badge">{item.duration}</span>
            </div>

            {/* CONTENT */}
            <div className="dest-content">
              <h3>{item.name}</h3>
              <p className="tagline">{item.tagline}</p>

              {/* ✅ IDEAL GLASS PILLS */}
              <div className="ideal">
                {item.ideal.split(",").map((tag, i) => (
                  <span key={i} className="ideal-pill">{tag.trim()}</span>
                ))}
              </div>

              {/* BUTTON (UNCHANGED COLOR) */}
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      {!showAll && data.length > 4 && (
        <div className="view-all-wrapper">
          <button className="view-all" onClick={() => setShowAll(true)}>
            View All
          </button>
        </div>
      )}
    </section>
  );
}