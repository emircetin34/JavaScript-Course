
// Session Storage Key -Value 

// Butonları Seçmek
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputları Seçmek
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem); //add için addItem fonk çalışacak
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value); //setItemdeki parametreler key-valuedir. 
}
// Aynı isimde yeni bir key eklersek eski değerleri silinir. Yeni eklediğimiz değerler döner.
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear(); //Tüm verilerimizi siler.

}