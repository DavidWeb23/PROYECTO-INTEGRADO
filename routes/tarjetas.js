var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tarjetasController = require("../controllers/tarjetasController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tarjetas", { tituloWeb: "Tarjetas", error: false });
  } else {
    next();
  }
});
router.get("/creartarjetas/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tarjetas", { tituloWeb: "Crear Tarjetas", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */
router.get('/', tarjetasController.tarjetas);

router.get('/creartarjetas/', tarjetasController.tarjetas_create_project);

router.post('/creartarjetas/', tarjetasController.tarjetas_create_project_post);

router.get('/:id', tarjetasController.tarjetas_develope_project);

router.delete('/:id', tarjetasController.tarjetas_delete);

module.exports = router;
