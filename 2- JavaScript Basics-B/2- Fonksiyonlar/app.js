// Fonksiyon Tanımlama
function merhaba() {
    console.log("Merhaba");
}
merhaba();  // Fonksiyon Çağrısı


// Fonksiyona Parametre Girme
function merhaba2(name,age){
    console.log(`İsim: ${name}  Yaş:${age}`);
}
merhaba2("Emir",24);
merhaba2("Ahmet",30);


// Fonksiyon Parametresine Varsayılan Değer Girme
function merhaba3(name,age){
    if (typeof name === "undefined") name = "Bilgi Yok";
    if (typeof age === "undefined") age = "Bilgi Yok";
    console.log(`İsim: ${name}  Yaş:${age}`);
}
merhaba3();


// Fonksiyon Parametresine Varsayılan Değer Girme (KISA YÖNTEM)
function merhaba4(name="Bilgi Yok",age="Bilgi Yok"){
    console.log(`İsim: ${name}  Yaş:${age}`);
}
merhaba4();



//RETURN KULLANMADAN
function square(x){
    console.log(x*x);
}
function cube(x){
    console.log(x*x*x);
}
let a = square(12);  //144 GETİRİR
a = cube(a);         // NaN döndürür, sonuç vermez.



//RETURN ile
function square2(x){
    return x*x;
}
function cube2(x){
    return x*x*x;
}
let b = square2(12);  //144 GETİRİR
b = cube2(b);         
console.log(b); //2985984 sonuç verir.

// square ve cube iç içe kullanma
let c = cube2(square2(12));
console.log(c)


// Function Expression
const sayHello = function(name){
    console.log("Merhaba " + name);
};
sayHello("Emir");


// Immediately Invoked Function Expression (IIFE)
// Tanımlandığı yerde çalışan fonksiyondur. Biz fonksiyonları calıstırmak için cagırıyorduk. Burada ona gerek yok.
(function(name){
    console.log("Merhaba: " + name);
}) ("Ahmet");




const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },

    get: function(){
        console.log("Elde EDİLDİ"); 
    },

    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.get();
database.update(10);
database.delete(20);
