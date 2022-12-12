// Klavye Eventleri

// keypress
// Sadece harf ve rakamları consola girer.
// document.addEventListener("keypress",run);
// function run(e) {
//     console.log(e.key);
// }



// keydown
// Tuşa basar basmaz consola girer. (Diger tular dahildir. TAB , Capslock vs.)
// document.addEventListener("keydown",run);
// function run(e) {
//     console.log(e.key);
// }



// keyup 
// Tuşu bıraktığımız zaman console yazar.
// document.addEventListener("keyup",run);
// function run(e) {
//     console.log(e.key);
// }


// Başlık Değiştirme 
// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");
// todoInput.addEventListener("keyup",changeText);
// function changeText(e){
//     header.textContent = e.target.value;

    //console.log("Naber");
    //console.log(e.target); // eventin oluştuğu yeri gösterir.
    //console.log(e.target.value); // içindeki yazıyı alırız.
// };





// MOUSE EVENTLERİ

// Click Event  (Tıklandığında çalışır)
// Double Click (Çift tıklandığında çalışır)
// Mouse Down (Click Evente çok benzerdir.)
// Mouse Up   (KeyUp a çok benzer basılı tuttugumuzda çalışır)
// Mouse Over (İstediğimiz elemanın üstünde geldiginde çalışır. Elemanın çocukları dahildir.)
// Mouse Out  (İstediğimiz elemanın üstünden ayrıldığımızda çalışır.Elemanın çocukları dahildir.)
// Mouse Enter (İstediğimiz elemanın üstünde geldiginde çalışır.)
// Mouse Leave  (İstediğimiz elemanın üstünden ayrıldığımızda çalışır.)

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");


//Click Event (Tıklandığında çalışır)
// Titleye bastığımızda consoleda click yazar.
// title.addEventListener("click",run);
// function run(e){
//     console.log(e.type);
// };


// Double Click (Çift tıklandığında çalışır)
// title.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Down (Click Evente çok benzerdir.)
// title.addEventListener("mousedown",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Up   (KeyUp a çok benzer basılı tuttugumuzda çalışır)
// title.addEventListener("mouseup",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Over (İstediğimiz elemanın üstünde geldiginde çalışır. Elemanın çocukları dahildir.)
// title.addEventListener("mouseover",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Out  (İstediğimiz elemanın üstünden ayrıldığımızda çalışır.Elemanın çocukları dahildir.)
// title.addEventListener("mouseover",run);
// title.addEventListener("mouseout",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Enter (İstediğimiz elemanın üstünde geldiginde çalışır.)
// title.addEventListener("mouseenter",run);
// function run(e){
//     console.log(e.type);
// };


// Mouse Leave  (İstediğimiz elemanın üstünden ayrıldığımızda çalışır.)
// title.addEventListener("mouseleave",run);
// function run(e){
//     console.log(e.type);
// };
