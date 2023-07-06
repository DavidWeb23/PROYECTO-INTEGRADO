var express = require('express');
var router = express.Router();

// Require de los controladores de users
const indexController = require("../controllers/indexController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("login", { tituloWeb: "Pagina Principal", error: false });
  } else {
    next();
  }
});

/* GET,POST,PUT,DELETE */

router.get('/', indexController.index);

module.exports = router;
