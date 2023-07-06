
const Desarrollo2 = require("../models/desarrollo2");


//GET con la Lista de Desarrollo Realizadas
exports.desarrollo = async (req, res) => {
    try {
        let arrayDesarrollo2 = await Desarrollo2.find();
        res.render('tareasdesarrollo', { tituloWeb: "Lista de Desarrollo2", arrayDesarrollo2: arrayDesarrollo2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

//GET de la Actividad Desarrollo Individual ya realizada

exports.desarrollo_develope_project = async (req, res) => {
    const id = req.params.id 
    
    try {
        const desarrollo2DB = await Desarrollo2.findOne({ _id: id }) 
					
        console.log(desarrollo2DB) 
        res.render('resultadodesarrollo', { 
            desarrollo2: desarrollo2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log("no ha ent")
        console.log('Se ha producido un error', error)
        res.render('resultadodesarrollo', { 
            error: true,
            mensaje: 'Desarrollo no encontrado!',usuario: req.session.cuenta
        })
    }
};

//PUT para Modificar la Actividad Realizada

exports.desarrollo_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const desarrollo2DB = await Desarrollo2.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(desarrollo2DB)
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




