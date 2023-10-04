// learning DOM manipulation today
// function to increase/decrease counter value
let count = 0;
const counterText = document.querySelector("#counter");
const incrBtn = document.querySelector("#incr-btn");
const decrBtn = document.querySelector("#decr-btn");
const resetBtn = document.querySelector("#reset-btn");

// increment handler
incrBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

// decrement handler
decrBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

// reset handler
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// helper function to update value on UI
function updateDisplay() {
    counterText.textContent = count;
    
    // add minor color states based on count value
    if (count > 0) {
        counterText.style.color = "#10b981"; // green for positive numbers
    } else if (count < 0) {
        counterText.style.color = "#ef4444"; // red for negative numbers
    } else {
        counterText.style.color = "#1e293b"; // standard slate color
    }
}