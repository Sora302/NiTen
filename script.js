// ================================
// 日本天満党 / Scroll Fade In
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});
