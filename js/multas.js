// Variable global para almacenar descuento
let descuentoAplicado = 0;

// Método de entrada: 
function ingresarDescuento() {
    let codigo = prompt("Ingrese su código de exoneración o descuento (Ej: UTP2026):");
    
    // Estructuras de control y operadores
    if (codigo === "UTP2026" || codigo === "utp2026") {
        descuentoAplicado = 0.5; // 50% de descuento
        alert("¡Código válido! Se aplicará un 50% de descuento en el cálculo final.");
    } else if (codigo !== null && codigo !== "") {
        descuentoAplicado = 0;
        alert("Código inválido o expirado.");
    }
}

// Manipulación del DOM y cálculos 
function calcularMulta() {
    const tipo = document.getElementById('tipoLibro').value;
    const diasInput = document.getElementById('diasRetraso').value;
    
    // Validar entrada
    if (diasInput === "" || diasInput <= 0) {
        alert("Por favor, ingrese un número válido de días de retraso.");
        return;
    }

    let dias = parseInt(diasInput);
    let tarifaDiaria = 0;

    // Estructura de control: switch o if/else
    switch (tipo) {
        case "general":
            tarifaDiaria = 2.00;
            break;
        case "reserva":
            tarifaDiaria = 5.00;
            break;
        case "multimedia":
            tarifaDiaria = 10.00;
            break;
    }

    let subtotal = dias * tarifaDiaria;
    let totalPagar = subtotal - (subtotal * descuentoAplicado);

    // Inyectar el resultado en el HTML modificando el DOM
    const resultadoCaja = document.getElementById('resultadoMulta');
    const montoFinalSpan = document.getElementById('montoFinal');

    // Formatear a 2 decimales
    montoFinalSpan.textContent = "S/. " + totalPagar.toFixed(2);
    
    // Hacer visible la caja cambiando su estilo desde JS
    resultadoCaja.style.display = "block";
    
    // Mensaje en consola (Diagnóstico en el navegador - Semana 11)
    console.log(`Cálculo realizado: Días=${dias}, Tarifa=${tarifaDiaria}, Descuento=${descuentoAplicado * 100}%, Total=${totalPagar}`);
}