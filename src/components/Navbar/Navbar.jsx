import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Packages", "About", "Contact"];

  // ✅ CORRECT FUNCTION
  const handleNavClick = (item) => {
    setActive(item);
  };

  // ✅ SCROLL FUNCTION
  const scrollToForm = () => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">WanderIndia</div>

        {/* Desktop Nav */}
        <div className="nav-center">
          {navItems.map((item) => (
            <div
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="cta-btn" onClick={scrollToForm}>
          Book Now
        </button>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-card">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </div>

          {navItems.map((item) => (
            <div
              key={item}
              className={`mobile-item ${
                active === item ? "active" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </div>
          ))}

          <button className="mobile-cta" onClick={scrollToForm}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}