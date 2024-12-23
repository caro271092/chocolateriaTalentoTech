document.getElementById("comprarBtn").addEventListener("click", function () {
    // Mostrar alerta de confirmación
    if (confirm("¿Seguro queres finalizar el pedido?")) {
        // Vaciar contenido de la tabla
        document.getElementById("tablaCarrito").innerHTML = "";
        // Reiniciar el total a 0
        document.getElementById("totalCarrito").innerText = "0.00";
        alert("¡Gracias por tu compra!");
    }
});
