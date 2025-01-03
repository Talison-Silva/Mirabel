export class PrefersColorScheme {
  constructor() {
    var systemColorScheme = window.matchMedia("(prefers-color-scheme: light)");

    if (systemColorScheme.matches) {
      localStorage.setItem("prefers-color-scheme", "light");
    } else {
      localStorage.setItem("prefers-color-scheme", "dark");
    }
  }

  get() {}

  set() {}
}
