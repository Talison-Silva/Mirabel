class ThemesMeneger {
  ref = null;

  get() {
    var themeStorage = localStorage.getItem("prefers-color-scheme");

    if (!themeStorage) {
      var themeSystem = window.matchMedia("(prefers-color-scheme: light)");

      if (themeSystem.metches) {
        localStorage.setItem("prefers-color-scheme", "light");
        return "light";
      } else {
        localStorage.setItem("prefers-color-scheme", "dark");
        return "light";
      }
    } else {
      return themeStorage;
    }
  }

  set(theme) {
    var element = document.getElementById("dashboard");

    if (element) {
      element.attributes["data-color-theme"].value = theme;
      localStorage.setItem("prefers-color-scheme", theme);
    } else {
      console.error("ref not registed");
    }
  }
}

export default new ThemesMeneger();
