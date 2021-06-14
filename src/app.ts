window.addEventListener("themeChanged", (e: CustomEvent) => {
    let container = document.getElementsByClassName("app-root")[0];
    if (e.detail.isDark) {
      container.classList.add("app-root--dark");
    } else {
      container.classList.remove("app-root--dark");
    }
})