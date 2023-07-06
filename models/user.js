const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    ciudad: String,
    password: String,
    telefono: String,
    rol: String,
    metodoPago: String,
    grupoPago: String,
    fechaIngreso: String,
    numeroID: String,
});

// Creación del modelo
const Usuario = mongoose.model("Usuario", userSchema, "usuario");

module.exports = Usuario;
