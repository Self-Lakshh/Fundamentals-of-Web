// reusable function for rendering project cards dynamically
const milestones = [
    { title: "Grid Photo Gallery", desc: "Responsive CSS grid container details.", cat: "css", path: "../Day-10/index.html" },
    { title: "Restaurant Website", desc: "La Bistro menu grid layouts built in Bootstrap 5.", cat: "bootstrap", path: "../Day-17/index.html" },
    { title: "Theme Switcher App", desc: "Switch stylesheets dynamically with custom variables.", cat: "javascript", path: "../Day-21/index.html" }
];

console.log("Creative Portfolio JS Initialized.");

// Simple form submission validation and user feedback
const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.querySelector("#cname").value.trim();
        const email = document.querySelector("#cemail").value.trim();
        const msg = document.querySelector("#cmessage").value.trim();
        
        if (!name || !email || !msg) {
            showFeedback("Please fill out all fields before submitting.", "danger");
            return;
        }
        
        showFeedback("Thank you! Your message has been sent successfully.", "success");
        contactForm.reset();
    });
}

function showFeedback(text, type) {
    if (!formFeedback) return;
    formFeedback.textContent = text;
    formFeedback.className = `mt-3 text-center small alert alert-${type}`;
}