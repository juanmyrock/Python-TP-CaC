/********* Registro **********/

const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const pais = document.getElementById("pais");
const tipoDocumento = document.getElementById("tipoDocumento");
const documentoIdentidad = document.getElementById("documentoIdentidad");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");
const noSoyRobot = document.getElementById("checkbox");
const formRegistro = document.getElementById("formRegistro");
const parrafo = document.getElementById("warnings");

formRegistro.addEventListener("submit", e => {
    e.preventDefault();
    let entrar = false;
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validar Nombres
    if (nombres.value.trim() === "") {
        warnings += `El campo de nombres es requerido<br>`;
        entrar = true;
    }

    // Validar Apellidos
    if (apellidos.value.trim() === "") {
        warnings += `El campo de apellidos es requerido<br>`;
        entrar = true;
    }

    // Validar País
    if (pais.value.trim() === "") {
        warnings += `El campo de país es requerido<br>`;
        entrar = true;
    }

    // Validar Tipo de Documento
    if (tipoDocumento.value === "") {
        warnings += `El campo de tipo de documento es requerido<br>`;
        entrar = true;
    }

    // Validar Contraseña
    if (password.value.length < 8) {
        warnings += `La contraseña debe tener al menos 8 caracteres<br>`;
        entrar = true;
    }

    // Validar Confirmar Contraseña
    if (password.value !== confirmarPassword.value) {
        warnings += `Las contraseñas no coinciden<br>`;
        entrar = true;
    }

    // Validar Documento de Identidad
    if (documentoIdentidad.files.length === 0) {
        warnings += `Debe subir un documento de identidad<br>`;
        entrar = true;
    }

    // Validar Email
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido<br>`;
        entrar = true;
    }

    // Validar Checkbox
    if (!noSoyRobot.checked) {
        warnings += `Debe confirmar que no es un robot<br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } 
    else {
        parrafo.innerHTML = "";
        alert("Usuario creado con éxito");
        formRegistro.submit();
    }
});
