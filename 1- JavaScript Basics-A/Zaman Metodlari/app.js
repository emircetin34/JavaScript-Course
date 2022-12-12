// const now = new Date(); // şuanki zamanı gösterir.
// console.log(now);


let value;

const date1 = new Date("9-19-1993 06:15:00");
const date2 = new Date("September 19 1993");
const date3 = new Date("9/19/1993");

value = date1;
value = date2;
value = date3;

value = date1.getMonth();
value = date1.getDay(); //pazardan başlar. pazarı 0 olarak kabul eder. 0-6
value = date1.getDate();
value = date1.getFullYear();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getMilliseconds();



// Yukarıdaki Tarih Değerlerini Değiştirme
date1.setMonth(1);  // DİKKAT! Ocak Ayı sıfır olarak kabul edilir. Dolayısıyla 1 yazarsak Şubat gelir.
date1.setDate(15);
date1.setFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);

value = date1;
console.log(value);