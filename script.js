let loginButton = document.getElementById('loginButton');
let singUpButton = document.getElementById('singUpButton');


let closeId2 = document.getElementById('closeId');

closeId2.addEventListener('click',()=>{
    
})

// Login Page
let mustID;
let mustPass;
let loginId = document.getElementById('loginId');

// Sing up
let exampleInputEmail1;
let firstPassword;
let secondPassword;
let singUpIdD = document.getElementById('singUpIdD');
let secondPassClass = document.getElementsByClassName('secondPassClass')[0];

let userName = document.getElementById('userName')

secondPassClass.addEventListener('input', () => {
    exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;
    firstPassword = document.getElementById('firstPassword').value;
    secondPassword = document.getElementById('secondPassword').value;

    if (firstPassword == secondPassword) {
        console.log('successfully');
    }
    else {
        console.log('error');
    }
})

singUpIdD.addEventListener('click', () => {
    exampleInputEmail1 = document.getElementById('exampleInputEmail1').value
    firstPassword = document.getElementById('firstPassword').value
    secondPassword = document.getElementById('secondPassword').value

    alert(`id = ${exampleInputEmail1}  .  pass = ${secondPassword}`);
})

loginId.addEventListener('click', () => {
    mustID = document.getElementById('mustID').value;
    mustPass = document.getElementById('mustPass').value;

    alert(`id = ${mustID}  .  pass = ${mustPass}`);

    if (exampleInputEmail1 == mustID && secondPassword == mustPass) {
        alert('successfully');
    }
    else {
        alert('error');
    }

    setInterval(()=>{
        userName.innerText =  mustID;
    },100)
})

let closeId = document.getElementById('closeId')
closeId.addEventListener('click',()=>{

})
