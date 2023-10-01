document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const workoutSections = document.querySelectorAll(".workout-section");

    // Function to show the selected workout section
    function showWorkoutSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Remove '#' from href
        workoutSections.forEach((section) => {
            section.classList.remove("active");
        });
        document.getElementById(targetId).classList.add("active");
    }

    // Add event listeners to the navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", showWorkoutSection);
    });

    // Show the default workout section (e.g., Chest Workouts)
    document.getElementById("chest").classList.add("active");
});
