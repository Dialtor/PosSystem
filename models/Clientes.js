const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteModel = new Schema({
    nombreCliente: {
        type: String,
        required: 'El nombre del cliente es obligatorio',
    },
    cedulaCliente: {
        type: String,
        required: 'La cedula del cliente es obligatorio',
    },
    direccionCliente: {
        type: String,
        required: 'La direccion del cliente es obligatorio',
    },
    celularCliente: {
        type: String,
        required: 'El celular del cliente es obligatorio',
    },
    correoCliente: {
        type: String,
        required: 'El correo del cliente es requerido',
    },
});


module.exports = mongoose.model('clientes', ClienteModel);