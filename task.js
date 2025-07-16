let day = document.getElementById("day");
let night = document.getElementById("night");
let body = document.querySelector("body");
// ---- Student -----
let hero = document.getElementById("hero");
let formbox = document.getElementById("forms");

let isOn = false;
function darkMode() {
    body.style.background = "#000";
    body.style.color = "white";
    day.style.background = "none";
    night.style.background = "#5bb3b3";
    day.style.color = "white";
    formbox.style.background = "#1A1A1B";
    formbox.style.color = "#fff";
    store.style.background = "#1A1A1B";
}
function lightMode() {
    body.style.background = "white";
    body.style.color = "black";
    night.style.background = "none";
    day.style.background = "#5bb3b3";
    night.style.color = "black";
    night.style.color = "black";
    formbox.style.background = "#fff";
    formbox.style.color = "#000";
    store.style.background = "#fff";
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

// ---- Task Added ----
let form = document.getElementById("form");
let store = document.getElementById("tasks");
let todo = [];
window.addEventListener("DOMContentLoaded", () => {
    let saved = localStorage.getItem("todoList");
    let uncompStore = localStorage.getItem("store");
    if (saved) {
        todo = JSON.parse(saved);
        addTodo();
    }
});
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let obj = {
        texts: document.getElementById("text").value,
        done: false,
    }
    todo.push(obj);
    localStorage.setItem("todoList", JSON.stringify(todo)); // ✅ save to localStorage
    addTodo();
    form.reset();
    let msg = document.getElementById("msg");
    msg.textContent = "Task Added";
    setTimeout(() => {
        msg.textContent = "";
    }, 2000);

})
function addTodo() {
    store.innerHTML = "";
    let uncomplete = 0;
    let complete = 0;
    todo.forEach((data, index) => {
        let row = document.createElement("div");
        row.className = "msg-row";
        row.innerHTML = `
            <input type="checkbox" class="check" data-id="${index}" ${data.done ? "checked" : ""}>
    <p>${data.texts}</p>
    <button id="del" class="del" data-id="${index}"><i class="fa-solid fa-trash"></i></button>
    `;
        store.appendChild(row);
        data.done ? complete++ : uncomplete++;
    });

    document.getElementById("comp").textContent = complete;
    document.getElementById("uncomp").textContent = uncomplete;

    document.querySelectorAll(".del").forEach((btn) => {
        btn.addEventListener("click", deleteTodo);
        localStorage.setItem("store", JSON.stringify(uncompStore));
    }); 
}
function deleteTodo(e) {
    let index = e.target.closest("button").getAttribute("data-id");
    todo.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todo));
    addTodo();
} 