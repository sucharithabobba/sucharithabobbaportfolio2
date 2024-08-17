document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Add zoom-in effect on hover for specified sections
  const zoomElements = document.querySelectorAll(".zoom-in");
  zoomElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.transform = "scale(1.1)";
    });
    element.addEventListener("mouseout", () => {
      element.style.transform = "scale(1)";
    });
  });

  // Reveal animations on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeIn", "animate__animated");
        } else {
          entry.target.classList.remove("animate__fadeIn", "animate__animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Select all sections to animate on scroll
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});
