// ARREGLO DE PREGUNTAS
var preguntas = [
    {
        texto: "¿Cuál es el género literario que se caracteriza por expresar sentimientos y emociones a través del verso?",
        opciones: ["Género épico", "Género lírico", "Género dramático", "Género narrativo"],
        correcta: 1
    },
    {
        texto: "La novela, el cuento y la fábula pertenecen al género:",
        opciones: ["Lírico", "Dramático", "Narrativo", "Didáctico"],
        correcta: 2
    },
    {
        texto: "¿Qué género literario está destinado a ser representado en un escenario?",
        opciones: ["Épico", "Lírico", "Narrativo", "Dramático"],
        correcta: 3
    },
    {
        texto: "La 'Ilíada' y la 'Odisea' de Homero son ejemplos del género:",
        opciones: ["Lírico", "Épico", "Dramático", "Ensayístico"],
        correcta: 1
    },
    {
        texto: "¿Cuál de las siguientes obras pertenece al género dramático?",
        opciones: ["Cien años de soledad", "Romeo y Julieta", "Don Quijote de la Mancha", "Las rimas de Bécquer"],
        correcta: 1
    }
];

var puntaje = 0;
var indice = 0;
var respondido = false;

// FUNCIONES PREGUNTA
function cargarPregunta() {
    if (indice >= preguntas.length) {
        mostrarResultado();
        return;
    }

    respondido = false;
    var preguntaActual = preguntas[indice];
    var contenedor = document.getElementById("quiz-container");
    contenedor.innerHTML = "";

    // Progreso
    var progreso = document.createElement("div");
    progreso.id = "quiz-progress";
    progreso.innerHTML = "Pregunta " + (indice + 1) + " de " + preguntas.length;
    contenedor.appendChild(progreso);

    // Pregunta
    var textoPregunta = document.createElement("div");
    textoPregunta.className = "quiz-question";
    textoPregunta.innerHTML = preguntaActual.texto;
    contenedor.appendChild(textoPregunta);

    // Opciones
    var opcionesDiv = document.createElement("div");
    opcionesDiv.className = "quiz-options";

    for (var i = 0; i < preguntaActual.opciones.length; i++) {
        var btn = document.createElement("button");
        btn.className = "opcion-btn";
        btn.innerHTML = preguntaActual.opciones[i];
        btn.dataset.indice = i;
        btn.onclick = function () {
            var indiceSeleccionado = parseInt(this.dataset.indice);
            verificarRespuesta(indiceSeleccionado, this);
        };

        opcionesDiv.appendChild(btn);
    }
    contenedor.appendChild(opcionesDiv);

    // Feedback
    var feedback = document.createElement("div");
    feedback.id = "quiz-feedback";
    feedback.className = "quiz-feedback";
    contenedor.appendChild(feedback);
}

// VERIFICAR RESPUESTA
function verificarRespuesta(seleccion, botonSeleccionado) {
    if (respondido) return;
    respondido = true;

    var correcta = preguntas[indice].correcta;
    var feedback = document.getElementById("quiz-feedback");
    var botones = document.querySelectorAll(".opcion-btn");

    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }

    if (seleccion === correcta) {
        puntaje = puntaje + 4;
        
        botonSeleccionado.style.backgroundColor = "green";
        botonSeleccionado.style.color = "white";
        botonSeleccionado.style.borderColor = "green";
        
        feedback.innerHTML = "¡Correcto! +4 puntos";
        feedback.style.color = "green";
    } else {

        botonSeleccionado.style.backgroundColor = "red";
        botonSeleccionado.style.color = "white";
        botonSeleccionado.style.borderColor = "red";
        
        botones[correcta].style.backgroundColor = "green";
        botones[correcta].style.color = "white";
        botones[correcta].style.borderColor = "green";
        
        feedback.innerHTML = "Incorrecto. La correcta era: " + preguntas[indice].opciones[correcta];
        feedback.style.color = "#dc3545";
    }

    setTimeout(function() {
        indice = indice + 1;
        cargarPregunta();
    }, 4000);
}

// MOSTRAR RESULTADO FINAL
function mostrarResultado() {
    var contenedor = document.getElementById("quiz-container");
    contenedor.innerHTML = "";

    var resultadoDiv = document.createElement("div");
    resultadoDiv.className = "quiz-result";

    // Título
    var titulo = document.createElement("h3");
    titulo.innerHTML = "Resultado Final";
    resultadoDiv.appendChild(titulo);

    var score = document.createElement("div");
    score.id = "score-final";
    score.innerHTML = puntaje + " / 20";
    resultadoDiv.appendChild(score);

    var mensaje = "";
    var porcentaje = puntaje / 20;

    if (porcentaje === 1) {
        mensaje = "¡Perfecto! Dominas los géneros literarios.";
    } else if (porcentaje >= 0.8) {
        mensaje = "¡Muy bien! Tienes excelentes conocimientos literarios.";
    } else if (porcentaje >= 0.5) {
        mensaje = "Buen intento. Sigue estudiando los géneros.";
    } else {
        mensaje = "Necesitas repasar un poco más. ¡No te rindas!";
    }

    var textoMensaje = document.createElement("p");
    textoMensaje.id = "message-final";
    textoMensaje.innerHTML = mensaje;
    resultadoDiv.appendChild(textoMensaje);

    var btnRegresar = document.createElement("a");
    btnRegresar.href = "quizz-menu.html";
    btnRegresar.className = "btn";
    btnRegresar.innerHTML = "Regresar al Menú";
    btnRegresar.style.display = "inline-block";
    btnRegresar.style.marginTop = "2rem";
    resultadoDiv.appendChild(btnRegresar);

    contenedor.appendChild(resultadoDiv);

    console.log("Quiz finalizado. Puntaje:", puntaje);
}

// INICIAR
cargarPregunta();

// CONSOLA
console.log("Quiz de Géneros Literarios");
console.log("Total preguntas:", preguntas.length);
console.log("Puntaje máximo: 20 puntos");