
// Función para quizzes NO disponibles
function noDisponible(tipo) {
    var tarjeta = document.getElementById("card-" + tipo);
    tarjeta.style.borderColor = "red";
    tarjeta.style.backgroundColor = "#FFC9D5";
    
    // Mostrar mensaje
    var mensaje = document.getElementById("msg-" + tipo);
    mensaje.innerHTML = "No disponible por mientras";
    mensaje.className = "mensaje error";
    mensaje.style.display = "block";
    
    // Ocultar mensaje después de 2 segundos
    setTimeout(function() {
        mensaje.style.display = "none";
        tarjeta.style.borderColor = "";
        tarjeta.style.backgroundColor = "";
    }, 4000);
    
    // Mensaje en consola
    console.log("Quiz de " + tipo + " no disponible");
}

console.log("Quizzes disponibles: Autores y Libros");
console.log("Quizzes no disponibles: Géneros y Personajes");