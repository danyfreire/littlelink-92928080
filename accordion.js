document.addEventListener('DOMContentLoaded', function() {
    // Manejo de acordeones principales
    document.querySelectorAll('.accordion').forEach(button => {
        button.addEventListener('click', function() {
            // Cerrar todos los otros paneles principales
            document.querySelectorAll('.accordion').forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });

            // Alternar el panel actual
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            panel.classList.toggle('active');
        });
    });

    // Manejo de contenido desplegable interno
    document.querySelectorAll('.toggle-content').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Cerrar todos los otros contenedores showcase del mismo nivel
            let parentLi = this.closest('li');
            parentLi.parentElement.querySelectorAll('.toggle-content').forEach(otherLink => {
                if (otherLink !== this) {
                    otherLink.classList.remove('active');
                    otherLink.nextElementSibling.classList.remove('active');
                }
            });

            // Alternar el contenedor actual
            this.classList.toggle('active');
            let container = this.nextElementSibling;
            container.classList.toggle('active');
        });
    });
});
