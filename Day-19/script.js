// Learning DOM manipulation today
// Select HTML nodes using querySelector
const textBtn = document.querySelector("#text-btn");
const colorBtn = document.querySelector("#color-btn");
const targetHeading = document.querySelector("#target-heading");
const block = document.querySelector("#block");

// Trigger heading text updates
textBtn.addEventListener("click", () => {
    targetHeading.textContent = "Text Updated via JavaScript!";
});

// Toggle style class on the block element
colorBtn.addEventListener("click", () => {
    block.classList.toggle("active");
});