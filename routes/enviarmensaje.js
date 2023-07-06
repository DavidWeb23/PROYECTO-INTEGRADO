var express = require('express');
var router = express.Router();

// Require de los controladores de users
const enviarmensajeController = require("../controllers/enviarmensajeController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("enviarmensaje", { tituloWeb: "Enviar Mensaje", error: false });
  } else {
    next();
  }
});


/* GET,POST,PUT,DELETE */

router.get('/', enviarmensajeController.mensaje_create_project);

router.post('/', enviarmensajeController.mensaje_create_project_post);

module.exports = router;
