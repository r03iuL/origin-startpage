//console.log("Script loaded!");

// ---------------------Greeting logic------------------------------------//
let username = localStorage.getItem("originUsername");
if (!username) {
    username = prompt("What's your name?") || "Friend";
    localStorage.setItem("originUsername", username);
}
document.getElementById("greeting").textContent = `Hello, ${username}`;

// ---------------------------Search form logics---------------------------//

let selectedEngine = "google";

const selectBox = document.querySelector(".custom-select");
const selected = selectBox.querySelector(".selected-option");
const optionsList = selectBox.querySelector(".options-list");
const options = optionsList.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsList.classList.toggle("show");
});

// Set new selected engine on option click
options.forEach((option) => {
    option.addEventListener("click", () => {
        const newValue = option.dataset.value;
        selectedEngine = newValue;

        const img = option.querySelector("img").src;
        const alt = option.querySelector("img").alt;

        // Replace selected option content with just the icon
        selected.innerHTML = `<img src="${img}" alt="${alt}" />`;

        optionsList.classList.remove("show");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const isClickInside = selectBox.contains(event.target);
  
  if (!isClickInside) {
    optionsList.classList.remove("show");
  }
});

// Close dropdown when clicking esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    optionsList.classList.remove("show");
  }
});

// Get selectedEngine when submitting the search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if (!q) return;

    const searchURLs = {
        google: "https://www.google.com/search?q=",
        duckduckgo: "https://duckduckgo.com/?q=",
        bing: "https://www.bing.com/search?q=",
    };

    const url = searchURLs[selectedEngine] + encodeURIComponent(q);
    window.open(url, "_blank");
});


//----------------Digital clock with seconds----------------------//

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
