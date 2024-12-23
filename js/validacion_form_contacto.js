const formulario = document.getElementById("idFormularioContacto");
console.log(formulario);

formulario.addEventListener("submit", event => {
// Prevenir el envío del formulario
event.preventDefault();

    // Agregar evento "input" a todos los campos para que se borre el texto rojo cuando se escribe
    document.getElementById("nombre").addEventListener("input", () => {
        errorNombre.classList.add("d-none");
    });
    
    document.getElementById("emailContacto").addEventListener("input", () => {
        errorEmail.classList.add("d-none");
    });

    document.getElementById("telefono").addEventListener("input", () => {
        errorTelefono.classList.add("d-none");
    });
    
    document.getElementById("mensaje").addEventListener("input", () => {
        errorMensaje.classList.add("d-none");
    });

    const nombre = document.getElementById("nombre").value.trim();
    const emailContacto = document.getElementById("emailContacto").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const  motivo = document.getElementById("motivo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre"); 
    // <small class="text-danger d-none" id="errorNombre">El nombre es obligatorio.</small>
    const errorEmail = document.getElementById("errorEmail");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        //alert ("el nombre debe estar completo")
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailContacto)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    //validar tel
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono) || telefono.length < 8) {
        errorTelefono.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorTelefono.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Tu mensaje fue enviado correctamente. Te estaremos respondiendo lo antes posible. ¡Gracias!");

        // creariamos un objeto literal del tipo formularioContacto

        // Restablecer el formulario
        formulario.reset();

        const formularioContacto = {
            nombre: nombre,
            email: emailContacto,
            telefono: telefono,
            motivo: motivo,
            mensaje: mensaje
        };
        // llamariamos a un api del backend y le mandariamos la informacion en formato json{
         // y ese api guardaria la informacion en una base de datos y luego mandaria el mail
        // aca se puede hacer la accion del envio al api del backend
    }
});