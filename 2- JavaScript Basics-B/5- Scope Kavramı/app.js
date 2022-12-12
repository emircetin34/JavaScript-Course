// Scope Kavrami


var value1 = 10;
let value2 = 20;
const value3 =30;


function Func(){
    var value1 = 40;
    let value2 = 50;
    const value3 =60;
    console.log(value1,value2,value3); //40 50 60 çıktısını verir.
}
Func();
console.log(value1,value2,value3);  //10 20 30 çıktısını verir.






var Xvalue1 = 10;
let Xvalue2 = 20;
const Xvalue3 =30;

if (true){
    var Xvalue1 = 40;
    let Xvalue2 = 50;
    const Xvalue3 =60;
    console.log(Xvalue1,Xvalue2,Xvalue3); //40 50 60 çıktısını verir.
}
console.log(Xvalue1,Xvalue2,Xvalue3);    //40 20 30 çıktısını verir.





// Obje ve dizlerde değerler mutable yani değişkendir.
// const ile tanımlansa dahi değiştirebilir.

OBJE ORNEGİ
const User = {
    name: 'Tayfun'
}
console.log(User)
User.name = 'Ahmet'
console.log(User)


DİZİ ÖRNEĞİ
const a = [1,2,3];
a.push(4);
console.log(a)




if (true){
    const  x = "hello";
}

console.log(x);


LET KULLANIMI
let armut = "Meyve";
armut = "Sebze";
console.log(armut); //HATA VERMEZ Sebze olarak yazar.



let karpuz = "Meyve";
let karpuz = "Sebze";
console.log(karpuz); //HATA VERİR. iki defa let kullanılmaz!



const elma = "MEYVE";
elma = "SEBZE";
console.log(elma);



