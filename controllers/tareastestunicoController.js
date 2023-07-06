const Testunico2 = require("../models/testunico2");
const Testunico = require("../models/testunico");

//GET de la Lista de las Actividades Test Realizadas 
exports.testunico = async (req, res) => {
    try {
        let arrayTestunico2 = await Testunico2.find();
        res.render('tareastestunico', { tituloWeb: "Lista de Testunico2", arrayTestunico2: arrayTestunico2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

//GET de la Actividad Test Realizada 

exports.testunico_develope_project = async (req, res) => {
    
    const id = req.params.id 
    
    try {
        
        const testunico2DB = await Testunico2.findOne({ _id: id }) 
							
        const testunicoDB = await Testunico.findOne({ _id: testunico2DB.idoriginal }) 
        
        res.render('resultadotestunico', { 
            testunico2: testunico2DB,
            testunico:testunicoDB,
            error: false, usuario: req.session.cuenta
            
        })
        
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('resultadotestunico', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
    
};





