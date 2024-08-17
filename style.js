// JavaScript to handle any dynamic features, animations, or interactivity

document.addEventListener("DOMContentLoaded", function() {
    // Example dynamic content loading (if needed)
    console.log("Portfolio website loaded successfully!");
    
    // Smooth scroll to sections
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animation on scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeIn");
            } else {
                entry.target.classList.remove("animate__animated", "animate__fadeIn");
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
