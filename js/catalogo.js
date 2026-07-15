// Arreglo Bidimensional (Matriz de datos del catálogo) - Punto l
const inventarioLibros = [
    ["LIB-001", "Cien Años de Soledad", "Gabriel García Márquez", "Novela", "Disponible"],
    ["LIB-002", "1984", "George Orwell", "Ciencia Ficción", "Prestado"],
    ["LIB-003", "El Alquimista", "Paulo Coelho", "Filosofía", "Disponible"],
    ["LIB-004", "Don Quijote de la Mancha", "Miguel de Cervantes", "Clásico", "Disponible"]
];

document.addEventListener("DOMContentLoaded", function() {
    renderizarCatalogo();

    // Evento para cerrar la ventana flotante
    const modal = document.getElementById('book-modal');
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});

// Función para inyectar las tarjetas en el DOM usando bucles (Punto m, n)
function renderizarCatalogo() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;
    grid.innerHTML = "";

    // Bucle FOR para recorrer el arreglo bidimensional (Punto m)
    for (let i = 0; i < inventarioLibros.length; i++) {
        const codigo = inventarioLibros[i][0];
        const titulo = inventarioLibros[i][1];
        const autor = inventarioLibros[i][2];
        const estado = inventarioLibros[i][4];

        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-cover-placeholder">📖</div>
            <h4>${titulo}</h4>
            <p>Autor: ${autor}</p>
            <span class="status-badge ${estado.toLowerCase()}">${estado}</span>
            <button class="btn-secondary" onclick="verDetalles('${codigo}')">Ver Detalles</button>
        `;
        grid.appendChild(card);
    }
}

// Función con Estructura de Decisión y Ventana Flotante (Punto m, o)
function verDetalles(codigoLibro) {
    const modal = document.getElementById('book-modal');
    const modalBody = document.getElementById('modal-body-content');
    
    let libroEncontrado = null;

    for (let i = 0; i < inventarioLibros.length; i++) {
        if (inventarioLibros[i][0] === codigoLibro) {
            libroEncontrado = inventarioLibros[i];
            break;
        }
    }

    if (libroEncontrado) {
        // Estructura de decisión Switch-Case (Punto m)
        let mensajeEstado = "";
        switch(libroEncontrado[4]) {
            case "Disponible":
                mensajeEstado = "🟢 Este ejemplar se encuentra en salas y listo para préstamo.";
                break;
            case "Prestado":
                mensajeEstado = "🔴 Préstamo activo. Puedes reservar para la siguiente fecha.";
                break;
            default:
                mensajeEstado = "🟡 Estado en revisión técnica.";
        }

        modalBody.innerHTML = `
            <h3>${libroEncontrado[1]}</h3>
            <p><strong>Código Interno:</strong> ${libroEncontrado[0]}</p>
            <p><strong>Autor:</strong> ${libroEncontrado[2]}</p>
            <p><strong>Género Literario:</strong> ${libroEncontrado[3]}</p>
            <p class="modal-status">${mensajeEstado}</p>
            <div class="modal-actions">
                <button onclick="procesarReserva('${libroEncontrado[0]}', '${libroEncontrado[4]}')" class="btn-primary">Solicitar Acción</button>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

// Métodos Obligatorios de Entrada/Salida: Confirm y Alert (Punto m)
function procesarReserva(codigo, estado) {
    if (estado === "Prestado") {
        alert("Lo sentimos. No puedes solicitar un libro que no se encuentra disponible actualmente."); // Entrada/Salida Alert
    } else {
        const confirmar = confirm(`¿Estás seguro de que deseas reservar el libro con código ${codigo}?`); // Entrada/Salida Confirm
        if (confirmar) {
            alert("¡Reserva procesada con éxito! Acércate al mostrador de la biblioteca con tu carné institucional.");
            document.getElementById('book-modal').style.display = 'none';
        }
    }
}

// Método Obligatorio Prompt (Punto m)
function buscarLibroPrompt() {
    const codigoBuscado = prompt("Ingrese el código exacto del libro que busca (Ejemplo: LIB-001):"); // Entrada/Salida Prompt
    
    if (codigoBuscado === null || codigoBuscado.trim() === "") {
        return; 
    }

    let encontrado = false;
    for (let i = 0; i < inventarioLibros.length; i++) {
        if (inventarioLibros[i][0].toUpperCase() === codigoBuscado.toUpperCase().trim()) {
            verDetalles(inventarioLibros[i][0]);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert(`No se encontró ningún libro asociado al código "${codigoBuscado}".`);
    }
}