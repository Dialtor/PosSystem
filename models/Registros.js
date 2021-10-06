'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroLoginSchema = new Schema({
    nombre:{
        type:String,
        required: 'El nombre es obligatorio',
    },
    correo:{
        type: String,
        required: 'El correo es requerido',
    },
    usuario: {
        type: String,
        required: 'El usuario es requerido',
    },
    password:{
        type: String,
        required: 'La contraseña es requerida',
        
        
    },

});


module.exports = mongoose.model('registros', RegistroLoginSchema);