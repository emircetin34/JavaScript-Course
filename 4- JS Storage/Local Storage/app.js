// Local Storage
// local storagede browseri kapatsan bile bilgiler sabit kalır silinmez.

// Set Item
// localStorage.setItem("hareket","squat") //key value
// localStorage.setItem("tekrar",50);
//local stora gelen veriler her zaman stringdir.


// Get Item
// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// Local Storage Temizleme
// localStorage.clear(); //Hepsini Siler.


// Key Kontolü
// console.log(localStorage.getItem("sport"));  // olmadıgı için null döndürür.

// if (localStorage.getItem("tekrar")=== null){
//     console.log("sorguladıgnız veri bulunmuyor");
// }

// else {
//     console.log("VERİ BULUNDU !");
// }



// LOCAL STORAGE - ARRAY YAZMA
// const todos = ["Todo 1" , "Todo 2" , "Todo 3"];
// localStorage.setItem("todos",todos);
// console.log(localStorage.getItem("todos"));
// console.log(typeof localStorage.getItem("todos"));  // Yazdıgımız veriyi string olarak verdi , array olarak vermedi!


//Bizim amacımız ARRAY olarak yazma ve ARRAY olarak alma.
// const todos = ["Todo 1" , "Todo 2" , "Todo 3"];
 // localStorage.setItem("todos",JSON.stringify(todos));   //Veriler Array gibi görünür ve kullanılabilir. //Json formatına dönüşür.


// const value2 = localStorage.getItem("todos");
// console.log(value2);
// console.log(typeof value2);


// const value3 = JSON.parse(localStorage.getItem("todos"));
// console.log(value3);
// console.log(typeof value3);



const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
form.addEventListener("submit",addtodo);
function addtodo(e) {
    const value = todoInput.value

    let todos ;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));


    e.preventDefault(); //sayfa yenilemeyi engelleme (en aşağıda kullanılmalıdır.)
}