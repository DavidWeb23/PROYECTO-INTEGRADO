const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const testunico2Schema = new Schema({
    correoAlumno: String,
    tema: String,
    pregunta: [String],
    respuesta1: [String],
    unicaopcionfinal:[String],
    idoriginal:String,
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Testunico2 = mongoose.model("Testunico2", testunico2Schema, "testunico2");

module.exports = Testunico2;