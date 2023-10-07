const list = document.getElementById("task-list");
const input = document.getElementById("task-input");

function addTask() {
    const li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    input.value = "";
}