var Task, TodoList, deleteButton, editButton, completeButton;

  function addTask() {
    var inputValue = document.getElementsByTagName("input")[0];
    TodoList = document.getElementsByClassName("todo-list")[0];
    Task = document.createElement("li");
    var txt = document.createTextNode(inputValue.value);
    if (inputValue.value == "" || isNaN(inputValue.value) !== true) {
      alert("Input is not unacceptable");
    } else {
      Task.classList.add("li-item");
      Task.appendChild(txt);
      TodoList.appendChild(Task);
    }
    inputValue.value = " ";
    createButton();
    deleteButton.addEventListener("click", deleteTask);
  }

  function createButton() {
    deleteButton = document.createElement("button");
    editButton = document.createElement("button");
    completeButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete-btn");
    Task.appendChild(deleteButton);
    editButton.appendChild(document.createTextNode("Edit"));
    Task.setAttribute("contentEditable", "false");
    editButton.classList.add("edit-btn");
    Task.appendChild(editButton);
    completeButton.appendChild(document.createTextNode("Complete"));
    completeButton.classList.add("complete-btn");
    Task.appendChild(completeButton);
  }

  function deleteTask() {
    TodoList.removeChild(Task);
  }

// function createButton() {
//   debugger;
//   deleteButton = document.createElement("button");
//   editButton = document.createElement("button");
//   completeButton = document.createElement("button");
//   deleteButton.appendChild(document.createTextNode("Delete"));
//   deleteButton.classList.add("delete-btn");
//   Task.appendChild(deleteButton);
//   editButton.appendChild(document.createTextNode("Edit"));
//   Task.setAttribute("contentEditable", "false");
//   editButton.classList.add("edit-btn");
//   Task.appendChild(editButton);
//   completeButton.appendChild(document.createTextNode("Complete"));
//   completeButton.classList.add("complete-btn");
//   Task.appendChild(completeButton);
// }
// function deleteTask() {
//     TodoList.removeChild(Task);

// }
// function createButton() {
//     debugger;
//     var deleteButton, editButton, completeButton;
//     deleteButton = document.createElement("button");
//     editButton = document.createElement("button");
//     completeButton = document.createElement("button");
//     deleteButton.appendChild(document.createTextNode("Delete"));
//     deleteButton.classList.add("delete-btn");
//     Task.appendChild(deleteButton);
//     editButton.appendChild(document.createTextNode("Edit"));
//     Task.setAttribute("contentEditable", "false");
//     editButton.classList.add("edit-btn");
//     Task.appendChild(editButton);
//     completeButton.appendChild(document.createTextNode("Complete"));
//     completeButton.classList.add("complete-btn");
//     Task.appendChild(completeButton);
//     }
// function filterTask() {
//     var filterElement, filterChild, completedTask, unCompletedTask, completedTaskArr, unCompleteTaskArr, k, j;
//     filterElement = document.getElementsByClassName("filter")[0];
//     filterChild = filterElement.selectedIndex;
//     completedTask = document.querySelectorAll(".completed-item");
//     unCompletedTask = document.querySelectorAll('.li-item');

//     function completedItem(x) {
//         for (k = 0; k < completedTask.length; k++) {
//             completedTaskArr = completedTask[k];
//             completedTaskArr.style.display = x;
//         };

//     }
//     function unCompletedItem(y) {
//         for (j = 0; j < unCompletedTask.length; j++) {
//             unCompleteTaskArr = unCompletedTask[j];
//             unCompleteTaskArr.style.display = y;
//         };

//     }
//     if (filterChild == 1) {
//         unCompletedItem("inline-block");
//         completedItem("none");

//     } else if (filterChild == 2) {
//         unCompletedItem("none");
//         completedItem("inline-block");

//     } else {
//         unCompletedItem("inline-block");
//         completedItem("inline-block");
//     }

// }
// deleteButton.onclick = function deleteTask() {
//   TodoList.removeChild(Task);
// };
// editButton.onclick = function editTask() {
//   if (Task.contentEditable == "true") {
//     Task.contentEditable = false;
//     editButton.innerHTML = "Edited";
//   } else {
//     var buttonGroup = document.getElementsByTagName("button");
//     var i;
//     Task.contentEditable = true;
//     editButton.innerHTML = "Editing";
//     for (i = 0; i < buttonGroup.length; i++) {
//       buttonGroup[i].contentEditable = false;
//     }
//   }
// };
// completeButton.onclick = function completeTask() {
//   var TaskStyle, completeBtnStyle;
//   TaskStyle = Task.style;
//   completeBtnStyle = completeButton.style;

//   if (Task.style.backgroundColor == "green") {
//     Task.style = "";
//     completeButton.style = "";
//     Task.classList.add("li-item");
//     Task.classList.remove("completed-item");
//     completeButton.innerHTML = "Complete";
//   } else {
//     TaskStyle.backgroundColor = "green";
//     TaskStyle.color = "white";
//     completeBtnStyle.backgroundColor = "grey";
//     completeButton.innerHTML = "&#10004;";
//     Task.classList.add("completed-item");
//     Task.classList.remove("li-item");
//   }
// };
