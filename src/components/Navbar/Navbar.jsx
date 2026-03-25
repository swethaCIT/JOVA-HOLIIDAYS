import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Packages", "About", "Services", "Contact"];

  // ✅ SECTION MAPPING (PRO WAY)
  const sectionMap = {
    Home: "home",
    Packages: "packages",   // 🔥 will NOT go to how anymore
    About: "about",
    Services: "services",
    Contact: "cta",         // 🔥 contact → CTA section
  };

  // ✅ SCROLL FUNCTION (PERFECT OFFSET)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // adjust based on navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ NAV CLICK
  const handleNavClick = (item) => {
    setActive(item);

    let sectionId;

    if (item === "Contact") {
      sectionId = "cta"; // ✅ Contact → CTA
    } else {
      sectionId = item.toLowerCase();
    }

    const section = document.getElementById(sectionId);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  // ✅ BOOK NOW → FORM
  const scrollToForm = () => {
    const form = document.getElementById("cta-form");

    if (form) {
      const yOffset = -80;
      const y =
        form.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  // ✅ ACTIVE ON SCROLL (FIXED)
  useEffect(() => {
    const handleScroll = () => {
      const entries = Object.entries(sectionMap);

      entries.forEach(([name, id]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">WanderIndia</div>

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

        <button className="cta-btn" onClick={scrollToForm}>
          Book Now
        </button>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* MOBILE MENU */}
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