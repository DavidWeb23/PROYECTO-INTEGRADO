const telefono = document.getElementById("telefonoform2")
const nombre = document.getElementById("nombreform")
const apellidos = document.getElementById("apellidosform")
const correo = document.getElementById("correoform")
const password = document.getElementById("passwordform")
let incorrectoApellidos=true;
let incorrectoPassword=true;
let incorrectoTelefono=true;
let incorrectoCorreo=true;
let incorrectoNombre=true;


//Serán las diferentes validaciones de los campos del formulario a tiempo real por medio ONKEYUP

function validarName() {
    if (nombre.value.length < 2) {
        nombre.style.border = '2px solid red';
        nombre.style.background = '#ff99b2';
        document.getElementById("textoNombre").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño o esta vacio</span>";
       


        incorrectoNombre = true;


    } else {
        nombre.style.background = ' #3CBC8D';
        nombre.style.color = 'white';
        nombre.style.border = '2px solid green';
        document.getElementById("textoNombre").innerHTML = "";
        
        incorrectoNombre = false;
    }
}
function validarApellidos() {
    if (apellidos.value.length < 5) {
        apellidos.style.background = '#ff99b2';
        apellidos.style.border = '2px solid red';
        document.getElementById("textoApellidos").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El apellido introducido es pequeño o esta vacio</span>";

        incorrectoApellidos = true


    } else {
        apellidos.style.background = ' #3CBC8D';
        apellidos.style.color = 'white';
        apellidos.style.border = '2px solid green';
        document.getElementById("textoApellidos").innerHTML = "";
        
        
        incorrectoApellidos = false;
    }
}
function validarCorreoForm() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        correo.style.background = '#ff99b2';
        correo.style.border = '2px solid red';
        document.getElementById("textoCorreo").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El correo tiene un formato inadecuado</span>";

        incorrectoCorreo = true


    } else {
        correo.style.background = ' #3CBC8D';
        correo.style.color = 'white';
        correo.style.border = '2px solid green';
        document.getElementById("textoCorreo").innerHTML = "";
        
        incorrectoCorreo = false;
    }
}


function validarTelefonoForm() {
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
    if (!regexMOVIL.test(telefonoform2.value)) {

        telefono.style.background = '#ff99b2';
        telefono.style.border = '2px solid red';
        document.getElementById("textoTelefono").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El telefono tiene un formato inadecuado</span>";

        incorrectoTelefono = true;


    } else {

        telefono.style.background = ' #3CBC8D';
        telefono.style.color = 'white';
        telefono.style.border = '2px solid green';
        document.getElementById("textoTelefono").innerHTML = "";
        
        incorrectoTelefono = false;
    }
}

function validarPassword() {
    if (password.value.length < 5) {
        password.style.border = '2px solid red';
        password.style.background = '#ff99b2';
        
        document.getElementById("textoPassword").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El password introducido es pequeño o esta vacio</span>";


        incorrectoPassword = true;


    } else {

        password.style.background = ' #3CBC8D';
        password.style.color = 'white';
        password.style.border = '2px solid green';
        document.getElementById("textoPassword").innerHTML = "";
        incorrectoPassword = false;
    }
}
//Se comprueba que sea correcto para validar el envio
function comprobar(){


if (incorrectoApellidos == false && incorrectoNombre == false && incorrectoPassword == false && incorrectoTelefono == false && incorrectoCorreo == false){
    
    $('.botonenviar').prop('disabled', false)

}else{
    
    $('.botonenviar').prop('disabled', true)
}
}

//Sirve para crear la fecha e ingreso


n =  new Date();
//Año
y = n.getFullYear();
//Mes
m = n.getMonth() + 1;
//Día
d = n.getDate();

//Lo ordenas a gusto.
$('#dateingreso').attr("value", d + "/" + m + "/" + y);

