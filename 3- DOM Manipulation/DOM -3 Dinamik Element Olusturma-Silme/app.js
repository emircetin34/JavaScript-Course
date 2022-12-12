// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Yeni Element Olusturma</a> 

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];  // buraya ekleyeceğiz a etiketini

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.youtube.com/watch?v=X9QFQrQVPLM";
newLink.targer = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sf Git"));
cardbody.appendChild(newLink);


// Text Content
// newLink.textContent = "Farklı Sayfaya Git"; // Bu güvenli bir yöntem değildir.
// Çünkü mevcut tüm etiketleri etkileme ihtimali söz konusudur. 
// O yüzden kullanılmamalıdır.



// Text Node
// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardbody);
// console.log(newLink);


//Dinamik Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

//Remove Metodu
todos[0].remove();  //ilk eleman silindi.

//Remove Child
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[2]);


// console.log(todos);