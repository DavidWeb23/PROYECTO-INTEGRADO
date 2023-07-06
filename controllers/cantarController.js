const Cantar = require("../models/cantar");

//Lista de Temas para Cantar
exports.cantar = async (req, res) => {
    try {
        let arrayCantar = await Cantar.find();
        res.render('cantar', { tituloWeb: "Lista de Cantar", arrayCantar: arrayCantar, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};
//Get al Crear Nuevo Proyecto
exports.cantar_create_project = async (req, res) => {
   
        
        res.render("crearcantar", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
//Post al Crear un Nuevo Proyecto
exports.cantar_create_project_post = async (req, res) => {
     let body = req.body;
     
    try {
        if (body.area != "" && body.tema != "") {
            
            let nuevaCantar = new Cantar(body);
            await nuevaCantar.save();
            res.render("crearcantar", { tituloWeb: "Publicar Cantar", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("crearcantar", { tituloWeb: "Publicar Cantar", error: true, success: false });
        }
    } catch (error) {
        
        console.log(error);
    }
};
//Get para Obtener el Ejercicio de Cantar Creado
exports.cantar_develope_project = async (req, res) => {
    const id = req.params.id 
    try {
        const cantarDB = await Cantar.findOne({ _id: id }) 
        console.log(cantarDB) 
        res.render('ejercantar', { 
            cantar: cantarDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('ejercantar', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
//Tema Eliminado de los Temas para Cantar
exports.cantar_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const cantarDB = await Cantar.findByIdAndDelete({ _id: id });
        if (!cantarDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Tema.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Tema eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
}


