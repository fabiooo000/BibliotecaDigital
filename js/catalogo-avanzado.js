// Arreglo Bidimensional de Inventario [ISBN, Titulo, Año]
let inventario = [
    ["978-0451524935", "1984", 1949],
    ["978-0307474728", "Cien años de soledad", 1967],
    ["978-8497592858", "El origen de las especies", 1859],
    ["978-1285740621", "Calculus", 2015],
    ["978-8424116019", "Don Quijote de la Mancha", 1605],
    ["978-8437604947", "Pedro Páramo", 1955],
    ["978-8420412146", "La ciudad y los perros", 1963],
    ["978-8437600864", "Rayuela", 1963],
    ["978-1400034932", "El amor en los tiempos del cólera", 1985],
    ["978-8408059660", "La sombra del viento", 2001],
    ["978-0140449136", "Crimen y castigo", 1866],
    ["978-0743273565", "El gran Gatsby", 1925],
    ["978-0199535569", "Orgullo y prejuicio", 1813],
    ["978-0141439518", "Moby Dick", 1851],
    ["978-0140449266", "Los miserables", 1862],
    ["978-0140441048", "Madame Bovary", 1857],
    ["978-0140444179", "Guerra y paz", 1869],
    ["978-0143035008", "Anna Karenina", 1877],
    ["978-0374528379", "Los hermanos Karamazov", 1880],
    ["978-0141439570", "Frankenstein", 1818],
    ["978-0141439846", "Drácula", 1897],
    ["978-0141439594", "Jane Eyre", 1847],
    ["978-0141439556", "Cumbres borrascosas", 1847],
    ["978-0141321066", "El retrato de Dorian Gray", 1890],
    ["978-0141439730", "La isla del tesoro", 1883],
    ["978-0142437179", "Las aventuras de Huckleberry Finn", 1884],
    ["978-0141441672", "La máquina del tiempo", 1895],
    ["978-0141441030", "La guerra de los mundos", 1898],
    ["978-0060850524", "Un mundo feliz", 1932],
    ["978-0451526342", "Rebelión en la granja", 1945],
    ["978-0547928227", "El hobbit", 1937],
    ["978-0544003415", "El señor de los anillos", 1954],
    ["978-0061120084", "Matar a un ruiseñor", 1960],
    ["978-1451673319", "Fahrenheit 451", 1953],
    ["978-0399501487", "El señor de las moscas", 1954],
    ["978-0679723189", "Lolita", 1955],
    ["978-0140283297", "En el camino", 1957],
    ["978-0316769488", "El guardián entre el centeno", 1951],
    ["978-0684801223", "Ulises", 1922],
    ["978-8420654003", "La Odisea", 1990],
    ["978-8420636047", "Divina Comedia", 1995],
    ["978-8420652030", "Hamlet", 1992],
    ["978-0140439144", "El corazón de las tinieblas", 1899],
    ["978-0141321059", "Dr. Jekyll y Mr. Hyde", 1886],
    ["978-0141441276", "La llamada de lo salvaje", 1903],
    ["978-0140439021", "Peter Pan", 1911],
    ["978-0143039433", "El viento en los sauces", 1908],
    ["978-8423348572", "Ficciones", 1944],
    ["978-8437600871", "El Aleph", 1949],
    ["978-0062316097", "Sapiens", 2011]
];

// Variables globales para controlar el ordenamiento
let ordenActual = {
    columna: 'anio', // 'codigo', 'titulo', 'anio'
    ascendente: true // true = ascendente, false = descendente
};

// Función principal: Ordenar por cualquier criterio
function ordenarPor(columna) {
    // Si ya está ordenando por esta columna, invertir el orden
    if (ordenActual.columna === columna) {
        ordenActual.ascendente = !ordenActual.ascendente;
    } else {
        ordenActual.columna = columna;
        ordenActual.ascendente = true;
    }
    
    aplicarOrdenamientoBurbuja();
    actualizarIndicadores();
}

// Función: Invertir el orden actual
function invertirOrden() {
    ordenActual.ascendente = !ordenActual.ascendente;
    aplicarOrdenamientoBurbuja();
    actualizarIndicadores();
}

// Función: Aplicar ordenamiento burbuja según el criterio actual
function aplicarOrdenamientoBurbuja() {
    let n = inventario.length;
    let swapped;
    let i = 0;
    
    // Determinar qué índice comparar según la columna
    let indiceComparacion;
    switch(ordenActual.columna) {
        case 'codigo':
            indiceComparacion = 0;
            break;
        case 'titulo':
            indiceComparacion = 1;
            break;
        case 'anio':
            indiceComparacion = 2;
            break;
    }
    
    // Ordenamiento Burbuja con WHILE
    while(i < n - 1) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            let valor1 = inventario[j][indiceComparacion];
            let valor2 = inventario[j + 1][indiceComparacion];
            
            // Comparación según el tipo de dato
            let debeIntercambiar = false;
            
            if (typeof valor1 === 'string') {
                // Comparación de strings (código o título)
                if (ordenActual.ascendente) {
                    debeIntercambiar = valor1 > valor2;
                } else {
                    debeIntercambiar = valor1 < valor2;
                }
            } else {
                // Comparación de números (año)
                if (ordenActual.ascendente) {
                    debeIntercambiar = valor1 > valor2;
                } else {
                    debeIntercambiar = valor1 < valor2;
                }
            }
            
            if (debeIntercambiar) {
                let temp = inventario[j];
                inventario[j] = inventario[j + 1];
                inventario[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
        i++;
    }
    
    renderizarTabla();
    console.log(`Ordenado por ${ordenActual.columna} (${ordenActual.ascendente ? 'ascendente' : 'descendente'})`);
}

// Función: Actualizar indicadores visuales
function actualizarIndicadores() {
    // Limpiar todos los indicadores
    document.getElementById('ind-codigo').textContent = '';
    document.getElementById('ind-titulo').textContent = '';
    document.getElementById('ind-anio').textContent = '';
    
    // Mostrar indicador en la columna activa
    let indicador = ordenActual.ascendente ? '▲' : '▼';
    document.getElementById(`ind-${ordenActual.columna}`).textContent = indicador;
}

// Función: Renderizar con forEach
function renderizarTabla() {
    const tbody = document.querySelector('#tabla-inventario tbody');
    if(!tbody) return;
    tbody.innerHTML = "";
    
    inventario.forEach(fila => {
        let tr = document.createElement('tr');
        fila.forEach(dato => {
            let td = document.createElement('td');
            td.textContent = dato;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarTabla();
    actualizarIndicadores();
});