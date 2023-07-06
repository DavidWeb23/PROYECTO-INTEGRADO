const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const cortasSchema = new Schema({
    tema:String,
    pregunta1: String,
    respuesta1: String,
    pregunta2: String,
    respuesta2: String,
    pregunta3: String,
    respuesta3: String,
    pregunta4: String,
    respuesta4: String,
    pregunta5: String,
    respuesta5: String,
    pregunta6: String,
    respuesta6: String,
    pregunta7: String,
    respuesta7: String,
    pregunta8: String,
    respuesta8: String,
    pregunta9: String,
    respuesta9: String,
    pregunta10: String,
    respuesta10: String,
    
    
});

// Creación del modelo
const Cortas = mongoose.model("Cortas", cortasSchema, "cortas");

module.exports = Cortas;