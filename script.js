let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body");
// --- Index ---
let hero = document.getElementById("hero");
let tbox = document.querySelectorAll("#tbox");
let tb = document.getElementById("tb");
let updates = document.getElementById("updates");
let anrow = document.querySelectorAll("#anrow");
// ---- Student -----
let hero2 = document.getElementById("hero2");

let isOn = false;
function darkMode() {
    body.style.background = "#000";
    body.style.color = "white";
    day.style.background = "none";
    night.style.background = "#5bb3b3";
    day.style.color = "white";
}
function lightMode() {
    body.style.background = "white";
    body.style.color = "black";
    night.style.background = "none";
    day.style.background = "#5bb3b3";
    night.style.color = "black";
    night.style.color = "black";
}

window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        darkMode();
        // Index Page 
        hero.style.background = "#000";
        tbox.forEach((box) => {
            box.style.background = "#1A1A1B";
        });
        tb.style.background = "#1A1A1B";
        updates.style.background = "#1A1A1B";
        anrow.forEach((an) => {
            an.style.background = "#1A1A1B";
        })
        // --- Student --
        // hero2.style.background="#000";

        isOn = true;
    } else {
        lightMode();
        // -- index --
        hero.style.background = "#fff";
        tbox.forEach((box) => {
            box.style.background = "#fff";
        });
        tb.style.background = "#fff";
        updates.style.background = "#fff";
        anrow.forEach((an) => {
            an.style.background = "#fff";
        })
        // --- Student ---
        // hero2.style.background="#fff";

        isOn = false;
    }
});

// 🌞 Day mode button
day.addEventListener("click", () => {
    if (isOn) {
       lightMode();
        // ------ index ---
        hero.style.background = "#fff";
        tbox.forEach((box) => {
            box.style.background = "#fff";
        });
        tb.style.background = "#fff";
        updates.style.background = "#fff";
        anrow.forEach((an) => {
            an.style.background = "#fff";
        })
        // ---- Student ----
        // hero2.style.background="#fff";
        localStorage.setItem("mode", "light");  // 💾 save
        isOn = false;
    }
});

// 🌙 Night mode button
night.addEventListener("click", () => {
    if (!isOn) {
        darkMode(); 
        // -- index----
        hero.style.background = "#000";
        tbox.forEach((box) => {
            box.style.background = "#1A1A1B";
        });
        tb.style.background = "#1A1A1B";
        updates.style.background = "#1A1A1B";
        anrow.forEach((an) => {
            an.style.background = "#1A1A1B";
        })
        // ---- Student ----
        // hero2.style.background="#000";

        localStorage.setItem("mode", "dark");   // 💾 save
        isOn = true;
    }
});


// --- toogle ---
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-list").classList.toggle("show");
});