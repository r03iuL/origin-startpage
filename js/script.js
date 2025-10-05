console.log("Script loaded!");

// Greeting logic
let username = localStorage.getItem("originUsername");
if (!username) {
  username = prompt("What's your name?") || "Friend";
  localStorage.setItem("originUsername", username);
}
document.getElementById("greeting").textContent = `Hello, ${username}`;

// Search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim();
  if (!q) return;
  window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(q)}`;
});


// === Digital clock with seconds ===

// Select the time element
const timeEl = document.querySelector(".time");

// Function to format time as HH:MM:SS AM/PM
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    // Update the element
    timeEl.textContent = `${h}:${m}:${s} ${ampm}`;
}

// Update immediately
updateClock();

// Then update every second
setInterval(updateClock, 1000);
