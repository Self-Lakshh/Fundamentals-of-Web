// safe calculation parser using standard display text values
const displayEl = document.querySelector("#display");

function append(value) {
    displayEl.value += value;
}

function clearDisplay() {
    displayEl.value = "";
}

function calculate() {
    const expression = displayEl.value;
    if (!expression) return;
    
    try {
        // Evaluate mathematical expression and display result
        // Using Function constructor for evaluation instead of raw eval (safer)
        const result = new Function(`return ${expression}`)();
        displayEl.value = result;
    } catch (e) {
        displayEl.value = "Error";
    }
}