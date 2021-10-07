const router = require('express').Router();
const express = require('express');
const useExpress = express();
const bodyParser = require('body-parser');

useExpress.use(bodyParser.json());
useExpress.use(bodyParser.urlencoded({extended:true}));



const Cliente = require('../models/Clientes');
const Registro = require('../models/Registros');
const { findByIdAndUpdate } = require('../models/Clientes');



    router.get('/',(req, res) => {
        res.render('Login');
    });

    router.get('/Login', (req,res) =>{
        res.render('Login');
    });

    router.get('/Index', (req, res) =>{
        res.render('Index');
    });

    router.get('/Clientes', async (req, res) =>{
        const clientes = await Cliente.find();
        res.render('Clientes', {clientes: clientes})
        // res.json(clientes);
    });

    router.get('/ClientesRegistro', (req, res) =>{
        // console.log(clientes);
        res.render('ClientesRegistro')
    });

    router.get('/ClientesEditar/:id', async (req, res) =>{
         const editar =  await Cliente.findById(req.params.id);
        // console.log(clientes);
        res.render('ClientesEditar', {editar: editar})
        
    });

     router.post('/ClientesEditar/Guardar/:id', (req,res) => {
         const idCliente = (req.params.id);
         
        
         console.log(idCliente);
         Cliente.findByIdAndUpdate(idCliente, {
              nombre: req.body.nombreClienteEditar,
              cedula: req.body.cedulaClienteEditar,
              direccion: req.body.direccionClienteEditar,
              celular: req.body.celularClienteEditar,
              correo: req.body.correoClienteEditar
         }, (error, usuario) => {
             console.log('Error: ' + error);
             console.log('idCliente: ' + idCliente);
             console.log('Usuario: ' + usuario);
             res.redirect('/Clientes');
         })
     })

    // router.post('/ClientesEditar/Guardar/:id',(req, res) =>{
    //     let id = req.params.id;
        
    //     Cliente.findByIdAndUpdate(id, {
    //         nombreCliente: req.body.nombreCliente,
    //         cedulaCliente: req.body.cedulaCliente,
    //         direccionCliente: req.body.direccionCliente,
    //         celularCliente: req.body.celularCliente,
    //         correoCliente: req.body.correoCliente
    //     }, (err, result) =>{
    //         if(err){
    //             res.json({ message: err.message, type: 'danger'});
    //         }else{
    //             req.session.message = {
    //                 type: 'succes',
    //                 message: 'User Updated Successfully!',
    //             };
    //             res.redirect('/Clientes');
    //         }
    //     })
    // })

  
    router.get('/ClientesBorrar/:id', (req,res) => {
        const eliminarCliente = (req.doby._id);
        Cliente.findOneAndRemove(eliminarCliente, function(error){
            if (error){
              res.send(error);
            }else{
                res.redirect('/Clientes')
            }
        }) 
    })


    router.post('/ClientesRegistro',  async(req,res) =>{
        const newCliente = new Cliente(req.body);
        await newCliente.save();
            res.redirect('/Clientes');
    });

    router.post('/Login',  async(req,res) =>{
        const newCliente = new Registro(req.body);
        await newCliente.save();
            res.redirect('/');
    });

module.exports = router;
