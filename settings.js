const theme_btn = document.querySelector("#daynight");
const theme_ls = localStorage.getItem("darkmode");

function applytheme(boolean) {
    document.body.classList.toggle("dark-mode");
    if (boolean) {
        localStorage.setItem("darkmode", 'true');
        theme_btn.classList.remove('cute-btn');
        theme_btn.classList.add('cute-btn2');
        theme_btn.textContent = "Change 2 Day Mode";
    } else {
        localStorage.setItem("darkmode", 'false');
        theme_btn.classList.remove('cute-btn2');
        theme_btn.classList.add('cute-btn');
        theme_btn.textContent = "Change 2 Night Mode";
    }
}

if (localStorage.getItem("darkmode") === null) {
    localStorage.setItem("darkmode", false);
} else if (theme_ls === 'true') {
    applytheme(true);
}

theme_btn.addEventListener("click", () => {
    applytheme(localStorage.getItem("darkmode")!=='true');
})
