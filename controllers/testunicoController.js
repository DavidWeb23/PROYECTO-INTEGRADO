const Testunico = require("../models/testunico");
const Testunico2 = require("../models/testunico2");


//GET Lista de Test Unicos para Realizar
exports.testunico = async (req, res) => {
    try {
        const arrayTestunico = await Testunico.find();
        res.render('testunico', { tituloWeb: "Lista de Testunico", arrayTestunico: arrayTestunico, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

//GET para Crear un Nuevo Test Unico
exports.testunico_create_project = async (req, res) => {
   
        
        res.render("creartestunico", { tituloWeb: "Crear nuevo proyecto", error: false, success: false , usuario: req.session.cuenta });
  
};

//POST para Crear un NUevo Test Unico
exports.testunico_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     const body = req.body;
    
    try {
        if (body.tema != "") {
            const nuevaTestunico = new Testunico(body);
            await nuevaTestunico.save();
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
        
    }
};

//GET de los Ejercicios Test para Realizar de forma Individual
exports.testunico_develope_project = async (req, res) => {
    const id = req.params.id 
    
    try {
        const testunicoDB = await Testunico.findOne({ _id: id }) 
							
        console.log(testunicoDB) 
        res.render('ejertestunico', { 
            testunico: testunicoDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('ejertestunico', { 
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};

//POST de la Respuesta a ese Ejercicio 
exports.testunico_develope_project_post = async (req, res) => {
    let body = req.body;
    
   try {
       if (body.respuesta != "") {
           
           let nuevaTestunico2 = new Testunico2(body);
           await nuevaTestunico2.save();
           res.render("ejertestunico", { tituloWeb: "Publicar Testunico", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejertestunico", { tituloWeb: "Publicar Testunico", error: true, success: false });
       }
   } catch (error) {
       
       console.log(error);
   }
};

//DELETE del Ejercicio Test para Realizar
exports.testunico_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const testunicoDB = await Testunico.findByIdAndDelete({ _id: id });
        if (!testunicoDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Test.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Test eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
}





