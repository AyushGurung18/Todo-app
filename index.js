const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function newElement() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "icon";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      editTask(textSpan, li); // Pass the task text span and the li element
    });

    const textSpan = document.createElement("span"); // Separate span for the task text
    textSpan.innerText = taskText;

    const date = new Date();
    const dateString = formatDate(date);
    const dateSpan = document.createElement("span");
    dateSpan.innerText = dateString;
    dateSpan.className = "task-date";

    li.appendChild(div); // Add the buttons div to the list item

    li.appendChild(textSpan); // Add the task text without toggling
    li.appendChild(dateSpan); // Add the date below the task text

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", toggleCompleted); // Add click event to li for completing tasks
  }
}

function editTask(textSpan, li) {
  const taskText = textSpan.innerText;
  const editedText = prompt("Edit task:", taskText);

  if (editedText !== null && editedText.trim() !== "") {
    textSpan.innerText = editedText;

    // Remove the completed class from the li element
    li.classList.remove("completed");
  }
}

function toggleCompleted() {
  this.classList.toggle("completed");
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}

taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    newElement();
  }
});
