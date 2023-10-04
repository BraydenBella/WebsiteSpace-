// Get a reference to the navigation bar
const navbar = document.getElementById("navbar");

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener("scroll", handleScroll);
