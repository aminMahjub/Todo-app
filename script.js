var li = document.createElement("li");
var toggleClass = li.classList.toggle("completed-item");
function TodoFunction() {
    var text = document.getElementsByClassName('input')[0].value;
    if (text == "" || isNaN(text) !== true) {
        alert("Input is not unacceptable");
    } else {
        var li = document.createElement("li");
        var txt = document.createTextNode(text);
        li.appendChild(txt);
        var ul = document.getElementById('demo');
        ul.appendChild(li);
    }
    document.getElementsByClassName('input')[0].value = " ";
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.className += "delete-btn";
    li.appendChild(deleteButton);
    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.className += "edit-btn";
    li.appendChild(editButton);
    var completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("Complete"));
    completeButton.className += "complete-btn";
    li.appendChild(completeButton);
    var deleteButtoncls = document.getElementsByClassName("delete-btn")[0];
    deleteButton.addEventListener("click", function() {
        li.style.display = "none";
    })
    var completeButtonCls = document.getElementsByClassName("complete-btn")[0];
    completeButton.addEventListener("click", function completeItem() {
        var liStyle = li.style;
        var completeBtnStyle = completeButton.style;
        if (li.style.backgroundColor == "green") {
            li.style = "";
            completeButton.style = ""
            completeButton.innerHTML = "Complete";
        } else {
            liStyle.backgroundColor = "green";
            liStyle.color = "white"
            completeBtnStyle.backgroundColor = "grey";
            completeButton.innerHTML = "&#10004;"
        }
        li.classList.toggle("completed-item");
    });
    var editButtonCls = document.getElementsByClassName("edit-btn")[0];
    li.setAttribute("contentEditable", "false");
    editButton.addEventListener("click", function editItem() {
        if (li.contentEditable == "true") {
            li.contentEditable = false;
            editButton.innerHTML = "Edited";

        } else {
            li.contentEditable = true;
            editButton.innerHTML = "Editing";
            var buttonGroup = document.getElementsByTagName("button");
            var i;
            for (i = 0; i < buttonGroup.length; i++) {
                buttonGroup[i].contentEditable = false;
            }
        }
    });

}
function filterTask() {
    var selectElement = document.getElementsByClassName("filter")[0];
    var i = selectElement.selectedIndex;
    if(i == 0){
alert(1)
    } else if(i == 1) {
        debugger;
        var parentLi = document.getElementById("demo");
        var uncompletedItem = document.getElementsByClassName("completed-item");
        var k;
        var y = uncompletedItem.length - 1;
        for(k = 0; k < y ; k++ ) {
            parentLi.removeChild(uncompletedItem[k]);
        }

alert(2)

    } else {
        
alert(3)

    }
    
}
