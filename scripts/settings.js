const theme_btn = document.querySelector("#daynight");
let theme_ls = localStorage.getItem("darkmode")==='true';

function applytheme(boolean) {
    document.body.classList.toggle("dark-mode",boolean);
    theme_btn.classList.toggle("cute-btn",!boolean);
    theme_btn.classList.toggle("cute-btn2",boolean);
    localStorage.setItem("darkmode",boolean);
    theme_btn.textContent = boolean ? "Change 2 Day Mode" : "Change 2 Night Mode";
    theme_ls=boolean;
}

applytheme(theme_ls);
theme_btn.addEventListener("click", () => {
    applytheme(!theme_ls);
})
