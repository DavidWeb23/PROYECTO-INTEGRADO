
const Usuario = require("../models/user");
//GET del Cuerpo de La Pagina Inicial
exports.index = async (req, res) => {
    try {
        res.render('index', { tituloWeb: "Inicio de sesión", title: 'Inicio', usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};




