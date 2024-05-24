/********* Login **********/

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false;
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(password.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
    } 
    else {
        parrafo.innerHTML = "";
        alert("Usuario logueado con éxito");
        form.submit();
    }
})