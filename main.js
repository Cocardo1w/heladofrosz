$(document).ready(function() {
    // Selector para el botón "menu"
    var menuButton = $("#cerrar");

    // Selector para el menú desplegable
    var menu = $("#nav");

    // Ocultar el menú desplegable al cargar la página
    menu.hide();


   

    if ($(window).width() <= 700) {
        // Mostrar el menú desplegable si la pantalla es lo suficientemente estrecha
        menu.hide();
    } else {
        menu.show();
        
    }
    


    // Agregar un controlador de eventos de clic al botón "menu"
    menuButton.click(function() {
        // Alternar la visibilidad del menú desplegable
        menu.slideToggle();
    });

    // --------------------------------------
    //Animacion -
    //Seleccionamos el elemento a usar 
    var elementoP = $(".texto-header1, .texto-header2");

    //ocultamos inicialmente el elemento
    elementoP.hide();

    //Mostramos el elemento con una animacion de desvanecimiento
    elementoP.fadeIn(3000);



    // $("#whatsapp-button").click(function() {
    //     Swal.fire({
    //         icon: 'info',  // Cambia el icono (info, warning, error, success, etc.)
    //         title: 'Envía un mensaje de WhatsApp',
    //         text: '¿Cómo podemos ayudarte?',
    //         showCancelButton: true,
    //         confirmButtonText: '¡Enviar un mensaje!',
    //         cancelButtonText: 'Cancelar',
    //         confirmButtonColor: '#4CAF50',  // Cambia el color del botón de confirmación
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Redirige al enlace de WhatsApp o realiza la acción deseada
    //             window.location.href = 'https://wa.me/tunumerodetelefono';
    //         }
    //     });
    // });
    
    
});

