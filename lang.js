let textos = {};

// Función para cargar traducciones desde un JSON externo
async function cargarTraducciones() {
    try {
        const response = await fetch("traducciones.json"); // Cargar JSON de traducciones
        textos = await response.json();
        aplicarIdioma(); // Aplicar el idioma guardado o detectado
    } catch (error) {
        console.error("Error cargando las traducciones:", error);
    }
}

// Función para aplicar el idioma seleccionado
function aplicarIdioma(idioma = null) {
    const idiomaGuardado = idioma || localStorage.getItem('idioma') || (navigator.language.startsWith("es") ? "es" : "en");

    if (!textos[idiomaGuardado]) return; // Evitar errores si el idioma no existe en JSON

    // Buscar todos los elementos con ID que coincidan con una clave de traducción
    document.querySelectorAll("[id]").forEach(element => {
        let key = element.id;
        if (textos[idiomaGuardado][key]) {
            if (element.tagName === "A") {
                element.innerText = textos[idiomaGuardado][key]; // Cambiar texto del enlace
                if (key === "chainJournal") {
                    element.href = textos[idiomaGuardado]["chainJournalLink"]; // Cambiar URL del enlace
                }
            } else {
                element.innerHTML = textos[idiomaGuardado][key]; // Cambiar texto normal
            }
        }
    });

    // Guardar la preferencia del usuario
    localStorage.setItem('idioma', idiomaGuardado);
}

function cambiarIdioma(nuevoIdioma) {
    document.documentElement.lang = nuevoIdioma; // Cambia el atributo lang en <html>
    localStorage.setItem('idioma', nuevoIdioma);
    aplicarIdioma(nuevoIdioma);

    // Cambiar la meta description para SEO dinámico
    let metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
        metaDescription.setAttribute("content", textos[nuevoIdioma]["descripcion"]);
    }
}

// Enlace secundario al laboratorio experimental.
// Se inserta antes del footer para mantenerlo visible sin competir con los CTA comerciales.
function insertarCreativeLabLink() {
    if (document.getElementById('creative-lab-link')) return;

    const footer = document.querySelector('footer');
    if (!footer || !footer.parentNode) return;

    const wrapper = document.createElement('p');
    wrapper.className = 'language-switcher';
    wrapper.style.marginTop = '1.5rem';
    wrapper.style.marginBottom = '0';

    const link = document.createElement('a');
    link.id = 'creative-lab-link';
    link.href = 'https://92928080.xyz';
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'CREATIVE LAB ↗';
    link.setAttribute('aria-label', 'Palozebra Creative Lab');

    wrapper.appendChild(link);
    footer.parentNode.insertBefore(wrapper, footer);
}

// El nombre del autor en el footer lleva al sitio personal de Dany.
function configurarEnlacePersonal() {
    const authorLink = document.querySelector('footer a');
    if (!authorLink) return;

    authorLink.href = 'https://23788080.xyz';
    authorLink.setAttribute('aria-label', 'Dany Freire');
}

// Cargar traducciones e insertar accesos secundarios al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarTraducciones();
    insertarCreativeLabLink();
    configurarEnlacePersonal();
});