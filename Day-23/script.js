// storing todos in localStorage so tasks stay after refresh
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

let tasks = JSON.parse(localStorage.getItem("todos")) || [];

// Initial render
renderTasks();

addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (!text) return;
    
    tasks.push({ text: text, completed: false });
    todoInput.value = "";
    saveAndRender();
});

function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, idx) => {
        const li = document.createElement("li");
        li.className = `todo-item ${task.completed ? "completed" : ""}`;
        
        li.innerHTML = `
            <span onclick="toggleTask(${idx})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${idx})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

window.toggleTask = function(idx) {
    tasks[idx].completed = !tasks[idx].completed;
    saveAndRender();
};

window.deleteTask = function(idx) {
    tasks.splice(idx, 1);
    saveAndRender();
};

function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(tasks));
    renderTasks();
}