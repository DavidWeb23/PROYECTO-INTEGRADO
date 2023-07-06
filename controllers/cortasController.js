const Cortas = require("../models/cortas");
const Cortas2 = require("../models/cortas2");
//Lista con todas las Preguntas Cortas
exports.cortas = async (req, res) => {
    try {
        let arrayCortas = await Cortas.find();
        res.render('cortas', { tituloWeb: "Lista de Cortas", arrayCortas: arrayCortas, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};
//Get al crear un nuevo Examen Cortas
exports.cortas_create_project = async (req, res) => {
   
        
        res.render("crearcortas", { tituloWeb: "Crear nuevo proyecto", error: false, success: false, usuario: req.session.cuenta});
  
};
//Post para enviar el Examen Creado
exports.cortas_create_project_post = async (req, res) => {
     let body = req.body;
    
    try {
        if (body.tema != "" && body.pregunta1 != "") {
            let nuevaCortas = new Cortas(body);
            await nuevaCortas.save();
            res.render("crearcortas", { tituloWeb: "Publicar Cortas", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("crearcortas", { tituloWeb: "Publicar Cortas", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};
//Se obtiene mediante GET el Ejercicio Para el Alumno
exports.cortas_develope_project = async (req, res) => {
    const id = req.params.id 
    try {
        const cortasDB = await Cortas.findOne({ _id: id }) 
        console.log(cortasDB) 
        res.render('ejercortas', { 
            cortas: cortasDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('ejercortas', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
//Se envia la respuesta del examen por medio de un POST
exports.cortas_develope_project_post = async (req, res) => {
    let body = req.body;
    
   try {
       if (body.tema != "") {
           
           let nuevaCortas2 = new Cortas2(body);
           await nuevaCortas2.save();
           res.render("ejercortas", { tituloWeb: "Publicar Respuesta Cortas", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejercortas", { tituloWeb: "Publicar Respuesta Cortas", error: true, success: false });
       }
   } catch (error) {
       
       console.log(error);
   }
};
//Se elimina por DELETE la actividad Corta
exports.cortas_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const cortasDB = await Cortas.findByIdAndDelete({ _id: id });
        if (!cortasDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Ejercicio.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Ejercicio eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
}




