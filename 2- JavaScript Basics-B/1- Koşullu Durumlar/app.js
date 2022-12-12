// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// <
// >
// <=
// >=


console.log(2==2);
console.log("js" == "java")

console.log(2=="2") // biri string biri int olmasına ragmen true döndürür. js bunu otomatik çevirir. Daha sağlıklı bir karşılaştırma için 3 tane eşitlik kullanılır. Aşağıdaki gibi.
console.log(2 === "2")
console.log(2!=2);  //false 

// NOT Operatoru  !
console.log(!(2 == 3));  //true
console.log(!(2 == 2));  //false


// AND operatoru   &&
console.log(2==2) && ("Ahmet" =="Ahmet");

// OR operatoru  ||
console.log((2==3) || ("Ahmet" =="Ahmet"));



// IF Operatoru
/// Örnek-1
const error = true;
if (error == true){
    console.log("Hata Oluştu");
}
else{
    console.log("hata yok.");
}

/// Örnek-2
const islem = "2";

if (islem =="1"){
    console.log("İşlem = 1 ");
}

else if (islem=="2"){
    console.log("İşlem = 2");
}

else if (islem=="3"){
    console.log("İşlem = 3");
}

else{
    console.log("işlem geçersiz")
}


// Ternary Operatoru
const number = 100;
console.log(number == 100 ? "Sayı 100" : "Sayı 100 Değil");   //yatay if-else blogu

//baska yontem
const number2 = 1000;
if (number2==100) console.log("Sayı 100");
else console.log("Sayı 100 Değil");


// Swicth Case
// Örnek

const deneme = 3;
switch (deneme) {
    case 1:
        console.log("1");
        break

    case 2:
        console.log("2");
        break
        
    case 3:
        console.log("3");
        break
        

    default:
        console.log("Geçersiz İşlem");
}

//  metod ve fonksiyon aynı anlama gelir.
//  obje içinde fonksiyon varsa metod denir.
//  obje dısında varsa fonksiyon denir.

