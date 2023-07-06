var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tareasdesarrolloController = require("../controllers/tareasdesarrolloController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tareasdesarrollo", { tituloWeb: "Tareas de Desarrollo", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */
router.get('/', tareasdesarrolloController.desarrollo);

router.get('/:id', tareasdesarrolloController.desarrollo_develope_project);

router.put('/:id/', tareasdesarrolloController.desarrollo_edit_put);

module.exports = router;
