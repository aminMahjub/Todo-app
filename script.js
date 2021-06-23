let taskDataBase = [];
const TodoList = document.querySelector(".todo-list");

const inputValue = document.querySelector("input");
let status = "all";
let countId = 0;

function addTask() {
  if (inputValue.value == "") {
    alert("hhhh");
    return;
  } else {
    dataBase(inputValue.value);
    renderPage();
    inputValue.value = "";
  }
}

function dataBase(text) {
  let taskObj = {
    text: text,
    completeStatus: false,
    id: countId,
    edit: false,
  };
  countId++;
  taskDataBase.push(taskObj);
}

function renderPage() {
  TodoList.innerHTML = "";
  const filteredDataBase = taskDataBase.filter((task) => {
    switch (status) {
      case "all": {
        return true;
      }
      case "completed": {
        if (task.completeStatus) {
          return true;
        } else {
          return false;
        }
      }
      case "active": {
        if (!task.completeStatus) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
  filteredDataBase.forEach(function (taskArry) {
    const { id, completeStatus, text , edit} = taskArry;
    const Task = document.createElement("li");
    Task.classList.add("li-item");
    Task.textContent = text;
    Task.id = `${id}`;
    if (completeStatus) {
      Task.classList.remove("complete-btn");
      Task.classList.add("complete-status");
    }
    if (edit) {
      Task.contentEditable = true;
    }
    createButton(Task);
    TodoList.appendChild(Task);
  });
}

function createButton(Task) {
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const completeButton = document.createElement("button");

  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete-btn");
  Task.appendChild(deleteButton);
  deleteButton.addEventListener("click", (event) => {
    deleteTask(event);
  });

  editButton.appendChild(document.createTextNode("Edit"));
  editButton.classList.add("edit-btn");
  Task.appendChild(editButton);
  editButton.addEventListener("click", (event) => {
    editTask(event);
  });

  completeButton.appendChild(document.createTextNode("Complete"));
  completeButton.classList.add("complete-btn");
  completeButton.addEventListener("click", (event) => {
    completeTask(event);
  });
  Task.appendChild(completeButton);
}

function editTask(event) {
  event.preventDefault();
  const editButton = event.target;
  const li = editButton.parentElement;
  const id = +li.id;

  for (let task of taskDataBase) {
    if (task.id === id) {
      task.edit = !task.edit;
      task.text = li.childNodes[0].nodeValue;
      break;
    }
  }
  renderPage();
}

function deleteTask(event) {
  event.preventDefault();
  const deleteButton = event.target;
  const li = deleteButton.parentElement;
  const id = +li.id;

  taskDataBase = taskDataBase.filter((task) => {
    return task.id !== id;
  });
  renderPage();
}

function completeTask(event) {
  event.preventDefault();
  const completeButton = event.target;
  const li = completeButton.parentElement;
  const id = +li.id;

  for (let task of taskDataBase) {
    if (task.id === id) {
      task.completeStatus = !task.completeStatus;
      break;
    }
  }
  renderPage();
}
function filterTask() {
  const filterElement = document.getElementsByClassName("filter")[0];
  const filterELChild = filterElement.value.toLowerCase();

  status = filterELChild;
  renderPage();
}
