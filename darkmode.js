document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode");

        // Save dark mode state in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
