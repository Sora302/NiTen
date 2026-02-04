document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".js-split");

  if (!target) return;

  const text = target.textContent;
  target.textContent = "";

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;

    span.style.transitionDelay = `${index * 0.07}s`;
    span.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";


    target.appendChild(span);
  });

  setTimeout(() => {
    target.classList.add("is-animated");
  }, 300);
});

