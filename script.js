function TodoFunction()
{
    var text = document.getElementsByClassName('input')[0].value; 
    if(text == "" || isNaN(text) !== true)
    {
        alert("Input is not unacceptable");
    }
    else{

    var li = document.createElement("li");
    var txt =  document.createTextNode(text);
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
}
