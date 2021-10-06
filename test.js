const mongoose = require('mongoose');

const Usuario = require('./database/Models/Usuario');

mongoose.connect('mongodb://localhost:27017/pos_db');

// Usuario.findById("", {
   
// },  (error, usuario) =>{
//     console.log(error,usuario)
// })

Usuario.find({
}, (error, usuarios) => {
    console.log(error, usuarios)
})