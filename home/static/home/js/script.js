document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});
