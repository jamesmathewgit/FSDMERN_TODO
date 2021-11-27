function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            var todolist = myObj.todo;
            var itemchecked = 0;
            text = "<form name='myForm1'><center><br><br><table style='width:725px;border: 2px solid rgb(0, 0, 0)' id='tab' cellpadding='10' height='450' align='center'><tr><th>No</th><th>TaskList</th><th>Status</th></tr>"
            for (x in todolist) {
                var st = '';
                if (todolist[x].completed) {
                    st = 'checked ';
                    itemchecked += 1;
                }

                text += "<tr ><td align='center'>" + todolist[x].id  + "<td align='center'>" + todolist[x].title + " </td>" + "<td align='center'><input type='checkbox' onclick='myFunction()' id='status'" + st + "></td> </tr> ";
            }
            document.getElementById("tab").innerHTML = text;
    
        }
    };
    xhttp.open("GET", "todo.json", true);
    xhttp.send();

}

function myFunction() {

    var checkbox1 = document.querySelectorAll("input[type='checkbox']");
    var count = 0;
    var itemcount = checkbox1.length;
    for (var i = 0; i < checkbox1.length; i++)
        if (checkbox1[i].checked) {
            count += 1;
            checkbox1[i].disabled="disabled"
        }

    if (this.checked) {
      

        count -= 1;
     
        if (count <=5) {
            alert("complete the tasks");
        }

    } else {
     
        if (count == 5) {
            alert("Congrats.  5 Tasks have been Successfully Completed ");
         
        }
        count += 1;

    }

 
}