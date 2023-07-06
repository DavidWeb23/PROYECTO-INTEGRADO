const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const mensajeSchema = new Schema({
    correoAlumno: String,
    titulo: String,
    mensaje: String,
});

// Creación del modelo
const Mensaje = mongoose.model("Mensaje", mensajeSchema, "mensaje");

module.exports = Mensaje;