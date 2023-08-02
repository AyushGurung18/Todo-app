const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function newElement() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = "delete-btn"; // Adding the custom class name
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    const date = new Date();
    const dateString = formatDate(date); // Format the date as you desire (e.g., 'yyyy-mm-dd')
    const dateSpan = document.createElement("span");
    dateSpan.innerText = dateString;
    dateSpan.className = "task-date";
    li.appendChild(dateSpan);

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}

// Adding event listener to add task when 'Enter' key is pressed in the input field
taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    newElement();
  }
});
