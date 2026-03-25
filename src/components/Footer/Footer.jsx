import "./Footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { scrollToSection } from "../../utils/scroll";

export default function Footer() {
  const sectionMap = {
    Home: "home",
    Destinations: "destinations",
    About: "about",
    Services: "services",
    Contact: "cta",
  };

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
            <a href="https://www.instagram.com/jova_holidays?igsh=MXdyYWE2b2hhMnduNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1BdavCKZoT/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@jovaholidays?si=-sfUu6s2Nd5w63wP" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {["Home", "Destinations", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(sectionMap[item], 80)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* DESTINATIONS */}
        <div className="footer-col">
          <h3>Popular Destinations</h3>
          <ul className="destination-grid">
            {["Goa","Kerala","Manali","Kashmir","Andaman","Lakshadweep",
              "Agra","Singapore","Thailand","Vietnam","Bali","Maldives","Dubai","Europe"
            ].map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>📍 95, Velayudham Street, Ramapuram, Alandur,<br />Chennai - 600016</p>
          <p>📞 +91 93633 11085</p>
          <p>📧 travel@jovaholidays.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Crafted with ❤️ for unforgettable journeys. <br />
          © 2026 Jova Holidays.
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