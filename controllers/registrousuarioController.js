const Usuario = require("../models/user");
const bcryptjs = require('bcryptjs');

//GET del Registro del Estudiante/Profesor
exports.register = (req, res) => {
    res.render("registrousuario", { tituloWeb: "Registro de usuario", error: false, success: false, usuario: req.session.cuenta});
};



//POST del Registro del Estudiante/Profesor
exports.user_register_post = async (req, res) => {
    // Recuperamos los datos del formulario
    let body = req.body;
    try {
        const mismoNombre = await Usuario.findOne({ correo: `${body.correo}` });
        // Validación de campos
        if (mismoNombre === null && (body.nombre != "" && body.correo != "" && body.apellidos != "" && body.password != "")) {
            const salt =bcryptjs.genSaltSync(10);
            body.password=bcryptjs.hashSync(body.password, salt);
            let nuevoUsuario = new Usuario(body);
            await nuevoUsuario.save();
            res.render("registrousuario", { tituloWeb: "Registro de usuario satisfactorio", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("registrousuario", { tituloWeb: "Registro de usuario erróneo", error: true, success: false });
        }
    } catch (err) {
        console.log(err);
    }
};