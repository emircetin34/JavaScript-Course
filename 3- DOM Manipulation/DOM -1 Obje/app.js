// DOM = Document Object Model
/// Windows Object
let value;

value = document;
value = document.all // tüm html etiketlerini getirir.
value = document.all.length // etiketlerin sayısını getirir.
value = document.all[0];  //ilk elementi getirir.
value = document.all[5];  //6. elementi getirir.
value = document.all[document.all.length-1]; // son elementi getirir.



// const elements = document.all; //html collection
// for (let i = 0; i<elements.length; i++)
// { console.log(elements)[i]}


value = document.body;
value = document.head;
value = document.location;
value = document.location.host;
value = document.location.port;
value = document.URL;
value = document.characterSet;


// Scriptler
value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

// Linkler
value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");  //son clası nameyi getirir.
value = document.links[document.links.length-1].className  //son clası nameyi getirir.
value = document.links[document.links.length-1].getAttribute("href");  //son href içindekini değeri getirir.
value = document.links[document.links.length-1].classList; 

//Formlar
value = document.forms;
value = document.forms[0];
value = document.forms.length;
value = document.forms["form"];  // adı form olanı getir.
value = document.forms[0].id;    // idyi getirir.
value = document.forms[0].getAttribute("id"); // yukarıdaki ile aynı mantıkdadır. id getirir.
value = document.forms[0].getAttribute("name");  // formun ismini getirir.
value = document.forms[0].method   //Method bilgisini getirir. Post yad Get olarak. 
// Form içerisinde method ekleme.
// <form id = "todo-form" name="form" method="POST"> </form>  
// Yukarıdaki gibi extradan method diye bir parametreye POST yada GET bilgisi girilir.


// ilk bölüm son
//console.log(value);




//Elementi ID'ye göre Seçme
let element;
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");


//Element Class'a göre Seçme
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];  // ilk li element


//Element Tag'e göre Seçme
element = document.getElementsByTagName("div");


//Query Selector - CSS Selector - Tek bir eleman döndürür.(Yukarıdakilerin Alternatifidir.)
element = document.querySelector("#todo-form"); //ID için # unutma!
element = document.querySelector("#tasks-title");  //ID için # unutma!
element = document.querySelector(".list-group-item"); //Class için . unutma!

// Yukardakilerde . ve # karakterini kullandık. Burda kullanmadık çünkü etiket ismi çağırıyoruz.
element = document.querySelector("li");  //ilk li yi getirir.
element = document.querySelector("div"); //ilk divi getirir.

//Query Selector ALL 
// Yukarıda hep ilk elemanlar geliyordu biz bu ALL metodu ile hepsini çağırabiliriz.
element = document.querySelectorAll("li"); //tüm listeleri getirir


// element = document.querySelectorAll(".list-group-item");
// element.forEach(function(el){
//     console.log(el);
// });



// ikinci bölüm son
// console.log(element);



// ELEMENT ÖZELLİKLERİ
// const element2 = document.querySelector("#clear-todos");

// console.log(element2.id);
// console.log(element2.className);
// console.log(element2.classList);  // idsi clear-todos olan classları listeler
// console.log(element2.classList[0]);
// console.log(element2.textContent);
// console.log(element2.innerHTML);
// console.log(element2.href);
// console.log(element2.style);
 

//STYLE VE ELEMENT ÖZELLİKLERİNİ DEĞİŞTİRME
// const element3 = document.querySelector("#clear-todos");

// element3.className = "btn btn-success";  //buton rengini değiştirdi
// element3.style.color= "red";             // buton içindeki textin rengini değiştirdi.
// element3.style.marginLeft = "50px";
// element3.href = "https://google.co.il";
// element3.target = "_blank";
// element3.textContent="Buton İsini Değiştirdik";
// element3.innerHTML="<span style='color:green;' ></span>"



// NODE LİST
const element4 = document.querySelectorAll(".list-group-item");
element4.forEach(function(el){
    el.style.color="red";
    el.style.background = "black";  
});
//Yukarıdaki fonk ile tüm li elemenalarını rengini red arkaplanı ise siyah yaptık.



// CHILD KAVRAMLARI (YUKARIDAK ÖRNEKLERDE İLK ELEMAN VE TÜM ELEMANLARI İNCELEDİK.)
// İSTEDİĞİMİZ ELEMANA ERİŞMEK İÇİN ÖZEL YAPILAR VARDIR. AŞAĞIDAKİ LİNKTE DETAY MEVCUT.
// https://www.w3schools.com/cssref/css_selectors.php
// css child selector documents
let element5 = document.querySelector("li"); //ilk elemanı verir bunu zaten yukarıda gördük.
element5 = document.querySelector("li:first-child");  // ilk elemanı verir.
element5 = document.querySelector("li:last-child");  // son elemanı verir.
element5 = document.querySelector("li:nth-child(2)");  // 2. elemanı verir.
element5 = document.querySelector("li:nth-child(3)");  // 3. elemanı verir.
element5 = document.querySelector("li:nth-child(4)");  // 4. elemanı verir.
element5 = document.querySelector("li:nth-child(odd)");  // Tek sayılı elemanları verir.
element5 = document.querySelector("li:nth-child(even)");  // Çift sayılı elemanları verir.
//console.log(element5)


// Foreach ile tek haneli elemanlarda gezinme
let element6 = document.querySelector("li:nth-child(odd)");
element6.forEach(function(ex){
    ex.style.background="#ccc";
    ex.style.color="green";
})



