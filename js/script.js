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

// Icon grid data
const links = [
  { label: "Gmail", url: "https://mail.google.com", icon: "icons/gmail.svg" },
  { label: "GitHub", url: "https://github.com", icon: "icons/github.svg" },
  { label: "YouTube", url: "https://youtube.com", icon: "icons/youtube.svg" },
  { label: "Docs", url: "https://docs.google.com", icon: "icons/docs.svg" },
  { label: "Reddit", url: "https://reddit.com", icon: "icons/reddit.svg" },
  { label: "Figma", url: "https://figma.com", icon: "icons/figma.svg" },
];

const grid = document.getElementById("iconGrid");
links.forEach((l) => {
  const a = document.createElement("a");
  a.className = "icon-tile";
  a.href = l.url;
  a.innerHTML = `
    <img src="${l.icon}" alt="${l.label} icon">
    <span>${l.label}</span>
  `;
  grid.appendChild(a);
});
