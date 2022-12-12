let value;
const numbers = [20,30,40,50,10,5];
// const numbers2 = new Array(1,2,3,4,5,6,7) yeni bir array oluşturmak için bu şekilde bir yöntemde kullanılabilir.

const langs = ["Python","Java","C++"]
const a = ["Merhaba",22,null,undefined,3.14];
value = numbers.length;
value = numbers[0];
value = numbers[6];
value = numbers[numbers.length-1];

// indexdeki değeri değiştirme (numberdeki 30 u değiştirelim 31 yapalım)
numbers[1] = 31;
value = numbers;

// indexof  (dizi içindeki elemanın indexini bulma)
value = numbers.indexOf(31); //  1 olarak döndürür. 30 ile değiştirmiştik.

// Arrayin sonuna eleman ekleme
value = numbers.push(2000);
value = numbers

// Arrayin başına eleman ekleme
value = numbers.unshift(3000);
value=numbers;

// Arrayin Sonundan Değer Atma
value = numbers.pop()  // 2000 silinir.
value=numbers;

// Arrayin Başından Değer Atma
value = numbers.shift(); // 3000 silinir.
value=numbers;

// Arrayin indexlerine göre Atma 
value = numbers.splice(0,3) // 0.indexden 3.indexe kadar 3dahil değil.
value=numbers;

// Arayi Terse Çevirme
value = numbers.reverse();
value=numbers;

// Sort
value = numbers.sort(); // soldan birinci basamaklar göre küçükten büyüye göre sıralama yapar.
value=numbers;
// Peki dizi içerisindeki tüm basamak değerlerinide dikkate alarak nasıl yaparız ?

value = numbers.sort(function(x,y){
    // küçükten büyüğe
        return x - y;
    });
    

value = numbers.sort(function(x,y){
    // büyükten küçüğe
        return y - x;
    });
    
console.log(value);