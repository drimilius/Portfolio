$(document).ready(function() {
    $('.card').on('click', function() {
        $(this).toggleClass('bg-info');
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado correctamente');
    });
});
