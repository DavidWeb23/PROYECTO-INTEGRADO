//Funciones para Crear las Preguntas Tipo Test

$('.nombreperfil').html(localStorage.getItem('usuario'));
$("#textoRespuestaVerdadero").click(function () {
        
    $("#verdadero").prop("checked", true);
    console.log("entraste")
})
$("#textoRespuestaFalso").click(function () {
    $("#falso").prop("checked", true);
    console.log("saliste")
})
//Funcion Verdadero/Falso
$("#tf").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-none");
    $(".tipotf").addClass("d-block");
    $(".tipovarias").addClass("d-none");
    console.log("saliste")
})
//Función Respuesta Unica
$("#unica").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-block");
    $(".tipotf").addClass("d-none");
    $(".tipovarias").addClass("d-none");
    console.log("saliste")
})
//Función Respuesta Multiple
$("#varias").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-none");
    $(".tipotf").addClass("d-none");
    $(".tipovarias").addClass("d-block");
    console.log("funciono")
})