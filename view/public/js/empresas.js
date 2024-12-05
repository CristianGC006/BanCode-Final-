//Boton de Preguntas frecuentes
document.querySelector('.botonPreguntas').onclick = function() {
    window.location.href="preguntas.html";
};

//Boton de Formulario de inicio de seccion
document.querySelector('.botonIngresar').onclick = function() {
    window.location.href="login.html";
};
//Boton de Formulario de Registro
document.querySelector('.botonHazteCliente').onclick = function() {
    window.location.href="registro.html";
};

var botonHazteCliente2 = document.querySelector('.botonHazteCliente2');
if (botonHazteCliente2) {
    botonHazteCliente2.onclick = function() {
        window.location.href="../pages/registro.html";
    };
}

document.querySelector('.botonInicio').onclick = function() {
    window.location.href='../../../index.html';
};