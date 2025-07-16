let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body"); 
// ---- Galery -----
let hero = document.getElementById("hero");
let pbox = document.querySelectorAll("#p-box") 
let navbar = document.getElementById("navbar");
let hamburger = document.getElementById("ham");

let isOn = false;
function darkMode() {
    body.style.background = "#000";
    body.style.color = "white";
    day.style.background = "none";
    night.style.background = "#5bb3b3";
    day.style.color = "white"; 
    pbox.forEach((pb)=>{
        pb.style.background="#1A1A1B";
    });
    navbar.style.background="#000";
    hamburger.style.color="#fff";
}
function lightMode() {
    body.style.background = "white";
    body.style.color = "black";
    night.style.background = "none";
    day.style.background = "#5bb3b3";
    night.style.color = "black";
    night.style.color = "black"; 
    pbox.forEach((pb)=>{
        pb.style.background="#fff";
    });
     navbar.style.background="#fff";
    hamburger.style.color="#000";
}

window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        darkMode();
        // Index Page 
        hero.style.background = "#000";
 
        isOn = true;
    } else {
        lightMode(); 
        hero.style.background = "#fff"; 
        isOn = false;
    }
});

// 🌞 Day mode button
day.addEventListener("click", () => {
    if (isOn) {
       lightMode(); 
        hero.style.background = "#fff"; 
        localStorage.setItem("mode", "light");  // 💾 save
        isOn = false;
    }
});

// 🌙 Night mode button
night.addEventListener("click", () => {
    if (!isOn) {
        darkMode();  
        hero.style.background = "#000"; 
        localStorage.setItem("mode", "dark");   // 💾 save
        isOn = true;
    }
});

// --- toogle --- 
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-list").classList.toggle("show");
    
});