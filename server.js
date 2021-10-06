const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');

// initializations
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pos_db');




// settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(4000, () =>{
    console.log('Aplicación Funcionando en el puerto: 4000');
});




// router.get('/', (req,res) =>{
//     // res.sendFile(path.resolve(__dirname, './views/login.ejs'));
    
//     res.render('login');
// })

// app.get('/login', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './views/login.html'));
    
//    // res.render('./views/layouts/');
// })

// app.get('/Index2', (req,res) =>{
//      res.sendFile(path.resolve(__dirname, './views/index2.html'));
     
//     // res.render('./views/layouts/');
// })
// app.get('/Clientes', async (req,res) =>{

//     const clientes = await Usuario.find({});
   
//     console.log(clientes);

//      res.render('./views/Clientes.ejs', {
//      clientes: clientes
//       });

//     // res.json(clientes);


//      //res.sendFile(path.resolve(__dirname, './views/Clientes.html'));
// })
// app.get('/ClientesRegistro', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './views/ClientesRegistro.html'));
// })
// app.get('/ClientesEditar.html', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './views/ClientesEditar.html'));
// })
// app.get('/Productos', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './views/Productos.html'));
// })


// app.post('/ClientesRegistro/Guardar', (req,res) =>{
//     Usuario.create(req.body, (error, usuario) =>{
//         res.redirect('/Clientes');
//     })
// });

// app.post('/login/Guardar', (req,res) =>{
//     Registro.create(req.body, (error, usuario) =>{
//         res.redirect('/');
//     })
// });




