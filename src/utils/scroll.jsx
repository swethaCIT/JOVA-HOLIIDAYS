// src/utils/scroll.js

export function scrollToSection(id, offset = 80) {
  const section = document.getElementById(id);

  if (!section) {
    console.warn("❌ Section not found:", id);
    return;
  }

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}