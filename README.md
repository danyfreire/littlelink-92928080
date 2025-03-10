# **Palozebra LittleLink**
Basado en **LittleLink**, esta versión extendida incorpora mejoras clave, como **soporte para múltiples idiomas y un diseño con acordeones**, ideal para mostrar más información de manera organizada.

## **🆕 Características principales**
✅ **Acordeones interactivos** para organizar el contenido.  
✅ **Traducción automática con JSON** sin necesidad de modificar `index.html`.  
✅ **Detección automática del idioma del navegador** y almacenamiento de la preferencia del usuario.  
✅ **Carga dinámica de enlaces y textos en múltiples idiomas**.  

---

## **🌍 Configuración de Idiomas y Traducción**

Este proyecto implementa un sistema de **traducción automática** basado en **JSON y JavaScript**, lo que permite cambiar dinámicamente el idioma sin necesidad de modificar `index.html` manualmente.

### **📌 ¿Cómo funciona?**

1. **Los textos de la página están almacenados en `traducciones.json`.**  
2. **El script `lang.js`** carga dinámicamente las traducciones y cambia el contenido de los elementos en función de su `id`.  
3. **El idioma se guarda en `localStorage`**, por lo que la página recuerda la preferencia del usuario.  
4. **Los enlaces de cambio de idioma ejecutan `cambiarIdioma('es')` o `cambiarIdioma('en')`**.  

---

### **📂 1️⃣ Estructura de `traducciones.json`**

Este archivo contiene todos los textos de la página en diferentes idiomas:

```json
{
    "es": {
        "descripcion": "Estudio creativo enfocado en branding, diseño digital y producción audiovisual. Explora nuestro trabajo en diseño, web y audio.",
        "diseno": "🎨 Diseño",
        "produccion": "🎧 Producción Musical & Distribución",
        "web": "💻 Desarrollo Web",
        "marketing": "📧 Marketing Digital",
        "creatividad": "💡 Creatividad & Conceptos",
        "contacto": "📞 Contacto",
        "whatsapp": "WhatsApp",
        "email": "Email",
        "guardar": "Guarda mi contacto",
        "escanea": "Escanea mi contacto:",
        "chainJournal": "📖 Chain Journal (Amazon)",
        "chainJournalLink": "https://a.co/d/6GkueOL"
    },
    "en": {
        "descripcion": "Creative studio focused on branding, digital design, and audiovisual production. Explore our work in design, web, and audio.",
        "diseno": "🎨 Design",
        "produccion": "🎧 Music Production & Distribution",
        "web": "💻 Web Development",
        "marketing": "📧 Digital Marketing",
        "creatividad": "💡 Creativity & Concepts",
        "contacto": "📞 Contact",
        "whatsapp": "WhatsApp",
        "email": "Email",
        "guardar": "Save my contact",
        "escanea": "Scan my contact:",
        "chainJournal": "📖 Chain Journal (Amazon)",
        "chainJournalLink": "https://a.co/d/1wwYW1J"
    }
}
```

---

### **📜 2️⃣ Cómo cambiar de idioma en `index.html`**

Para que los usuarios puedan cambiar el idioma, agrega estos enlaces en tu `index.html`:

```html
<p class="language-switcher"> 
    <a href="#" id="lang-es" class="lang-link">Español</a> | 
    <a href="#" id="lang-en" class="lang-link">English</a>
</p>
```

Y en `lang.js`, asegúrate de agregar el `EventListener` para manejar los clics:

```js
document.addEventListener("DOMContentLoaded", () => {
    cargarTraducciones();

    // Asegurar que los botones de cambio de idioma funcionen
    document.getElementById("lang-es").addEventListener("click", function(event) {
        event.preventDefault();
        cambiarIdioma("es");
    });

    document.getElementById("lang-en").addEventListener("click", function(event) {
        event.preventDefault();
        cambiarIdioma("en");
    });
});
```

---

### **📦 3️⃣ ¿Cómo agregar más textos o idiomas?**

1. **En `traducciones.json`**, agrega la nueva clave en todos los idiomas:

```json
"nuevoTexto": "Este es un nuevo texto en español"
```

```json
"nuevoTexto": "This is a new text in English"
```

2. **En `index.html`**, simplemente usa la `id` correspondiente:

```html
<p id="nuevoTexto">Este es un nuevo texto en español</p>
```

**¡Listo!** Se traducirá automáticamente.

---

## **📁 Estructura del Código**
Este proyecto mantiene una estructura simple basada en `LittleLink`, con los siguientes archivos clave:

📌 **`index.html`** → Contiene la estructura principal con los `id` para la traducción.  
📌 **`traducciones.json`** → Guarda los textos en diferentes idiomas.  
📌 **`lang.js`** → Gestiona el cambio de idioma y aplica las traducciones.  
📌 **`accordion.js`** → Maneja los acordeones para mostrar y ocultar contenido.  
📌 **`style.css`** → Define los estilos y animaciones.  

---

## **🔗 Deploy**
Puedes desplegar esta versión fácilmente en **Vercel, Netlify o GitHub Pages** como cualquier otra instancia de LittleLink.

[![Deploy to Vercel](https://cdn.cottle.cloud/littlelink/button-deploy-vercel.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsethcottle%2Flittlelink&project-name=littlelink&repository-name=littlelink)

---

### **📊 Performance**
🚀 **Optimizado para velocidad y accesibilidad**, esta versión mantiene la ligereza de LittleLink, pero con más funcionalidades para quienes necesitan una página de enlaces más dinámica.

---

✅ **Esta versión de LittleLink es ideal para quienes quieren una página más dinámica, con múltiples idiomas y una mejor organización del contenido.** 🚀🔥
