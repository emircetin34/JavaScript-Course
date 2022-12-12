//REPLACE
// <h5 class="card-title" id = "tasks-title">Todolar</h5>
const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id= "tasks-title";
newElement.textContent = "Yeni h3 etiketi"; 
// Eski Element
const oldElement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement,oldElement);
console.log(newElement);


//Atttribute 2. KISIM
const todoInput = document.getElementById("todo");
let element;

element= todoInput;
element= todoInput.classList;
element= todoInput.classList.length;
// form-controlün yanına 2 adet daha class eklemeye calısağız.


//todoInput.className = "form-control newClass";  aşağıdaki ile aynıdır.

todoInput.classList.add("newClass");  // newClassi ekledik.
todoInput.classList.add("newClass2"); // newClassi 2yi ekledik.
todoInput.classList.remove("form-control"); //form control silindi.
element = todoInput;



element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","naber");  //var olan özelliğin değerini değiştirme
todoInput.setAttribute("title","input");        // yeni özellik ekleme

element = todoInput;
element = todoInput.hasAttribute("name");  //name classı yada özelliği vb. varmı ? Varsa True yoksa False döndürür.

element = todoInput
element = todoInput.removeAttribute("name"); //name isimlli attributi siler.

console.log(element);