document.addEventListener('DOMContentLoaded', () => {

    // 1. HTML DEL HEADER
    const headerHTML = `
        <header>
            <div class="container">
                <div class="logo">
                    <img src="images/logo-biblioteca.png" alt="Logo Biblioteca" width="150">
                    <h1>Biblioteca Digital</h1>
                </div>
                
                <button class="hamburger" id="btnMenu" aria-label="Menú">☰</button>
                
                <nav id="navMenu">
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="catalogo.html">Catálogo</a></li>
                        <li class="dropdown">
                            <a href="#">Explorar</a>
                            <div class="dropdown-menu">
                                <a href="autores.html">Autores</a>
                                <a href="autor-detalle.html">Detalle de Autor</a>
                                <a href="generos.html">Géneros</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#">Recomendados</a>
                            <div class="dropdown-menu">
                                <a href="libros-recomendados.html">Por Autor</a>
                                <a href="lectores-criticos.html">Lectores</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#">Servicios</a>
                            <div class="dropdown-menu">
                                <a href="historial-prestamos.html">Historial Préstamos</a>
                                <a href="reservas-salas.html">Reserva de Salas</a>
                                <a href="calculadora-multas.html">Calculadora Multas</a>
                            </div>
                        </li>
                        <li><a href="Quizz-Menu.html">Quizzes</a></li>
                        <li class="dropdown">
                            <a href="#">Institucional</a>
                            <div class="dropdown-menu">
                                <a href="sobre-nosotros.html">Sobre Nosotros</a>
                                <a href="contacto.html">Contacto</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                
                <!-- ✅ AGREGADA LA CLASE "dropdown" AQUÍ -->
                <div class="user-profile-nav dropdown">
                    <span class="user-name">Mi Cuenta</span>
                    <div class="avatar-circle">F</div>
                    <div class="dropdown-menu">
                        <a href="perfil-usuario.html">Mi Perfil</a>
                        <a href="perfil-configuracion.html">Configuración</a>
                    </div>
                </div>
            </div>
        </header>
    `;

    // 2. INYECTAR EL HEADER AL INICIO DEL BODY (EXCEPTO EN INDEX.HTML)
    const paginaActual = window.location.pathname.split("/").pop() || 'index.html';

    if (paginaActual !== 'index.html') {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);

        // Solo activar el menú hamburguesa si se inyectó el header
        const btnMenu = document.getElementById('btnMenu');
        const navMenu = document.getElementById('navMenu');

        if (btnMenu && navMenu) {
            btnMenu.addEventListener('click', () => {
                console.log("Click en menú");
                navMenu.classList.toggle('active');
            });
        }
    }

    // 3. ACTIVAR BOTÓN CORRECTO (CLASS="ACTIVE")
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (href === currentPage) {
            link.classList.add('active');

            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('a');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });

    // 4. MENÚ HAMBURGUESA
    const btnMenu = document.getElementById('btnMenu');
    const navMenu = document.getElementById('navMenu');

    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', () => {
            console.log("Click en menú");
            navMenu.classList.toggle('active');
        });
    }

    // 5. PROPIEDADES DE NAVEGACIÓN DOM - ÁRBOL DE CATEGORÍAS
    const arbolPrincipal = document.getElementById('arbolPrincipal');

    if (arbolPrincipal) {
        // Función para filtrar nodos de texto (espacios en blanco)
        function obtenerElementosReales(nodeList) {
            return Array.from(nodeList).filter(nodo => nodo.nodeType === 1); // Solo elementos HTML
        }

        // Obtener todos los nodos clickeables (padres y hojas)
        const todosLosNodos = arbolPrincipal.querySelectorAll('.nodo-padre, .nodo-hoja');

        todosLosNodos.forEach(nodo => {
            nodo.addEventListener('click', function (e) {
                e.stopPropagation(); // Evitar que el clic se propague

                // Quitar clase activa de todos
                todosLosNodos.forEach(n => n.classList.remove('nodo-activo'));

                // Agregar clase activa al nodo clickeado
                this.classList.add('nodo-activo');

                // Si es un nodo padre, expandir/colapsar
                if (this.classList.contains('nodo-padre')) {
                    this.classList.toggle('expandido');
                }

                // 🔍 DEMOSTRACIÓN DE PROPIEDADES DE NAVEGACIÓN
                console.clear();
                console.log('%cPROPIEDADES DE NAVEGACIÓN DOM', 'color: #3498db; font-size: 16px; font-weight: bold;');
                console.log('='.repeat(60));

                // 1. parentNode (Nodo Padre)
                const padre = this.parentNode;
                console.log('%c📌 parentNode (Padre):', 'color: #e74c3c; font-weight: bold;');
                console.log(`   • Tag: <${padre.tagName.toLowerCase()}>`);
                console.log(`   • Clase: "${padre.className}"`);
                console.log(`   • ID: "${padre.id || 'Sin ID'}"`);

                // 2. childNodes (Todos los hijos, incluyendo espacios)
                const todosLosHijos = this.childNodes;
                const hijosReales = obtenerElementosReales(this.childNodes);
                console.log('%c📌 childNodes (Todos los hijos):', 'color: #e74c3c; font-weight: bold;');
                console.log(`   • Total childNodes: ${todosLosHijos.length} (incluye espacios)`);
                console.log(`   • Elementos HTML reales: ${hijosReales.length}`);

                // 3. firstChild (Primer hijo)
                const primerHijo = this.firstChild;
                console.log('%c📌 firstChild (Primer hijo):', 'color: #e74c3c; font-weight: bold;');
                console.log(`   • nodeType: ${primerHijo.nodeType} (${primerHijo.nodeType === 3 ? 'Texto/Espacio' : 'Elemento'})`);
                if (primerHijo.nodeType === 1) {
                    console.log(`   • Tag: <${primerHijo.tagName.toLowerCase()}>`);
                    console.log(`   • Texto: "${primerHijo.textContent.trim()}"`);
                }

                // 4. lastChild (Último hijo)
                const ultimoHijo = this.lastChild;
                console.log('%c📌 lastChild (Último hijo):', 'color: #e74c3c; font-weight: bold;');
                console.log(`   • nodeType: ${ultimoHijo.nodeType}`);

                // 5. nextSibling (Hermano siguiente)
                const hermanoSiguiente = this.nextSibling;
                console.log('%c📌 nextSibling (Hermano siguiente):', 'color: #e74c3c; font-weight: bold;');
                if (hermanoSiguiente) {
                    console.log(`   • Existe: Sí`);
                    console.log(`   • nodeType: ${hermanoSiguiente.nodeType}`);
                    if (hermanoSiguiente.nodeType === 1) {
                        console.log(`   • Tag: <${hermanoSiguiente.tagName.toLowerCase()}>`);
                    }
                } else {
                    console.log(`   • Existe: No (es el último)`);
                }

                // 6. previousSibling (Hermano anterior)
                const hermanoAnterior = this.previousSibling;
                console.log('%c📌 previousSibling (Hermano anterior):', 'color: #e74c3c; font-weight: bold;');
                if (hermanoAnterior) {
                    console.log(`   • Existe: Sí`);
                    console.log(`   • nodeType: ${hermanoAnterior.nodeType}`);
                } else {
                    console.log(`   • Existe: No (es el primero)`);
                }

                // 7. Recorrer todos los hermanos
                console.log('%c📌 Recorriendo hermanos (while + nextSibling):', 'color: #27ae60; font-weight: bold;');
                let nodoActual = this.parentNode.firstChild;
                let contador = 1;
                while (nodoActual) {
                    if (nodoActual.nodeType === 1) {
                        const texto = nodoActual.textContent.trim().substring(0, 30);
                        console.log(`   ${contador}. <${nodoActual.tagName.toLowerCase()}> - "${texto}..."`);
                        contador++;
                    }
                    nodoActual = nodoActual.nextSibling;
                }

                console.log('='.repeat(60));
            });
        });
    }
});