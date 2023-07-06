const Usuario = require("../models/user");
const bcryptjs = require('bcryptjs');

//GET para enviar los datos en el Login
exports.login = (req, res) => {
    req.session.cuenta = undefined;
    res.render("inicio", { tituloWeb: "Inicio de sesión", error: false });
};

// Recuperación de los datos mediante POST
exports.user_login_post = async (req, res) => {
    
    let body = req.body;
    try {
       
       
        let usuarioEncontrado = await Usuario.findOne({ correo: `${body.correo}` });
        if (usuarioEncontrado !== null && bcryptjs.compareSync(body.password,usuarioEncontrado.password,)) {
            req.session.cuenta = usuarioEncontrado;
            res.redirect("/");
        } else {
            res.render("inicio", { tituloWeb: "Inicio de sesión fallido", error: true });
        }
    } catch (error) {
        console.log(error);
    }
};