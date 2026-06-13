// Select the element where the message will be displayed
const visitMessage = document.querySelector("#visit-message");

// Get the last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {
    // First visit
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    // Calculate difference in days
    const timeDifference = now - Number(lastVisit);
    const daysDifference = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24)
    );

    if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysDifference
            } ${daysDifference === 1 ? "day" : "days"} ago.`;
    }
}

// Store the current visit time for the next visit
localStorage.setItem("lastVisit", now);