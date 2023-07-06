const Tarjetas = require("../models/tarjetas");

//Get Lista de Tarjetas
exports.tarjetas = async (req, res) => {
    try {
        let arrayTarjetas = await Tarjetas.find();
        res.render('tarjetas', { tituloWeb: "Lista de Tarjetas", arrayTarjetas: arrayTarjetas, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

//Get de la Creación de una nueva Tarjeta
exports.tarjetas_create_project = async (req, res) => {
   
        
        res.render("creartarjetas", { tituloWeb: "Crear nuevo proyecto", error: false, success: false, usuario: req.session.cuenta });
  
};

//POST de la información de la Tarjeta Creada
exports.tarjetas_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
    
    try {
        if (body.tema != "" && body.pregunta1 != "") {
            let nuevaTarjetas = new Tarjetas(body);
            await nuevaTarjetas.save();
            res.render("creartarjetas", { tituloWeb: "Publicar Tarjetas", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creartarjetas", { tituloWeb: "Publicar Tarjetas", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};


//Get de la Actividad Disponible de Tarjetas de Memoria para realizar

exports.tarjetas_develope_project = async (req, res) => {
    const id = req.params.id 
    
    try {
        const tarjetasDB = await Tarjetas.findOne({ _id: id }) 
							
        console.log(tarjetasDB) 
        res.render('ejertarjetas', { 
            tarjetas: tarjetasDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('ejertarjetas', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};

//DELETE Tarjeta de Memoria
exports.tarjetas_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const tarjetasDB = await Tarjetas.findByIdAndDelete({ _id: id });
        if (!tarjetasDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar la Tarjeta.'
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





