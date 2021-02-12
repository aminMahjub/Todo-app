//scrip
        function TodoFunction()
        {
            var text = document.getElementById('input').value; 
            if(text == "" || isNaN(text) !== true)
            {
                alert("Input is not unacceptable");
            }
            else{

            var input = document.getElementById('btn');
            var li = document.createElement("li");
            var txt =  document.createTextNode(text);
            li.appendChild(txt);
            var ul = document.getElementById('demo');
            ul.appendChild(li);
            }
            (function(){
                document.getElementById('input').value = " ";

            }())
        }
