document.addEventListener("DOMContentLoaded", function() {
    // **Validación de formulario**
    document.getElementById("enviarBtn").addEventListener("click", function() {
        const email = document.getElementById("email").value; // Captura el valor del campo de correo
        const mensaje = document.getElementById("mensaje-error"); // Ubicación del mensaje de validación
        
        // Expresión regular para validar correos electrónicos
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!regexEmail.test(email)) {
            // Si el correo no cumple la estructura, muestra mensaje de error
            mensaje.textContent = "Correo inválido, intenta nuevamente.";
            mensaje.style.color = "red"; // Cambia el color del mensaje a rojo
        } else {
            // Si el correo es válido, muestra mensaje de éxito
            mensaje.textContent = "Correo enviado correctamente.";
            mensaje.style.color = "green"; // Cambia el color del mensaje a verde
        }
    });
});
