const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const desarrollo2Schema = new Schema({
    tema: String,
    pregunta: String,
    respuesta: String,
    duracion: Number,
    correoAlumno: String,
    nota: Number,
    observaciones: String,
});

// Creación del modelo
const Desarrollo2 = mongoose.model("Desarrollo2", desarrollo2Schema, "desarrollo2");

module.exports = Desarrollo2;