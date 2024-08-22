// botón "Download CV"
const downloadButton = document.querySelector('.download');
downloadButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Descargando CV de Iván Pino...');
    // Aquí puedes agregar lógica para manejar la descarga real si es necesario
});

//  botón "Más" en la sección "Sobre Mi"
const moreButton = document.querySelector('.about-info .download');
moreButton.addEventListener('click', () => {
    alert('Mostrando más información sobre Iván Pino...');
    // Aquí puedes agregar lógica para expandir información si es necesario
});

// botones "detalles de Proyecto"
const detailButtons = document.querySelectorAll('.detalles-proyecto');
detailButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirigiendo a los detalles del proyecto...');
        // Aquí puedes agregar lógica para redirigir a la página de detalles del proyecto
    });
});

// Validación del formulario de contacto
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica si algún campo está vacío
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    // Muestra un mensaje de éxito
    alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
});
const imagenes = document.querySelectorAll('#img1, #img2, #img3');
//evento
imagenes.forEach((img) => {
    img.addEventListener('click', function(){
        this.classList.add('zoomed');
        this.style.transform = 'scale(2)';
        
    });
    img.addEventListener('mouseout', function(){
        this.classList.add('zoomed');
        this.style.transform = 'scale(1)';
        
    });
});