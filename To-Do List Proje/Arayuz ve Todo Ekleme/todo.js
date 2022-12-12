
// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");





eventListeners();

function eventListeners() { // Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}



function clearAllTodos(e){
    if (confirm("Tümünü Silmek İstiyor musunuz ?")){
    //Arayüzden todoları temizleme
    // todoList.innerHTML=""; Bu yöntem ilede silinebilir. Fakat yavaş çalışır. O yüzde tercih etmeyiz.
        while(todoList.firstElementChild != null) 
        {
        todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
    
}



function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue)=== -1){
            // Bulunamadı.
            listItem.setAttribute("style","display : none !important");
            // Görünmemesi için display none yaptık. Fakat arka planda varlığını sürdürecektir.
        }
        else {
            listItem.setAttribute("style","display : block;");
        }
    })
}



function deleteTodo(e){
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","başarıyla silinmiştir.");
    }
}




function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); ///Arrayden deeğeri silebiliriz.
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}




function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}




function addTodo(e) {
    const newTodo = todoInput.value.trim(); // python strip() baştaki sondaki boslukları al
    const todos = getTodosFromStorage();
    let isThere = false;
    todos.forEach(function(todo){
        if(todo === newTodo){
            isThere=true;
            return isThere;
        }
    })
    if (newTodo === ""){
        showAlert("danger","Lütfen bir todo girin..");
    }

    else if (isThere===true){
        showAlert("danger","aynısı var zaten !");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarılı..")
    }
    e.preventDefault();  //Sayfa yenilenmeyi engelleme 
}




function getTodosFromStorage(){ //Storagedan tüm todoları alır.
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}



function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}


function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    // set TimeOut  (iki değer alır , 1function 2süre)
    setTimeout(function(){
        alert.remove();
    },2500)
}



function addTodoToUI(newTodo){ // Yukardan gelen string degeri burda listeye çevirecek.
    // List İtem Oluşturma
    const listItem = document.createElement("li");
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML= "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    

    // Todo Liste  List-İtemi Ekleme
    todoList.appendChild(listItem);

    // Inputta girdiğimiz metni submit ettikten sonra oto silme
    todoInput.value="";
}






/*
<li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

</li>


<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>

<div class="alert alert-info">
  <strong>Info!</strong> Indicates a neutral informative change or action.
</div>

<div class="alert alert-warning">
  <strong>Warning!</strong> Indicates a warning that might need attention.
</div>

<div class="alert alert-danger">
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>                     
                        
*/