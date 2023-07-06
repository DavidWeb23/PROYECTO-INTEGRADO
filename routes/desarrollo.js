var express = require('express');
var router = express.Router();

// Require de los controladores de users
const desarrolloController = require("../controllers/desarrolloController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("desarrollo", { tituloWeb: "Tema Desarrollo", error: false });
  } else {
    next();
  }
});
router.get('/creardesarrollo/', (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("desarrollo", { tituloWeb: "Crear Desarrollo", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */
router.get('/', desarrolloController.desarrollo);

router.get('/creardesarrollo/', desarrolloController.desarrollo_create_project);

router.post('/creardesarrollo/', desarrolloController.desarrollo_create_project_post);

router.get('/:id', desarrolloController.desarrollo_develope_project);

router.post('/:id/ejerdesarrollo', desarrolloController.desarrollo_develope_project_post);

router.delete('/:id', desarrolloController.desarrollo_delete);

router.put('/:id', desarrolloController.desarrollo_edit_put);

module.exports = router;
