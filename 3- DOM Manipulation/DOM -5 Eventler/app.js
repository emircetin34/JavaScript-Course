const filterInput  = document.getElementById("filter");

// Yukarıdaki inputta focus özelliği kullanma
filterInput.onfocus = function(){
    console.log("Merhaba");
} 
// Bir todo Arayın inputuna tıkladıgımız anda Merhaba diye console dönüş yapar.

// Focus Alma Özelliği Tercih Edilen Yöntem
filterInput.addEventListener("focus",function(e){
    console.log("Merhaba Dünya");
    console.log(e);  // event objeleri hk bilgileri getirir. Type vb.
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.placeholder);
});

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);
function submitForm(e){ 
    console.log("Submit Event");
    e.preventDefault();   //sayfa yenilenmesini engeller.
    // preventDefault aşağıda kullanılması daha güvenlidir.
}
// sayfa submitten sonra hemen yenilenir ve dönen ifadeyi kontrol edemeyiz.
// submitin defaul ayarları ile değişiklik yapmamız gerekir. Yaptığımız işlemi görütülemek için.


console.log(filterInput);