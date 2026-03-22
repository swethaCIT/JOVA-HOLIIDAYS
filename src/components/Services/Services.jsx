import "./Services.css";
import aboutImage from "../../assets/images/Ourservices.png";

export default function Services() {
  return (
    <section className="services">

      {/* 🔥 IMAGE HEADER WITH OVERLAY + GLASS BANNER */}
      <div
        className="services-header"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="services-overlay">
          <div className="services-banner">
            <h2 className="services-title">
              All Travel. One Place.
            </h2>

            <p className="services-subtitle">
              Escape Ordinary. Travel Jova
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="services-container">

        <div className="services-grid">

          <div className="service-card highlight">
            <span className="badge">Most Popular</span>
            <div className="icon">🌍</div>
            <h3>Tour Packages</h3>
            <p>
              Complete domestic & international tour packages for every traveler.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">✈️</div>
            <h3>Flight Tickets</h3>
            <p>
              Book affordable flight tickets with smooth and easy options.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🏨</div>
            <h3>Hotel Booking</h3>
            <p>
              Comfortable stays at the best prices across top destinations.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🚗</div>
            <h3>Cab / Vehicle Booking</h3>
            <p>
              Reliable transport services for local and outstation travel.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🛂</div>
            <h3>Tourist Visa</h3>
            <p>
              Hassle-free visa assistance for your international trips.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🚆</div>
            <h3>Train / Bus Tickets</h3>
            <p>
              Easy booking for train and bus tickets at affordable rates.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🧭</div>
            <h3>Guided Tours</h3>
            <p>
              Explore destinations with expert guides and curated experiences.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">👥</div>
            <h3>Group Tours</h3>
            <p>
              Fun and affordable group travel packages for shared experiences.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">💱</div>
            <h3>Money Exchange</h3>
            <p>
              Secure and competitive foreign exchange services for travelers.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}