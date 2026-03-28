import { useState, useEffect } from "react";
import "./Navbar.css";
import { scrollToSection } from "../../utils/scroll";
import logo from "../../assets/logo/Jova-Logo.png";// ✅ FIXED PATH

const sectionMap = {
  Home: "home",
  Destinations: "destinations",
  About: "about",
  Services: "services",
  Contact: "cta",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Destinations", "About", "Services", "Contact"];

  const handleNavClick = (item) => {
    setActive(item);
    setMenuOpen(false);
    scrollToSection(sectionMap[item], 80);
  };

  const scrollToForm = () => {
    setMenuOpen(false);
    scrollToSection("cta-form", 80);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      Object.entries(sectionMap).forEach(([name, id]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* ✅ LOGO */}
        <div className="logo">
          <img src={logo} alt="Jova-Holidays Logo" />
        </div>

        {/* ✅ NAV ITEMS */}
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

        {/* ✅ BOOK NOW BUTTON */}
        <button className="cta-btn" onClick={scrollToForm}>
          Book Now
        </button>

        {/* ✅ HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* ✅ MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-card">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </div>

          {navItems.map((item) => (
            <div
              key={item}
              className={`mobile-item ${active === item ? "active" : ""}`}
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