let value ;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil
value = todoList.childNodes;  // Texteri Alır 9 Eleman Geldi Bizim 4 tane Li miz var.
value = todoList.childNodes[0]; 

// Children  - Element getirir. Text Yok.
value = todoList.children;    // 4 adet li gelir.
value = todoList.children[0]; // ilk eleman gelir (li için)
value = todoList.children[todoList.children.length-1];  // son elemanı getirir.
value = todoList.children[2].textContent =" İsim Değişti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent="Burasıda Değişti";


value = todoList;
value = todoList.firstElementChild;  //ilk çocuk getirir.
value = todoList.lastElementChild;  // son çocuk getirir.
value = todoList.children.length;  // cocuk sayısını getirir.
value = todoList.childElementCount; // yukarıdaki ile aynıdır cocuk sayısını getirir.


value = cardrow;
value = cardrow.parentElement; //cardrowun annesini getirir.
value = cardrow.parentElement.parentElement;  // anneanesini getirir :)


// Element Kardeşlerini Bulma (Sibling)

value= todo;  // yukarıdaki tanımlı todo koduna göre gelir. nthler 1den başlar.
value = todo.previousElementSibling;  //bir önceki kardeşi getirir.
value = todo.nextElementSibling;     // bir sonraki kardeşi getirir



console.log(value);