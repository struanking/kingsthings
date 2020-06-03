document.addEventListener("DOMContentLoaded", themeToggler);

function themeToggler() {
  const TOGGLE_STATES = Object.freeze({
    dark: "light",
    light: "dark",
  });
  let currentTheme = getPreferredTheme();
  const theme = TOGGLE_STATES[currentTheme] || "dark";
  const html = document.querySelector("html");
  const toggleButton = document.querySelector("[data-toggle-theme]");
  const toggleStatus = document.querySelector("[data-toggle-status]");

  function toggleTheme() {
    return TOGGLE_STATES[currentTheme];
  }

  function setCurrentTheme(theme) {
    currentTheme = theme;
  }

  function handleThemeToggle() {
    const oldTheme = currentTheme;
    const newTheme = toggleTheme();
    setCurrentTheme(newTheme);
    setTheme(newTheme);
    updateToggleText(oldTheme);
  }

  function updateToggleText(theme) {
    toggleButton.innerHTML = `Enable ${theme} theme`;
    toggleStatus.innerHTML = `Color mode is "${currentTheme}"`;
  }

  function getPreferredTheme() {
    return window
      .getComputedStyle(document.documentElement, null)
      .getPropertyValue("--site-theme");
  }

  function setTheme(theme) {
    html.setAttribute("data-site-theme", theme);
  }

  setTheme(currentTheme);
  updateToggleText(theme);
  toggleButton.addEventListener("click", handleThemeToggle);
}
