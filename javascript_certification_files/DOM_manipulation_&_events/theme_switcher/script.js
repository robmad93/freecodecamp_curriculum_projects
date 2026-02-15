const themes = [{name: "dark",
message: "Welcome to the nocturnal realm — Dark theme is on!"},
{name: "cyan",
message: "Minty freshness for your eyes — Cyan theme is on!"}, {name: "rose", message: "Smell the roses and feel the love — Rose theme is on!"}, {name: "silver", message: "A classy theme for charismatic individuals — Silver theme is on!"}]

const themeSwitcherBtn = document.getElementById("theme-switcher-button");

const themeDropdown = document.getElementById("theme-dropdown");

const statusMsg = document.getElementById("status");

// Toggle Menu Open/Closed
themeSwitcherBtn.addEventListener("click", () => {
  const isOpened = themeSwitcherBtn.getAttribute("aria-expanded") === "true";

// Toggle hidden attribute and aria-expanded
  themeDropdown.hidden = isOpened;
  themeSwitcherBtn.setAttribute("aria-expanded", !isOpened);
});

// Handle Theme Selection
themeDropdown.addEventListener("click", (e) => {
    // Check if a list item (li) was clicked
  if (e.target.tagName === "LI") {
    const themeName = e.target.textContent.toLowerCase();
    
      // Find the matching theme object in your array
    const selectedTheme = themes.find(t => t.name === themeName);

      if (selectedTheme) {
        // Update the aria-live element
      statusMsg.textContent = selectedTheme.message;
        // Update the body class
      document.body.className = `theme-${themeName}`;
      // Close the menu after selection
      themeDropdown.hidden = true;
      themeSwitcherBtn.setAttribute("aria-expanded", "false");
    }
  }
});