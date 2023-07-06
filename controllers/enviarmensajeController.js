const Mensaje = require("../models/mensaje");


//GET con el cuerpo del mensaje
exports.mensaje_create_project = async (req, res) => {
   
        
        res.render("enviarmensaje", { tituloWeb: "Crear Mensaje", error: false, success: false,usuario: req.session.cuenta });
  
};
//POST del Mensaje del Alumno
exports.mensaje_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     
    try {
        if (body.titulo != "" && body.mensaje != "") {
            
            let nuevaMensaje = new Mensaje(body);
            await nuevaMensaje.save();
            res.render("enviarmensaje", { tituloWeb: "Publicar Mensaje", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("enviarmensaje", { tituloWeb: "Publicar Mensaje", error: true, success: false });
        }
    } catch (error) {
        
        console.log(error);
    }
};
