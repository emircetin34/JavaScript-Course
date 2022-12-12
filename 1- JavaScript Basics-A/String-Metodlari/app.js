// 
let value;

const firstName = "Mümin";
const lastName = "Çetin";
const langs = "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Mümin Emir";
value += " Çetin"  // value = value + çetin



//length Fonksiyonu  //length foksiyonu pythondan farklıdır 0 dahil etmez. !
value = firstName.length; //Mümin 5 döndürür.

//concat Fonksiyonu (ekleme gibi düşünebilir.)
value = firstName.concat("asdasdadsadad",lastName) // MüminasdasdadsadadÇetin olarak döndürür.

//toLowerCase = Harfleri küçük yapma
value = firstName.toLowerCase();

//toUpperCase = Harfleri büyük yapma
value = firstName.toUpperCase();

// index
value = firstName[0];  //M getirir.
value = firstName[-1]; //undefined tanımsız olarak yorumlar.
value = firstName[4];
value = firstName[firstName.length -1]; // son elemanı verir.

// index of 
value = firstName.indexOf("M");  // 1 olarak döndürür. M harfi 1.sırada old için
value = firstName.indexOf("m");  // 2 olarak döndürür.
value = firstName.indexOf("X");  // -1 olarak dönüyorsa firstNamede o harf yoktur.


// char at  //index of un tersidir. index verilir harfler gelir.
value = firstName.charAt(1); 
value = firstName.charAt(firstName.length-1);

// split  
value = langs.split(","); //langs içindekileri virgül ile ayırır ve diziye ekler.

// replace  
value = langs.replace("Java","CSS"); //yer değiştirme

// includes  (içeride aradığımız değer varsa True yok False döndürür.)
value = langs.includes("Java"); //true
value = langs.includes("asdasdd"); //false


console.log(value);