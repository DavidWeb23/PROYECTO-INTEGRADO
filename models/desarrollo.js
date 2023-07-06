const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const desarrolloSchema = new Schema({
    tema: String,
    pregunta: String,
    duracion: Number,
});

// Creación del modelo
const Desarrollo = mongoose.model("Desarrollo", desarrolloSchema, "desarrollo");

module.exports = Desarrollo;