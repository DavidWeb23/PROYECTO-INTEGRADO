const Mensaje = require("../models/mensaje");

//GET con la Lista de los Mensajes
exports.mensaje = async (req, res) => {
    try {
        const arrayMensaje = await Mensaje.find();
        res.render('mensajes', { tituloWeb: "Lista de Mensaje", arrayMensaje: arrayMensaje, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};
//Get para Obtener un Mensaje Especifico
exports.mensaje_develope_project = async (req, res) => {
    const id = req.params.id 
    try {
        const mensajeDB = await Mensaje.findOne({ _id: id }) 
							
        
        console.log(mensajeDB) 
        res.render('leermensaje', { 
            mensaje: mensajeDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('leermensaje', { 
            error: true,
            mensaje: 'Mensaje no encontrado!',usuario: req.session.cuenta
        })
    }
};
//DELETE para eliminar el mensaje seleccionado
exports.mensaje_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const mensajeDB = await Mensaje.findByIdAndDelete({ _id: id });
        if (!mensajeDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Mensaje.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Mensaje eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
}

