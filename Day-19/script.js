// Get references to elements
const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

// Add click listener
btn.addEventListener("click", () => {
    heading.textContent = "You clicked the button!";
});