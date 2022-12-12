let value ;

const programmer = {
    name : "Mehmet Akif Ersoy",
    age  : 30,
    email : "m.akifersoy@mail.com",
    langs : ["Python" , "Java" , "Javascript"],
    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;
value = programmer["email"]; 
value = programmer.email;  // pratik yöntem
value = programmer.langs;
value = programmer.address.city;
programmer.work();  // obje içindeki fonksiyonu çağırdık.



//Arrayler - Obje
const programmers = [
    {name: "Ahmet Yılmaz", age:25 },
    {name: "Mehmet Yılmaz", age:30}
];

value = programmers[0];
console.log(value);



