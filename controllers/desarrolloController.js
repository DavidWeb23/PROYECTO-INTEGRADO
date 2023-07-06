const Desarrollo = require("../models/desarrollo");
const Desarrollo2 = require("../models/desarrollo2");
//Lista con todas las actividades de Desarrollo
exports.desarrollo = async (req, res) => {
    try {
        let arrayDesarrollo = await Desarrollo.find();
        res.render('desarrollo', { tituloWeb: "Lista de Desarrollo", arrayDesarrollo: arrayDesarrollo, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};
//GET para obtener los datos al crear un Ejercicio
exports.desarrollo_create_project = async (req, res) => {
   
        
        res.render("creardesarrollo", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
//POST para crear el Ejercicio de Desarrollo
exports.desarrollo_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     
    try {
        if (body.tema != "" && body.pregunta != "") {
            
            let nuevaDesarrollo = new Desarrollo(body);
            await nuevaDesarrollo.save();
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
        }
    } catch (error) {
        
        console.log(error);
    }
};
//GET para realizar el ejercicio ya creado para el Alumno
exports.desarrollo_develope_project = async (req, res) => {
    const id = req.params.id 
    try {
        const desarrolloDB = await Desarrollo.findOne({ _id: id }) 
						
        console.log(desarrolloDB) 
        res.render('ejerdesarrollo', { 
            desarrollo: desarrolloDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('ejerdesarrollo', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
//POST para la respuesta del Examen
exports.desarrollo_develope_project_post = async (req, res) => {
    let body = req.body;
    
   try {
       if (body.respuesta != "") {
           
           let nuevaDesarrollo2 = new Desarrollo2(body);
           await nuevaDesarrollo2.save();
           res.render("ejerdesarrollo", { tituloWeb: "Publicar Respuesta Desarrollo", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejerdesarrollo", { tituloWeb: "Publicar Respuesta Desarrollo", error: true, success: false });
       }
   } catch (error) {
       
       console.log(error);
   }
};
//Put para modificar la nota y observaciones de Desarrollo
exports.desarrollo_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const desarrolloDB = await Desarrollo.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(desarrolloDB)
            res.json({
                estado: true,
                mensaje: 'Nota Editada'
            })
        } catch (error) {
            
            console.log(error)
            res.json({
                estado: false,
                mensaje: 'Nota no Editada'
            })
        }
    }



//DELETE para ELiminar la actividad de Desarrollo

exports.desarrollo_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const desarrolloDB = await Desarrollo.findByIdAndDelete({ _id: id });
        if (!desarrolloDB) {
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

