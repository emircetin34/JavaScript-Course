// Değişken Oluşturma
var a = 10;
var b = 20;
var c = 30;
console.log(a,b,c);


//Primitive  ##########

// Number
var x = 10; //Number veri tipi
var y = 3.14; //Number veri tipi
console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);

// String
var name1 = "Ahmet";
console.log(name1);
console.log(typeof name1);

//Boolen
var x1 = true;
var y1 = false;
console.log(x1);
console.log(typeof x1);
console.log(y1);
console.log(typeof y1);

//null değer
var k = null
console.log(k);
console.log(typeof k); // burada typei obje olarak döndürür. Bir bugtur. Null değer içermez.

var k1;
console.log(typeof k1); // undefined değer gönderir. k1 değeri yok null gibi algılar ama type object göndermez.







// Reference Veri Tipi  ##########

// Array
var numbers2 = [1,2,3,4,5];
 console.log(numbers2);
 console.log(typeof numbers2);
 console.log(numbers2[0]);


var person = {
    nameP : "Mustafa Murat",
    ageP  : 25
}
console.log(person);
console.log(typeof person) //object olarak döner.


var date = new Date();
console.log(date);
console.log(typeof date); //object olarak  döner


var merhaba = function(){
    console.log("Merhaba");
}
console.log(merhaba);
console.log(typeof merhaba); // function olarak döner fakat oda objecttir.


// Referans Alma NUMBERS VE DİZİ ARASINDAKİ FARK

//Numbers Örneği
var a = 10;
var b = a;
console.log(a,b); // 10 - 10 döndürür.
a = 20;
console.log(a,b); // 20 - 10 döndürür.

//Array Örneği
var a = [1,2,3];
var b = a;
a.push(4);
console.log(b); // 1-2-3-4 döndürür. 4üde yazar. dizi old için ref alır.


