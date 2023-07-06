
const Cortas2 = require("../models/cortas2");


//Get de la Lista de las Preguntas Cortas realizadas
exports.cortas = async (req, res) => {
    try {
        let arrayCortas2 = await Cortas2.find();
        res.render('tareascortas', { tituloWeb: "Lista de Cortas Realizadas", arrayCortas2: arrayCortas2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};


//GET de las Pregunta Corta realizada individual
exports.cortas_develope_project = async (req, res) => {
    const id = req.params.id 
    
    try {
        const cortas2DB = await Cortas2.findOne({ _id: id }) 
		
        console.log(cortas2DB) 
        res.render('resultadocortas', { 
            cortas2: cortas2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('resultadocortas', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};

//PUT Modificar Nota Respuesta Cortas
exports.cortas_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const cortas2DB = await Cortas2.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(cortas2DB)
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





