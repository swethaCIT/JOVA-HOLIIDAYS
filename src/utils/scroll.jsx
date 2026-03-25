// src/utils/scroll.js

export function scrollToSection(id, offset = 80) {
  requestAnimationFrame(() => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn("❌ Section not found:", id);
      return;
    }

    // Use offsetTop instead of getBoundingClientRect()
    // offsetTop is static — not affected by ongoing scroll animations
    let top = 0;
    let el = section;

    while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }

    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  });
}