// TODO App
let todos = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    
    if (task) {
        todos.push({
            id: Date.now(),
            text: task,
            completed: false
        });
        input.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <input type="text" id="taskInput" placeholder="新しいタスク">
        <button onclick="addTask()">追加</button>
        <ul>
            ${todos.map(todo => `<li>${todo.text}</li>`).join('')}
        </ul>
    `;
}

// 初期表示
document.addEventListener('DOMContentLoaded', renderTasks);
function deleteTask(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTasks();
}
