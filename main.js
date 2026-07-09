// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Category filter (index page)
  const chips = document.querySelectorAll(".chip[data-cat]");
  const cards = document.querySelectorAll(".post-card[data-cat]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.cat;
      cards.forEach((card) => {
        card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });

  // TOC scrollspy (post page)
  const tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length) {
    const targets = Array.from(tocLinks).map((a) =>
      document.querySelector(a.getAttribute("href"))
    );
    const setActive = () => {
      let current = null;
      const scrollPos = window.scrollY + 110;
      targets.forEach((t, i) => {
        if (t && t.offsetTop <= scrollPos) current = i;
      });
      tocLinks.forEach((a, i) => a.classList.toggle("active", i === current));
    };
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }
});
