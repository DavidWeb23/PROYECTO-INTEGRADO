const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const cantarSchema = new Schema({
    area: String,
    tema: [String],
    duracion: Number,
});

// Creación del modelo
const Cantar = mongoose.model("Cantar", cantarSchema, "cantar");

module.exports = Cantar;