
// Seleccionar elementos del DOM
const formRegistro = document.getElementById("formRegistro");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");
const errorDiv = document.getElementById("error");


// Validar campos en tiempo real
emailInput.addEventListener("input", validarEmail);
passwordInput.addEventListener("input", validarPassword);
passwordConfirmInput.addEventListener("input", validarPasswordConfirm);

// Validar email
function validarEmail() {
    const email = emailInput.value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
        mostrarError(emailInput, "Ingrese un correo válido.");
    } else {
        mostrarExito(emailInput);
    }
}

// Validar contraseña
function validarPassword() {
    const password = passwordInput.value.trim();
    if (password.length < 8) {
        mostrarError(passwordInput, "La contraseña debe tener al menos 8 caracteres.");
    } else {
        mostrarExito(passwordInput);
    }

    // Validar si las contraseñas coinciden
    validarPasswordConfirm();
}

// Validar confirmación de contraseña
function validarPasswordConfirm() {
    const password = passwordInput.value.trim();
    const passwordConfirm = passwordConfirmInput.value.trim();

    if (!passwordConfirm) {
        mostrarError(passwordConfirmInput, "Confirme su contraseña.");
    } else if (password !== passwordConfirm) {
        mostrarError(passwordConfirmInput, "Las contraseñas no coinciden.");
    } else {
        mostrarExito(passwordConfirmInput);
    }
}


// Mostrar error en un campo
function mostrarError(input, mensaje) {
    input.classList.add("error");
    input.classList.remove("success");
    errorDiv.textContent = mensaje;
}

// Mostrar éxito en un campo
function mostrarExito(input) {
    input.classList.add("success");
    input.classList.remove("error");
    errorDiv.textContent = "";
}


// btn registrate funcion
document.querySelector('.ingresar').onclick = function() {
    window.location.href = 'login.html';
};

// btn home funcion
document.querySelector('.btnHome').onclick = function() {
    window.location.href = '../../../../index.html';
};

//captura de datos 
formRegistro.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario y la recarga de la página
    validarEmail();
    validarPassword();
    validarPasswordConfirm();

    const errores = formRegistro.querySelectorAll(".error");
    if (errores.length > 0) {
        errorDiv.textContent = "Por favor, corrige los errores antes de continuar.";
    } else {
        // Captura de datos y muestra en consola
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();

        console.log("Email:", email);
        console.log("Contraseña:", password);
        console.log("Confirmación de Contraseña:", passwordConfirm);

        alert("Registro exitoso");
    }
});