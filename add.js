let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body"); 
// ---- Galery -----
let hero = document.getElementById("hero"); 
let fbox = document.getElementById("f-box"); 

let isOn = false;
function darkMode() {
    body.style.background = "#000";
    body.style.color = "white";
    day.style.background = "none";
    night.style.background = "#5bb3b3";
    day.style.color = "white";  
    fbox.style.background="#1A1A1B"; 
    fbox.style.color="#fff"; 
}
function lightMode() {
    body.style.background = "white";
    body.style.color = "black";
    night.style.background = "none";
    day.style.background = "#5bb3b3";
    night.style.color = "black";
    night.style.color = "black"; 
    fbox.style.background="#fff";
    fbox.style.color="#000";
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

//--------- Add Students----
let form = document.getElementById("form");
let student = JSON.parse(localStorage.getItem("student-data")) || [];
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let obj = {
        names: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        mail: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
    student.push(obj);
    localStorage.setItem("student-data", JSON.stringify(student));
    form.reset();
    alert("Student added !");

});