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
// Recuperar carrito guardado en localStorage o inicializarlo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = carrito.reduce((acc, item) => acc + item.precio, 0);

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    let listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = ""; // Limpiar el contenido antes de actualizarlo

    // Recorrer cada producto en el carrito
    carrito.forEach((item, index) => {
        let li = document.createElement("li");

        // Agregar la imagen del producto
        let imagen = document.createElement("img");
        imagen.src = `IMAGENES/${item.nombre.replace(" ", "")}.jpg`; // Ruta generada a partir del nombre del producto
        imagen.alt = item.nombre;

        // Agregar el nombre y precio del producto
        let texto = document.createElement("span");
        texto.textContent = `${item.nombre} - $${item.precio}`;

        // Botón para eliminar producto del carrito
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            eliminarProducto(index);
        });

        // Agregar los elementos al carrito
        li.appendChild(imagen);
        li.appendChild(texto);
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    document.getElementById("total").textContent = total;
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar carrito en localStorage
}

// Agregar productos al carrito cuando se presiona "Agregar al carrito"
document.querySelectorAll(".agregar").forEach(boton => {
    boton.addEventListener("click", function() {
        let producto = this.parentElement;
        let nombre = producto.getAttribute("data-nombre");
        let precio = parseFloat(producto.getAttribute("data-precio"));

        // Agregar el producto al arreglo del carrito
        carrito.push({ nombre, precio });
        total += precio;

        actualizarCarrito();
    });
});

// Eliminar producto específico del carrito
function eliminarProducto(index) {
    total -= carrito[index].precio; // Restar el precio del producto eliminado
    carrito.splice(index, 1); // Eliminar el producto del arreglo
    actualizarCarrito();
}

// Vaciar completamente el carrito
document.getElementById("vaciarCarrito").addEventListener("click", function() {
    carrito = []; // Vaciar el arreglo
    total = 0; // Reiniciar el total
    actualizarCarrito();
});

// Inicializar el carrito al cargar la página
actualizarCarrito();
