document.addEventListener("DOMContentLoaded", () => {
    var dark = false;
    const html = document.querySelector("html");
    const darkButton = document.getElementById("dark");
    darkButton.addEventListener("click", (e) => {
        dark = !dark;
        if (dark) {
            html.setAttribute("dark", "");
            darkButton.innerText = "Dark Mode";
        } else {
            html.removeAttribute("dark");
            darkButton.innerText = "Light Mode";
        }
    });
});