function getPassword(){
    const chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let passwordLength = 16;
    let password = '';

    for(let i=0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random()*chars.length);
       

    password += chars.substring(randomNumber,randomNumber + 1)
    }
    document.getElementById('password').value = password;
    console.log(
       password
    )
}

let Namebtn = document.getElementById("btn1");
Namebtn.addEventListener('click',InputMsg);

    function InputMsg(){
        let Name =prompt("Enter your Name")
        Namebtn.textContent = 'Password for '+ Name;
    }