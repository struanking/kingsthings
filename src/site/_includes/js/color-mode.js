document.addEventListener("DOMContentLoaded", themeToggler);

function themeToggler() {
  var STATES = Object.freeze({
    dark: "light",
    light: "dark",
  });
  var currentTheme = getPreferredTheme();
  var theme = STATES[currentTheme] || "dark";
  var html = document.querySelector("html");
  var toggleButton = document.querySelector("[data-toggle-theme]");
  var toggleStatus = document.querySelector("[data-toggle-status]");

  function toggleTheme() {
    return STATES[currentTheme];
  }

  function updateCurrentTheme(theme) {
    currentTheme = theme;
  }

  function handleThemeToggle() {
    var oldTheme = currentTheme;
    var newTheme = toggleTheme();
    updateCurrentTheme(newTheme);
    setTheme(newTheme);
    updateToggleText(oldTheme);
  }

  function updateToggleText(theme) {
    toggleButton.innerHTML = "Enable " + theme + " theme";
    toggleStatus.innerHTML = 'Color mode is "' + currentTheme + '"';
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
