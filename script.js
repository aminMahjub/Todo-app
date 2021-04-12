var Task = document.createElement("li");
function addTask() {
    var inputValue = document.getElementsByTagName('input')[0].value;
    if (inputValue == "" || isNaN(inputValue) !== true) {
        alert("Input is not unacceptable");
    } else {
        var Task = document.createElement("li");
        Task.classList.add("li-item");
        var txt = document.createTextNode(inputValue);
        Task.appendChild(txt);
        var TodoList = document.getElementsByClassName('todo-list')[0];
        TodoList.appendChild(Task);
    }
    document.getElementsByTagName('input')[0].value = " ";
    //Step3
    var deleteButton, editButton, completeButton;
    deleteButton = document.createElement("button");
    editButton = document.createElement("button");
    completeButton = document.createElement("button");
    // delete button
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete-btn");
    Task.appendChild(deleteButton);
    // edit button
    editButton.appendChild(document.createTextNode("Edit"));
    Task.setAttribute("contentEditable", "false");
    editButton.classList.add("edit-btn");
    Task.appendChild(editButton);
    //complete button
    completeButton.appendChild(document.createTextNode("Complete"));
    completeButton.classList.add("complete-btn");
    Task.appendChild(completeButton);

    deleteButton.onclick = function deleteTask() {
        TodoList.removeChild(Task);
    };
    editButton.onclick = function editTask() {

        if (Task.contentEditable == "true") {
            Task.contentEditable = false;
            editButton.innerHTML = "Edited";
    
        } else {
            var buttonGroup = document.getElementsByTagName("button");
            var i;
            Task.contentEditable = true;
            editButton.innerHTML = "Editing";
            for (i = 0; i < buttonGroup.length; i++) {
                buttonGroup[i].contentEditable = false;
            }
        }
    }
        completeButton.onclick = function completeTask() {
            var TaskStyle, completeBtnStyle;
            TaskStyle = Task.style;
            completeBtnStyle = completeButton.style;

            if (Task.style.backgroundColor == "green") {
                Task.style = "";
                completeButton.style = "";
                Task.classList.add("li-item");
                Task.classList.remove("completed-item")
                completeButton.innerHTML = "Complete";
            } else {
                TaskStyle.backgroundColor = "green";
                TaskStyle.color = "white"
                completeBtnStyle.backgroundColor = "grey";
                completeButton.innerHTML = "&#10004;"
                Task.classList.add("completed-item");
                Task.classList.remove("li-item");
            }
        };
    }
// filter task             
function filterTask() {
    var filterElement, filterChild, completedTask, unCompletedTask, completedTaskArr, unCompleteTaskArr, k, j;
    filterElement = document.getElementsByClassName("filter")[0];
    filterChild = filterElement.selectedIndex;
    completedTask = document.querySelectorAll(".completed-item");
    unCompletedTask = document.querySelectorAll('.li-item');
    // completedTaskArr = [];
    // unCompleteTaskArr = [];
        
    // for (k = 0; k < completedTask.length; k++) {
    //     completedTaskArr.push(completedTask[k]);
    // }
    // console.log(completedTaskArr);

    // for (j = 0; j < unCompletedTask.length; j++) {
    //     unCompleteTaskArr.push(unCompletedTask[j]);
    // }

    // if (filterChild == 1) {
    //     unCompleteTaskArr.forEach(function (value, index) {
    //         console.log(value);
    //         value.style.display = "inline-block";
    //     });
    //     completedTaskArr.forEach(function (value, index) {
    //         console.log(value);
    //         value.style.display = "none";
    //     });
    // } else if (filterChild == 2) {
    //     unCompleteTaskArr.forEach(function (value, index) {
    //         value.style.display = "none";
    //     });
    //     completedTaskArr.forEach(function (value, index) {
    //         value.style.display = "inline-block";
    //     });
    // } else {
    //     unCompleteTaskArr.forEach(function (value, index) {
    //         value.style.display = "inline-block";
    //     });
    //     completedTaskArr.forEach(function (value, index) {
    //         value.style.display = "inline-block";
    //     });
    // }
    function completedItem(x) {
        for (k = 0; k < completedTask.length; k++) {
            completedTaskArr = completedTask[k];
            completedTaskArr.style.display = x;
        };
        
    }
    function unCompletedItem(y) {
        for (j = 0; j < unCompletedTask.length; j++) {
            unCompleteTaskArr = unCompletedTask[j];
            unCompleteTaskArr.style.display = y;
        };
        
    }
    if (filterChild == 1) {
        unCompletedItem("inline-block");
        completedItem("none");
        
    } else if (filterChild == 2) {
        unCompletedItem("none");
        completedItem("inline-block");
        
    } else {
        unCompletedItem("inline-block");
        completedItem("inline-block");
    }

}
