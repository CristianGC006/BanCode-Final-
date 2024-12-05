//Boton de Preguntas frecuentes
document.querySelector('.botonPreguntas').onclick = function() {
    window,location.href="view/public/pages/preguntas.html";
};

document.querySelector('.botonInicio').onclick = function() {
    window,location.href='../index.html';
};

//Boton de Formulario de inicio de seccion
document.querySelector('.botonIngresar').onclick = function() {
    window,location.href="view/public/pages/login.html";
};
//Boton de Formulario de Registro
document.querySelector('.botonHazteCliente').onclick = function() {
    window,location.href="view/public/pages/registro.html";
};

document.querySelector('.botonHazteCliente2').onclick = function() {
    window,location.href="view/public/pages/registro.html";
};

//Boton de Formulario de Registro de Empresas
var botonEmpresas = document.querySelector('.botonEmpresas');
if (botonEmpresas) {
    botonEmpresas.onclick = function() {
        window.location.href = "view/public/pages/empresas.html";
    };
}
