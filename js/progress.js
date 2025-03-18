// progress.js

// Function to update dynamic values
function updateProgress() {
    // Example data (you can replace this with actual data from your backend)
    const coursesCompleted = 12; // Dynamic value
    const certifications = 4; // Dynamic value
    const timeSpent = "28h"; // Dynamic value

    // Update the DOM with dynamic values
    document.getElementById('courses-completed').textContent = coursesCompleted;
    document.getElementById('certifications').textContent = certifications;
    document.getElementById('time-spent').textContent = timeSpent;
}

// Call the function to update progress when the page loads
document.addEventListener('DOMContentLoaded', updateProgress);