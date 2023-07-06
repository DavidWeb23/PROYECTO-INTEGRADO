//FUNCION PARA AÑADIR HASTA LA PREGUNTA NUMERO 25 

contador=1
    
contado=0

    $(".aniadir").click(function () {
    if (contador<25){
    i=0;
    contador++;
    
    
    contado++;
    
    prueba=$("form :radio[id=unicaopcion]:checked")
    
    cadena=[]
    
    
    //Se añade una pregunta al tipo test
    $(".contenido").append("<fieldset><div class=\"bloquepregunta border border-dark border-2\"><ul class=\"mb-3 list-unstyled\"><li class=\"row col-12 m-0 py-3\"><input id=\"textoPreguntas\"class=\"col-12 col-sm-12 col-md-12 col-lg-12 btn btn-success my-2\"name=\"pregunta\"placeholder=\"Escribir la Pregunta "+contador+"\"></input></li><ul class=\"mb-3 list-unstyled d-block tipopregunta tipounica\"><li class=\"row col-12 m-0 py-3\"><input id=\"textoRespuesta\"class=\"col-12 col-sm-12 col-md-11 col-lg-11 btn btn-secondary my-2\" name=\"respuesta1\"placeholder=\"Escribe Respuesta Primera\"></input><input class=\"col-12 col-sm-12 col-md-1 col-lg-1\"id=\"unicaopcion\"name=\"unicaopcion"+[contador]+"\" value=\"a\" type=\"radio\"/></input></li><li class=\"row col-12 m-0 py-3\"><input id=\"textoRespuesta\"class=\"col-12 col-sm-12 col-md-11 col-lg-11 btn btn-secondary my-2\"name=\"respuesta2\"placeholder=\"Escribe Respuesta Segunda\"></input><input class=\"col-12 col-sm-12 col-md-1 col-lg-1\"id=\"unicaopcion\"name=\"unicaopcion"+[contador]+"\" value=\"b\" type=\"radio\"/></input></li><li class=\"row col-12 m-0 py-3\"><input id=\"textoRespuesta\"class=\"col-12 col-sm-12 col-md-11 col-lg-11 btn btn-secondary my-2\"name=\"respuesta3\"placeholder=\"Escribe Respuesta Tercera\"></input><input type=\"radio\" class=\"col-12 col-sm-12 col-md-1 col-lg-1 \"id=\"unicaopcion\"name=\"unicaopcion"+[contador]+"\" value=\"c\"/></input></li><li class=\"row col-12 m-0 py-3\"><input id=\"textoRespuesta\"class=\"col-12 col-sm-12 col-md-11 col-lg-11 btn btn-secondary my-2\"name=\"respuesta4\"placeholder=\"Escribe Respuesta Cuarta\"></input><input type=\"radio\" class=\"col-12 col-sm-12 col-md-1 col-lg-1 \"id=\"unicaopcion\"name=\"unicaopcion"+[contador]+"\" value=\"d\" /></input></li></ul></ul></div></fieldset>");
    $(".contenido").animate({ scrollTop: $('.contenido')[0].scrollHeight }, 1000);
     
    }else{

    }
    
    })
    //Al pasar por encima, se chequean todos los radios y se cogen solo las respuestas
    $("#crearenvio").mouseover(function(){
        
        prueba=$("form :radio[id=unicaopcion]:checked")
        cadena=[]
    
    for (var i = 0; i < contador; i++) {
    cadena.push(prueba[i].value);
    }
    
    var j= 0;
    //Se incluye las respuestas del tipo test para que las vea el Profesor y Alumno
    $("#bloqueunicaopcionfinal").html("")
    for (var j=0;j< contador; j++){
        $("#bloqueunicaopcionfinal").append("<input id=\"unicaopcionfinal\" class=\"col-12 col-sm-12 col-md-1 col-lg-1\"name=\"unicaopcionfinal\" value=\""+cadena[j]+"\"/>");
    }
    
    }); 
    