document.getElementById("darkModeToggle").addEventListener("click", function() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");

    // Add a class to the button to trigger the transition animation
    const toggleButton = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.classList.add("dark-mode");
    } else {
        toggleButton.classList.remove("dark-mode");
    }
});
