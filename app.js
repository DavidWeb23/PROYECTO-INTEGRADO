var createError = require('http-errors');
var express = require('express');
var path = require('path');
//Sanear frente a Inyecciones NOSQL
const mongoSanitize = require('express-mongo-sanitize');
var cookieParser = require('cookie-parser');
const session = require("express-session");
var logger = require('morgan');
require("dotenv").config();

// Conexión a la Base De Datos
var mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.q4mbecl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))



const indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');
const cortasRouter = require("./routes/cortas");
const tarjetasRouter = require("./routes/tarjetas");

const testunicoRouter = require("./routes/testunico");
const desarrolloRouter = require("./routes/desarrollo");
const cantarRouter = require("./routes/cantar");
const inicioRouter = require("./routes/inicio");
const perfilRouter = require("./routes/perfil");
const registroRouter = require("./routes/registro");
const enviarmensajeRouter = require("./routes/enviarmensaje");
const mensajesRouter = require("./routes/mensajes");
const registrousuarioRouter = require("./routes/registrousuario");
const tareasdesarrolloRouter = require("./routes/tareasdesarrollo");
const tareascortasRouter = require("./routes/tareascortas");
const tareastestunicoRouter = require("./routes/tareastestunico");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(mongoSanitize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: "Codigo Secreto",
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/desarrollo', desarrolloRouter);

app.use('/testunico', testunicoRouter);
app.use('/tarjetas', tarjetasRouter);
app.use('/cortas', cortasRouter);
app.use('/cantar', cantarRouter);
app.use('/users', usersRouter);
app.use("/perfil", perfilRouter);
app.use("/inicio", inicioRouter);
app.use("/enviarmensaje", enviarmensajeRouter);
app.use("/mensajes", mensajesRouter);
app.use("/registro", registroRouter);
app.use("/registrousuario", registrousuarioRouter);
app.use("/tareasdesarrollo", tareasdesarrolloRouter);
app.use("/tareascortas", tareascortasRouter);

app.use("/tareastestunico", tareastestunicoRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (req.session.cuenta) {
    res.render("error", { tituloWeb: "Registro de usuario", usuario: req.session.cuenta });
  } else {
    res.render("inicio", { tituloWeb: "Inicio de sesión", error: false });
  }
});

module.exports = app;
