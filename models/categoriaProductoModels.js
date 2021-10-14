const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaProductoModels = new Schema({
    NombreCategoria: {
        type: String,
        required: 'La categoría del producto es necesaria',
    },
});
module.exports = mongoose.model('categoria', categoriaProductoModels);