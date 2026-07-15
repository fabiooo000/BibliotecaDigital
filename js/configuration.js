/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const traducciones = {
    es: {
        titulo: "Centro de Configuración",
        lblTema: "Tema de Interfaz", optClaro: "Claro", optOscuro: "Oscuro", optSepia: "Sepia",
        lblIdioma: "Idioma del Sistema", optES: "Español", optEN: "English",
        lblEmail: "Alertas por Email", lblPush: "Notificaciones Push", lblPublico: "Perfil Público",
        lblContraste: "Alto Contraste", lblSync: "Sync Automática", lblFuente: "Tamaño de Letra",
        optNormal: "Normal", optGrande: "Grande", optXGrande: "Muy Grande",
        lblSeguridad: "Seguridad", btnClave: "Cambiar Clave",
        lblAlmacenamiento: "Almacenamiento", btnCache: "Borrar Caché",
        linkVolver: "← Volver a Mi Perfil",
        // Mensajes de alerta
        msgClavePrompt: "Ingresa tu nueva contraseña (mín. 6 caracteres):",
        msgClaveConfirm: "¿Estás seguro de guardar esta nueva contraseña?",
        msgClaveExito: "Contraseña actualizada con éxito.",
        msgClaveCorta: "La contraseña es muy corta.",
        msgCacheConfirm: "¿Deseas borrar todos los datos en caché de la aplicación?",
        msgCacheExito: "Caché borrada correctamente."
    },
    en: {
        titulo: "Configuration Center",
        lblTema: "Interface Theme", optClaro: "Light", optOscuro: "Dark", optSepia: "Sepia",
        lblIdioma: "System Language", optES: "Spanish", optEN: "English",
        lblEmail: "Email Alerts", lblPush: "Push Notifications", lblPublico: "Public Profile",
        lblContraste: "High Contrast", lblSync: "Auto Sync", lblFuente: "Font Size",
        optNormal: "Normal", optGrande: "Large", optXGrande: "Extra Large",
        lblSeguridad: "Security", btnClave: "Change Password",
        lblAlmacenamiento: "Storage", btnCache: "Clear Cache",
        linkVolver: "← Back to My Profile",
        // Messages
        msgClavePrompt: "Enter your new password (min. 6 characters):",
        msgClaveConfirm: "Are you sure you want to save this new password?",
        msgClaveExito: "Password updated successfully.",
        msgClaveCorta: "The password is too short.",
        msgCacheConfirm: "Do you want to clear all cached data from the application?",
        msgCacheExito: "Cache cleared successfully."
    }
};

document.getElementById('btnMenu').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

function cambiarIdioma() {
    const idioma = document.getElementById('cfgIdioma').value; // 'es' o 'en'
    const t = traducciones[idioma];

    document.getElementById('txtTitulo').innerText = t.titulo;
    document.getElementById('txtTema').innerText = t.lblTema;
    document.getElementById('optClaro').innerText = t.optClaro;
    document.getElementById('optOscuro').innerText = t.optOscuro;
    document.getElementById('optSepia').innerText = t.optSepia;
    
    document.getElementById('txtIdioma').innerText = t.lblIdioma;
    document.getElementById('optES').innerText = t.optES;
    document.getElementById('optEN').innerText = t.optEN;
    
    document.getElementById('txtEmail').innerText = t.lblEmail;
    document.getElementById('txtPush').innerText = t.lblPush;
    document.getElementById('txtPublico').innerText = t.lblPublico;
    document.getElementById('txtContraste').innerText = t.lblContraste;
    document.getElementById('txtSync').innerText = t.lblSync;
    document.getElementById('txtFuente').innerText = t.lblFuente;
    
    document.getElementById('optNormal').innerText = t.optNormal;
    document.getElementById('optGrande').innerText = t.optGrande;
    document.getElementById('optXGrande').innerText = t.optXGrande;
    
    document.getElementById('txtSeguridad').innerText = t.lblSeguridad;
    document.getElementById('btnClave').innerText = t.btnClave;
    
    document.getElementById('txtAlmacenamiento').innerText = t.lblAlmacenamiento;
    document.getElementById('btnCache').innerText = t.btnCache;
    
    document.getElementById('linkVolver').innerText = t.linkVolver;
    
    console.log(`[Consola SEM 11] Idioma cambiado a: ${idioma.toUpperCase()}`);
}

function cambiarTema() {
    const tema = document.getElementById('cfgTema').value;
    switch (tema) {
        case 'oscuro':
            document.body.style.background = "#1a252f";
            document.body.style.color = "#f4f5f7";
            break;
        case 'sepia':
            document.body.style.background = "#f4ecd8";
            document.body.style.color = "#5b4636";
            break;
        default: // claro
            document.body.style.background = "";
            document.body.style.color = "";
    }
    console.log(`[Consola] Tema cambiado a: ${tema}`);
}

function cambiarFuente(size) {
    if (size === '18px' || size === '20px') {
        document.body.style.fontSize = size;
    } else {
        document.body.style.fontSize = "16px";
    }
}

function toggleAjuste(tipo, estado) {
    console.log(`[Consola] ${tipo}: ${estado ? 'Activado' : 'Desactivado'}`);
}

function toggleAltoContraste(estado) {
    if (estado) {
        document.body.style.filter = "contrast(1.5)";
    } else {
        document.body.style.filter = "none";
    }
}

function cambiarClave() {
    const idioma = document.getElementById('cfgIdioma').value;
    const t = traducciones[idioma];
    
    const nuevaClave = prompt(t.msgClavePrompt);
    if (nuevaClave !== null && nuevaClave.length >= 6) {
        const confirmar = confirm(t.msgClaveConfirm);
        if (confirmar) {
            alert(t.msgClaveExito);
        }
    } else if (nuevaClave !== null) {
        alert(t.msgClaveCorta);
    }
}

function borrarCache() {
    const idioma = document.getElementById('cfgIdioma').value;
    const t = traducciones[idioma];
    
    const confirmar = confirm(t.msgCacheConfirm);
    if (confirmar) {
        alert(t.msgCacheExito);
    }
}