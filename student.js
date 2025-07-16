let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body"); 
// ---- Student -----
let hero2 = document.getElementById("hero");

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

// --- student added----

let tableBody = document.getElementById("tablebody");
let student = JSON.parse(localStorage.getItem("student-data")) || [];

function addStudent() {
    tableBody.innerHTML = "";
    student.forEach((data, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${data.names}</td>
        <td>${data.roll}</td>
        <td>${data.mail}</td>
        <td>${data.phone}</td>
        `;
        tableBody.appendChild(row);
    });
}
addStudent();

// function deleteStudent(index){
//     student.splice(index,1);
//     localStorage.setItem()
// }
// deleteStudent();
