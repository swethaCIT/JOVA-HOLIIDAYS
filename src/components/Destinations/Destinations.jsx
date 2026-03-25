import { useState } from "react";
import "./Destinations.css";

const domesticData = [
  {
    name: "Goa",
    duration: "2N/3D",
    tagline: "Sun, Sand & Party",
    ideal: "Friends, Couples",
  },
  {
    name: "Kerala",
    duration: "4N/5D",
    tagline: "God’s Own Country",
    ideal: "Honeymoon, Family",
  },
  {
    name: "Coorg & Mysore",
    duration: "3N/4D",
    tagline: "Coffee Hills & Heritage",
    ideal: "Couples, Family",
  },
  {
    name: "Kullu & Manali",
    duration: "4N/5D",
    tagline: "Snow & Adventure",
    ideal: "Honeymoon, Friends",
  },
  {
    name: "Kashmir",
    duration: "4N/5D",
    tagline: "Paradise on Earth",
    ideal: "Family, Couples",
  },
  {
    name: "Sikkim & Darjeeling",
    duration: "4N/5D",
    tagline: "Hills & Tea Gardens",
    ideal: "Nature Lovers",
  },
  {
    name: "Meghalaya",
    duration: "4N/5D",
    tagline: "Clouds & Waterfalls",
    ideal: "Explorers",
  },
  {
    name: "Andaman & Nicobar",
    duration: "4N/5D",
    tagline: "Island Escape",
    ideal: "Couples",
  },
  {
    name: "Lakshadweep",
    duration: "3N/4D",
    tagline: "Exotic Beaches",
    ideal: "Luxury, Honeymoon",
  },
  {
    name: "Delhi – Agra – Jaipur",
    duration: "4N/5D",
    tagline: "Royal Heritage",
    ideal: "History Lovers",
  },
];

const internationalData = [
  {
    name: "Singapore",
    duration: "4N/5D",
    tagline: "City & Family Fun",
    ideal: "Family",
  },
  {
    name: "Malaysia",
    duration: "3N/4D",
    tagline: "Truly Asia",
    ideal: "Friends",
  },
  {
    name: "Thailand",
    duration: "4N/5D",
    tagline: "Beaches & Nightlife",
    ideal: "Couples",
  },
  {
    name: "Vietnam",
    duration: "4N/5D",
    tagline: "Culture & Nature",
    ideal: "Explorers",
  },
  {
    name: "Bali",
    duration: "4N/5D",
    tagline: "Romantic Escape",
    ideal: "Honeymoon",
  },
  {
    name: "Dubai",
    duration: "4N/5D",
    tagline: "Luxury & Desert",
    ideal: "Shopping",
  },
  {
    name: "Maldives",
    duration: "3N/4D",
    tagline: "Island Romance",
    ideal: "Couples",
  },
  {
    name: "Europe",
    duration: "10N/11D",
    tagline: "Timeless Beauty",
    ideal: "Family",
  },
  {
    name: "Japan",
    duration: "6N/7D",
    tagline: "Modern & Tradition",
    ideal: "Culture Lovers",
  },
  {
    name: "Kenya",
    duration: "6N/7D",
    tagline: "Wildlife Safari",
    ideal: "Adventure",
  },
  {
    name: "Georgia",
    duration: "5N/6D",
    tagline: "Hidden Europe",
    ideal: "Nature Lovers",
  },
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

        <div className="banner-glass">
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
            <div className="dest-img"></div>

            <div className="dest-content">
              <h3>{item.name}</h3>
              <span className="duration">{item.duration}</span>
              <p className="tagline">{item.tagline}</p>

              <p className="ideal">
                Ideal: <strong>{item.ideal}</strong>
              </p>

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