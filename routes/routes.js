const router = require('express').Router();
const express = require('express');
const useExpress = express();
const bodyParser = require('body-parser');

useExpress.use(bodyParser.json());
useExpress.use(bodyParser.urlencoded({extended:true}));



const Cliente = require('../models/Clientes');
const Registro = require('../models/Registros');
const findByIdAndUpdate = require('../models/Clientes');



    router.get('/',(req, res) => {
        res.render('Login');
    });

    router.get('/Login', (req,res) =>{
        res.render('Login');
    });

    router.get('/Index', (req, res) =>{
        res.render('Index');
    });

    router.get('/ClientesRegistro', (req, res) =>{
        // console.log(clientes);
        res.render('ClientesRegistro')
    });



    //CONTROLADORES

    //INSERTAR
    router.get('/Clientes', async (req, res) =>{
        const clientes = await Cliente.find();
        res.render('Clientes', {clientes: clientes})
        // res.json(clientes);
    });

   
    //SELECIONA EL PRODUCTO PARA EDITAR Y LO MUESTRA EN LA VISTA
    router.get('/ClientesEditar/:id', async (req, res) =>{
        const editar =  await Cliente.findById(req.params.id);
       // console.log(clientes);
       res.render('ClientesEditar', {editar: editar})
       
   });
     
    //ACTUALIZA 
    router.post('/ClientesEditar/Guardar/:id', (req,res) => {
        const idCliente = (req.params.id);
        console.log(idCliente);
        console.log(req.body.nombreClienteEditar);
        Cliente.findOneAndUpdate({_id: idCliente}, {
            nombreCliente: req.body.nombreClienteEditar,
            cedulaCliente: req.body.cedulaClienteEditar,
            direccionCliente: req.body.direccionClienteEditar,
            celularCliente: req.body.celularClienteEditar,
            correoCliente: req.body.correoClienteEditar,
        },{new: false}, (error, usuario) => {
            // console.log('Error: ' + error);
            // console.log('idCliente: ' + idCliente);
            // console.log('Usuario: ' + usuario);
            res.redirect('/Clientes');
        })
    })

  //ELIMINAR
    router.post('/ClientesEliminar/:id', async (req,res) => {
         await Cliente.remove({ _id: req.params.id }, function(err, cliente) {
            if (err)
                res.send(err);
            else
                // res.json({ message: 'El cliente se ha eliminado' });
                res.redirect('/Clientes')
        });
});

   
    router.post('/ClientesRegistro',  async(req,res) =>{
        const newCliente = new Cliente(req.body);
        await newCliente.save();
            res.redirect('/Clientes');
    });
    

    //Registro Nuevo Usuario
    router.post('/Login',  async(req,res) =>{
        const newCliente = new Registro(req.body);
        await newCliente.save();
            res.redirect('/');
    });

module.exports = router;
