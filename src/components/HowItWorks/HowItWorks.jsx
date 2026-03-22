import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how">

      {/* HEADER */}
      <div className="how-header">
        <h2>How It Works</h2>
        <p>Simple steps to plan your perfect journey</p>
      </div>

      {/* STEPS */}
      <div className="how-grid">

        {/* STEP 1 */}
        <div className="how-card">
          <span className="step">01</span>
          <div className="icon">🔍</div>
          <h3>Choose Destination</h3>
          <p>
            Explore destinations and find your perfect trip.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="how-card">
          <span className="step">02</span>
          <div className="icon">📅</div>
          <h3>Customize Trip</h3>
          <p>
            Tailor your journey based on your needs.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="how-card">
          <span className="step">03</span>
          <div className="icon">💳</div>
          <h3>Book Securely</h3>
          <p>
            Safe payments with flexible options.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="how-card">
          <span className="step">04</span>
          <div className="icon">✈️</div>
          <h3>Travel & Enjoy</h3>
          <p>
            Pack your bags and enjoy your journey.
          </p>
        </div>

      </div>

      {/* FOOTER LINE */}
      <div className="how-footer">
        <p>Ready to start your journey? Let’s make it happen!</p>
      </div>

    </section>
  );
}