document.addEventListener("DOMContentLoaded", themeToggler);

function themeToggler() {
  const STORAGE_KEY = "user-color-scheme";
  const TOGGLE_STATES = Object.freeze({
    dark: "light",
    light: "dark",
  });
  let currentTheme = localStorage.getItem(STORAGE_KEY) || getPreferredTheme();
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

  function setTheme(theme) {
    html.setAttribute("data-site-theme", theme);
    console.log("set localstorage");
    localStorage.setItem(STORAGE_KEY, theme);
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

  function handleThemeToggle() {
    const oldTheme = currentTheme;
    const newTheme = toggleTheme();
    setCurrentTheme(newTheme);
    setTheme(newTheme);
    updateToggleText(oldTheme);
  }

  setTheme(currentTheme);
  updateToggleText(theme);
  toggleButton.addEventListener("click", handleThemeToggle);
}
