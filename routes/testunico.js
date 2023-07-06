var express = require('express');
var router = express.Router();

// Require de los controladores de users
const testunicoController = require("../controllers/testunicoController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("testunico", { tituloWeb: "Test Unico", error: false });
  } else {
    next();
  }
});
router.get("/creartestunico/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("testunico", { tituloWeb: "Crear Test", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */
router.get('/', testunicoController.testunico);

router.get('/creartestunico/', testunicoController.testunico_create_project);

router.post('/creartestunico/', testunicoController.testunico_create_project_post);

router.get('/:id', testunicoController.testunico_develope_project);

router.post('/:id/ejertestunico', testunicoController.testunico_develope_project_post);

router.delete('/:id', testunicoController.testunico_delete);

module.exports = router;
