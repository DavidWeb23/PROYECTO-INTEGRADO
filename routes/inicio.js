const express = require("express");
const router = express.Router();


// Require de los controladores de login
const inicioController = require("../controllers/inicioController");

// Comprueba que tiene iniciada sesión
router.get("/*", (req, res, next) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
    if (!req.session.cuenta) {
        res.render("inicio", { tituloWeb: "Inicio de sesión", error: false });
    } else {
        next();
    }
});

//GET página login
router.get("/", inicioController.login);

// POST request para loguear usuario
router.post("/", inicioController.user_login_post);

module.exports = router;