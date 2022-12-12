// Elementleri Seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];


// eventi listele fonku çalıştır
// event listele fonkunu  oluştur , 
// evnet listele fonku form için oluturuucaz
// forma addevenetliste verecez ve submit ile todo eklemeyi koyacaz.





eventListeners();
function eventListeners() {
    form.addEventListener("submit",addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo==="") {
        showAlert("danger","hata aldınız....");
    }
    else {
        showAlert("success","sıkoti");
    }
    e.preventDefault();

}


// Boostrap Alert Ekleme

function showAlert(type,message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    //time out ekleme
    setTimeout(function(){
        alert.remove();
    },1000)
}









// BAKIM
function addTodo(e) {
    const newTodo = todoInput.value.trim(); // python strip() baştaki sondaki boslukları al
    if (newTodo === ""){
        showAlert("danger","Lütfen bir todo girin..");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarılı..")
    }
    e.preventDefault();  //Sayfa yenilenmeyi engelleme 
}




// olmadı
function addTodo(e) {
    let todos = getTodosFromStorage();
    const newTodo = todoInput.value.trim(); // python strip() baştaki sondaki boslukları al
    let isThere = false;
    todos.forEach(function(item){
        if (item.indexOf(newTodo) =! -1){
            isThere = true;
        }
    })
    if (newTodo === ""){
        showAlert("danger","Lütfen bir todo girin..");
    }
    else if (isThere){
        showAlert("danger","daha önceden eklenmiş");
    }

    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarılı..")
    }
    e.preventDefault();  //Sayfa yenilenmeyi engelleme 
}




// const let var denemelleri

let metin2 = "constdeneme";
metin2 = "sa";

console.log(metin2);


function asd(){
    const metin = "constdeneme2";
    console.log(metin);
}
asd();
console.log(metin);