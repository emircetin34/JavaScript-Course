// Event Capturing  OR Delegation
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click",run);
function run(e) {
    console.log("Naber");
};
// todo1-2-3-4 olmak üzerede 4 tane listemiz var
// bu listler card-body[1] üzerinde
// daha sonradan todo5 geldiğinde event tetikleyicilerinin çalışması için Delegation gibi dinamik işlemler yapılır.
