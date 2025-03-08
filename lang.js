const textos = {
    "es": {
        "descripcion": "Estudio creativo enfocado en branding, diseño digital y producción audiovisual. Explora nuestro trabajo en diseño, web y audio.",
        "diseno": "Diseño",
        "musica": "Música",
        "contacto": "Contacto",
        "whatsapp": "WhatsApp",
        "email": "Email",
        "guardar": "Guarda mi contacto",
        "escanea": "Escanea mi contacto:"
    },
    "en": {
        "descripcion": "Creative studio focused on branding, digital design, and audiovisual production. Explore our work in design, web, and audio.",
        "diseno": "Design",
        "musica": "Music",
        "contacto": "Contact",
        "whatsapp": "WhatsApp",
        "email": "Email",
        "guardar": "Save my contact",
        "escanea": "Scan my contact:"
    }
};

// Función para cambiar de idioma dinámicamente
function cambiarIdioma(idioma) {
    document.getElementById('descripcion').innerText = textos[idioma].descripcion;
    document.getElementById('diseno').innerText = textos[idioma].diseno;
    document.getElementById('musica').innerText = textos[idioma].musica;
    document.getElementById('contacto').innerText = textos[idioma].contacto;
    document.getElementById('whatsapp').innerText = textos[idioma].whatsapp;
    document.getElementById('email').innerText = textos[idioma].email;
    document.getElementById('guardar').innerText = textos[idioma].guardar;
    document.getElementById('escanea').innerText = textos[idioma].escanea;

    // Guardar la preferencia del usuario
    localStorage.setItem('idioma', idioma);
}

// Detectar el idioma del navegador y aplicarlo al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem('idioma') || (navigator.language.startsWith("es") ? "es" : "en");
    cambiarIdioma(idiomaGuardado);
});
