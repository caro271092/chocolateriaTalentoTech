document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const botonesAgregar = document.querySelectorAll(".btn-agregar"); //se podría usar getElementByClass
    
    botonesAgregar.forEach(boton => {
        // se queda escuchando si alguien hace click en ese boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");

            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
            // Agregar el producto al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`El producto ${nombre} fue agregado al carrito.`);
            console.log(carrito);
        });
    });
});