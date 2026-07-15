
const salas = [
    { id: 0, nombre: "Sala A", disponible: true },
    { id: 1, nombre: "Sala B", disponible: false }, // Esta sala simula estar ocupada
    { id: 2, nombre: "Cubículo C", disponible: true }
];

// Manipulación del DOM y evento onchange 
function verificarDisponibilidad() {
    const select = document.getElementById('salaSelect');
    const estadoSpan = document.getElementById('estadoSala');
    const valorSeleccionado = select.value;

    if (valorSeleccionado === "") return;

    const salaObj = salas[valorSeleccionado];

    if (salaObj.disponible) {
        estadoSpan.textContent = "Disponible";
        estadoSpan.className = "status-badge status-disponible";
    } else {
        estadoSpan.textContent = "Ocupada temporalmente";
        estadoSpan.className = "status-badge status-ocupado";
    }
}

// Funciones para la Ventana Flotante / Modal 
function abrirModal() {
    const select = document.getElementById('salaSelect');
    const fecha = document.getElementById('fechaReserva').value;

    // Estructura de control
    if (select.value === "" || fecha === "") {
        alert("Por favor, seleccione una sala y una fecha válida."); // Método de salida
        return;
    }

    if (!salas[select.value].disponible) {
        alert("Lo sentimos, la sala seleccionada está ocupada.");
        return;
    }

    document.getElementById('miModal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

function confirmarReserva() {
    cerrarModal();
    // Uso de confirmación nativa del navegador
    let respuesta = confirm("¿Desea imprimir el ticket de su reserva?");
    if (respuesta) {
        alert("Generando ticket... Reserva completada con éxito.");
    } else {
        alert("Reserva completada con éxito. Recuerde su fecha.");
    }
    // Limpiar formulario manipulando el DOM
    document.getElementById('salaSelect').value = "";
    document.getElementById('fechaReserva').value = "";
    document.getElementById('estadoSala').textContent = "Seleccione una sala";
}