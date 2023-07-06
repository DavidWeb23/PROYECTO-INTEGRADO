var express = require('express');
var router = express.Router();

// Require de los controladores de users
const cantarController = require("../controllers/cantarController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("cantar", { tituloWeb: "Temas para Cantar", error: false });
  } else {
    next();
  }
});
router.get("/crearcantar/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("cantar", { tituloWeb: "Crear Tema Cantar", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */
router.get('/', cantarController.cantar);

router.get('/crearcantar/', cantarController.cantar_create_project);

router.post('/crearcantar/', cantarController.cantar_create_project_post);

router.get('/:id', cantarController.cantar_develope_project);

router.delete('/:id', cantarController.cantar_delete);

module.exports = router;
