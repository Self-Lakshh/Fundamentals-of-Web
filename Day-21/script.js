// storing theme selection in localStorage so it stays active after page refresh
const themeBtn = document.querySelector("#theme-toggle");

// Check if dark theme was previously activated
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    // Toggle class on body element
    document.body.classList.toggle("dark-mode");
    
    // Update local storage preference
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});