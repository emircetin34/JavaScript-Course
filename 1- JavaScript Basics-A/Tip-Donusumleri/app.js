let value;
// Veritiplerini Stringe çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

// ikinci yöntem
value = (10).toString();
value = (3.14).toString();

console.log(value);
console.log(typeof value);



// Veritiplerini Sayıya Çevirme

value2 = Number("123"); //number olarak çevirir
value2 = Number(null);  //number olarak 0 olarak çevirir.
value2 = Number(undefined); //NaN olarak gönderir.
value2 = Number("Hello World"); //NaN olarak gönderir.
value2 = Number(function(){console.log()}); //NaN olarak gönderir.
value2 = Number([1,2,3,4]); //NaN olarak gönderir.
value2 = parseFloat("3.14"); // number olarak çevirir.
value2 = parseInt("3");  // number olarak çevirir.

console.log(value2);
console.log(typeof value2);




// const number ve string bir arada işlem
const a = "HELLO" + 34;
console.log(a);  // HELLO34 olarak yazdırır.
console.log(typeof a); // string olarak verir.

const b = "53" + 34;
console.log(b);  // 5334 olarak yazar.
console.log(typeof b); // string olarak verir.



