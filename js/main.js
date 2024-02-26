// Adaugam elemente
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");
console.log(taskList);

//  pentru a adauga date
form.addEventListener("submit", addTask);

// stergere din lista
taskList.addEventListener("click", deleteTask);

// done task
taskList.addEventListener("click", doneTask);

// functia
function addTask(event) {
  // Anualam ce  reaincarcarea paginei
  event.preventDefault();

  //   geneream textul din Input
  const taskText = taskInput.value;

  const taskHtml = `   <li class="list-group-item d-flex justify-content-between task-item">
     <span class="task-title">${taskText}</span>
     <div class="task-item__buttons">
       <button type="button" data-action="done" class="btn-action">
         <img
           src="./img/tick.svg"
           alt="Finalizat"
           width="18"
           height="18"
          />
       </button>
       <button type="button" data-action="delete" class="btn-action">
         <img
           src="./img/cross.svg"
           alt="Șterge"
           width="18"
           height="18"
         />
       </button>
     </div>
   </li>`;
  taskList.insertAdjacentHTML("beforeend", taskHtml);
  //   curatim Inputul
  taskInput.value = "";
  taskInput.focus();

  console.log(emptyList.children.length);
  //   textul care este care cu sarcinele ca este gol
  if (taskList.children.length > 1) {
    emptyList.classList.add("none");
  }
}

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") {
    return;
  } else {
    const parentNode = event.target.closest(".list-group-item");
    parentNode.remove();
    if (taskList.children.length === 1) {
      emptyList.classList.remove("none");
    }
  }
}

function doneTask(event) {
  if (event.target.dataset.action !== "done") {
    return;
  } else {
    const ParentNode = event.target.closest(".list-group-item");
    ParentNode.classList.toggle("bg-success");
    const taskTitle = ParentNode.querySelector(".task-title");
    taskTitle.classList.toggle("task-title--done");
  }
}
