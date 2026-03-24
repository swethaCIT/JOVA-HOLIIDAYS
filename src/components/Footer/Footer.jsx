import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="logo">✈ Jova Holidays</h2>

          <p>
            Discover the world like never before. From serene beaches to majestic
            mountains, we craft unforgettable journeys tailored just for you.
          </p>

          <div className="socials">
            <a href="https://www.instagram.com/jova_holidays/" target="_blank">📷</a>
            <a href="#">👍</a>
            <a href="#">🐦</a>
            <a href="#">▶</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* DESTINATIONS */}
        <div className="footer-col">
          <h3>Popular Destinations</h3>
          <ul>
            <li>Goa Getaways</li>
            <li>Kerala Backwaters</li>
            <li>Manali Adventures</li>
            <li>Kashmir Paradise</li>
            <li>Rajasthan Heritage</li>
            <li>Andaman Escape</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Info</h3>

          <p>
            📍 95, Velayudham Street, Ramapuram, Alandur,<br/>
             Chennai - 600016
          </p>

          <p>📞 +91 93633 11085</p>
          <p>📧 travel@jovaholidays.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Jova Holidays. <br /> Crafted with ❤️ for unforgettable journeys.
        </p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cancellation Policy</span>
        </div>
      </div>

    </footer>
  );
}