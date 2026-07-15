/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


//document.getElementById('btnMenu').addEventListener('click', () => {
//    document.getElementById('navMenu').classList.toggle('active');
//});

const librosActuales = [
    { titulo: "Clean Code", autor: "Robert C. Martin", progreso: 75 },
    { titulo: "1984", autor: "George Orwell", progreso: 90 },
    { titulo: "Sapiens", autor: "Yuval Noah Harari", progreso: 30 },
    { titulo: "El Principito", autor: "A. Saint-Exupéry", progreso: 100 },
    { titulo: "Cien Años de Soledad", autor: "G. García Márquez", progreso: 45 }
];

const actividades = [
    { accion: "Reservaste 'El Señor de los Anillos'", fecha: "Hace 2 horas" },
    { accion: "Dejaste reseña en 'Dune'", fecha: "Ayer" },
    { accion: "Devolviste 'Fundamentos de DB'", fecha: "Hace 3 días" },
    { accion: "Actualizaste tu foto de perfil", fecha: "Hace 1 semana" },
    { accion: "Te uniste al club de lectura", fecha: "Hace 2 semanas" }
];

function renderizarListas() {
    const contLibros = document.getElementById('listaLecturaActual');
    let htmlLibros = "";
    for (let i = 0; i < librosActuales.length; i++) {
        let l = librosActuales[i];
        htmlLibros += `<div class="activity-item"><span>${l.titulo} <small style="color:#888;">- ${l.autor}</small></span><span style="color: var(--secondary); font-weight:bold;">${l.progreso}%</span></div>`;
    }
    contLibros.innerHTML = htmlLibros;

    const contActividad = document.getElementById('listaActividadReciente');
    let htmlAct = "";
    for (let i = 0; i < actividades.length; i++) {
        let a = actividades[i];
        htmlAct += `<div class="activity-item"><span>${a.accion}</span><span>${a.fecha}</span></div>`;
    }
    contActividad.innerHTML = htmlAct;
}
renderizarListas();

function abrirModalEditar() {
    document.getElementById('inputNombre').value = document.getElementById('usernameDisplay').innerText;
    document.getElementById('inputCorreo').value = document.getElementById('emailDisplay').innerText;
    document.getElementById('inputDesc').value = document.getElementById('descDisplay').innerText;
    document.getElementById('modalEditar').classList.add('active');
}
function cerrarModal() {
    document.getElementById('modalEditar').classList.remove('active');
}

function guardarDatos() {
    const nombre = document.getElementById('inputNombre').value;
    const correo = document.getElementById('inputCorreo').value;
    const edad = document.getElementById('inputEdad').value;
    const desc = document.getElementById('inputDesc').value;

    document.getElementById('usernameDisplay').innerText = nombre;
    document.getElementById('emailDisplay').innerText = correo;
    document.getElementById('descDisplay').innerText = `${desc} (Edad: ${edad})`;
    
    console.log(`[Consola SEM 11] Datos actualizados: ${nombre}, ${edad} años.`);
    alert("Perfil actualizado correctamente.");
    cerrarModal();
}

function cerrarCuenta() {
    const confirmar = confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmar) {
        alert("Tu cuenta ha sido cerrada. Redirigiendo al inicio...");
        window.location.href = "index.html";
    }
}