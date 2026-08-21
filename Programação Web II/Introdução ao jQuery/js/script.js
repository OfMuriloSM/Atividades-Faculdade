$(document).ready(function() {
    
    $("#btnMensagem").on('click', function() {
        $("#descricao").text("Estou aprendendo jQuery! A biblioteca facilita muito a manipulação do DOM.");
    });

    $("#btnEstilo").on('click', function() {
       
        $("#titulo").css({
            "color": "#e83e8c",
            "font-size": "3rem",
            "background-color": "#f8f9fa",
            "padding": "10px",
            "border-radius": "5px",
            "text-transform": "uppercase"
        });
    });

    $("#btnOcultar").on('click', function() {
        
        $("#descricao").fadeOut(400); 
    });

    $("#btnMostrar").on('click', function() {
        
        $("#descricao").fadeIn(400);
    });
});