document.getElementById("enviarBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje-error");
    
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regexEmail.test(email)) {
        mensaje.textContent = "Correo inválido, intenta nuevamente.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Correo enviado correctamente.";
        mensaje.style.color = "green";
    }
});
