import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Packages", "About", "Services", "Contact"];

  // ✅ SINGLE SOURCE OF TRUTH
  const sectionMap = {
    Home: "home",
    Packages: "packages",
    About: "about",
    Services: "services",
    Contact: "cta",
  };

  // ✅ UNIVERSAL SCROLL FUNCTION (BEST PRACTICE)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn("❌ Section not found:", id);
      return;
    }

    const navbarHeight = 80;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // ✅ NAV CLICK (FIXED)
  const handleNavClick = (item) => {
    setActive(item);

    const sectionId = sectionMap[item];

    // ✅ ensure DOM ready (safe in production)
    requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });

    setMenuOpen(false);
  };

  // ✅ BOOK NOW
  const scrollToForm = () => {
    requestAnimationFrame(() => {
      scrollToSection("cta-form");
    });

    setMenuOpen(false);
  };

  // ✅ ACTIVE ON SCROLL (IMPROVED + STABLE)
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

      {/* ✅ MOBILE MENU */}
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