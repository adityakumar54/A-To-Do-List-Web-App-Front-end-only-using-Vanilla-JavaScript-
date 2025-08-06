// Select elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to create a new task item
function createTask(taskText) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}

// Add button click handler
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    createTask(task);
    taskInput.value = "";
    taskInput.focus();
  }
});

// Also allow pressing "Enter" to add task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
