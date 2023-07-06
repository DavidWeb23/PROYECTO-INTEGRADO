const express = require("express");
const router = express.Router();

// Require de los controladores de register
const registroController = require("../controllers/registroController");

// Comprueba que tiene iniciada sesión
router.get("/*", (req, res, next) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
    if (!req.session.cuenta) {
        res.render("registro", { tituloWeb: "Registro de Usuario", error: false, success: false });
    } else {
        next();
    }
});

// GET de la página register
router.get("/", registroController.register);

// POST request para registrar un nuevo usuario
router.post("/", registroController.user_register_post);

module.exports = router;