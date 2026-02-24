document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
        "Thank you! We will contact you soon.";
    this.reset();
});
