// Windows Objesini Çağırma
console.log(window);
//Consoleden kontrol sağladımızda büyük bir obje oldugunu görüntülemekteyiz. 

// Alert
alert("MERHABA !");



// Confirm
const cevap = confirm("Emin misiniz ?");
console.log(cevap);
// Gelen alertte Tamam=True , İptal=False olarak görür.


const soru = prompt("2 + 2 = ?");
if (soru == "4") {
    console.log("Doğru");
}
else {
    console.log("Yanlış");
}



let value;
value = window;
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
console.log(value);



// Sayfa Yenileme
if (confirm ("Sayfa yenilensin mi ?")){
    window.location.reload();
}
else{
    console.log("Sayfa yenilenmedi...");
}


value = window.outerHeight; //Tarayıcının Yükseklik bilgisini verir.
value = window.outerWidth;  //Tarayıcının Genişlik bilgisini verir.

value = window.innerHeight; // Consolde kod girilen yerin yükseklik bilgisini verir.
value = window.innerWidth;  // Consolde kod girilen yerin genişlik bilgisini verir.

value = window.scrollX;
value = window.scrollY;
console.log(value);



