let value;

const value1 = 10;
const value2 = 4;

//Aritmatik İşlemler
value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;




// Math Kütüphanesi
value = Math.PI;   //pi sayısını verir. 3.14...
value = Math.E;

//Round = Yuvarlama , nereye yakınsa o tarafa yuvarlar.
value = Math.round(3,9); 
value = Math.round(3,5); // ortadaysa yukarı yuvarlar.
value = Math.round(3,1); 

//Ceil = Her türlü yukarı yuvarlama yapar.
value = Math.ceil(3,9);
value = Math.ceil(3,5);
value = Math.ceil(3,1);

// Floor = Her türlü aşağı yuvarlama yapar.
value = Math.floor(3,9);
value = Math.floor(3,5);
value = Math.floor(3,1);


// Sqrt = Karekök Alma
value = Math.sqrt(16);
value = Math.sqrt(31);

// Abs =  Mutlak Değer
value = Math.abs(-10);
value = Math.abs(-123);

// Pow = Üs alma
value = Math.pow(4,2);
value = Math.pow(8,3);
value = Math.pow(2,9);

// Max ve Min Değer Getirme
value = Math.max(-99,1,50,70,90);
value = Math.min(-99,1,50,70,90);


// Random Modülü = 0 ile 1 Arasında Rastgele ondalık sayı üretir. 0 dahildir. 1 dahil değildir.  0 (inclusive),  and 1 (exclusive):
value = Math.random();
value = Math.random()*20 ;  // 0 ile 20 arasında  20dahil değil
value = Math.random()*20+1; // 1 ile 20 arasında  20de dahil
value = Math.floor(Math.random()*20+1);



// İlgili modüller hk detaylı dökümanlar için w3 Javascript random  number diye aratabiliriz.
console.log(value);