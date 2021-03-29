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
}
