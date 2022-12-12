const namex = "Mümin Emir Çetin";
const department = "Bilişim";
const salary = 5000;

// const a = "İsim: " + namex + "\n" + "Departman: " + department + "\n" + "Salary: " + salary

// yukarıdakinin farklı yazılış yöntemi
// const a = `İsim:${namex}\nDepartman:${department}\nSalary:${salary}`;


// eski yöntem inner html
// const html = 
//     "<ul>" +
//         "<li>" + namex + "</li>" +
//         "<li>" + department + "</li>" +
//         "<li>" + salary + "</li>" +
//     "</ul>";
// document.body.innerHTML = html;

function a(){  // AŞAĞIDA BU FONKUDA YAZABİLİRİZ.
    return "MERHABA";
}


const html = `
<ul>
    <li>${namex}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${10 / 4}</li>
    <li>${a()}</li>
</ul>
`;
document.body.innerHTML = html;

console.log(a);