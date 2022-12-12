// While Döngüleri
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}



let x = 10;
while (x > 0){
    console.log(x);
    x--;
}



let y = 10;
while (y > 0){
    console.log(y);
    y-=2;
}


//Break Continue
let x1 = 0;
while (x1 < 10){
    console.log(x1);
    if (x1 == 5){break;}
    x1++
}


let x2 = 0;
while (x2 < 10){
    if (x2 == 3 || x2 ==5){
        x2++; // eğer burada x2'yi artırmasaydık sonsuz döngüye girerdi. x2'nin değeri 3te kalırdı.
        continue;
    }
    console.log(x2);
    x2++;
}




// DO - While Döngüleri
let x3 = 0;
do {
    console.log(x3);
    x3++;
}while(x3<10);






// While ve For 
// While
const langs = ["Python","Javascript","Java"];
let index = 0;

while(index<langs.length){
    console.log(langs[index]);
    index++;
    
}





// FOR
for (let index2 = 0; index2 <langs.length ; index2++){
    console.log(langs[index2]);
}





//For Each (Python Range Fonk Benzer)
langs.forEach(function(lang){
    console.log(lang);
})


langs.forEach(function(lang,x){
    console.log(lang,x);
})





// Map Fonksiyonu
const users = [
    {name : "Mustafa",age:25},
    {name : "Ahmet",age:40},
    {name : "Efe",age:12}
];

// Biz users den sadece isimleri çekmek istiyorsak ;
const names = users.map(function(user){
    return user.name;
});
console.log(names);

// Biz users den sadece yaşları çekmek istiyorsak ;
const ages = users.map(function(user){
    return user.age;
});
console.log(ages);





// For Key
const user = {
    name : "Mustafa",
    age : 25
};

for (let key in user){
    console.log(key,user[key]);  // name Mustafa age 25
    console.log(user[key]);      // Mustafa 25
}
