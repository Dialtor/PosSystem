const router = require('express').Router();
const express = require('express');
const useExpress = express();
const bodyParser = require('body-parser');

useExpress.use(bodyParser.json());
useExpress.use(bodyParser.urlencoded({extended:true}));



const Cliente = require('../models/Clientes');
const Registro = require('../models/Registros');



    router.get('/',(req, res) => {
        res.render('login');
    });

    router.get('/login', (req,res) =>{
        res.render('login');
    })

    router.get('/index', (req, res) =>{
        res.render('index');
    })

    router.get('/Clientes', async (req, res) =>{
        const clientes = await Cliente.find();
        res.render('Clientes', {clientes: clientes})

        // res.json(clientes);
    })

    router.get('/ClientesRegistro', (req, res) =>{
        // console.log(clientes);
        res.render('ClientesRegistro')
       
    })

    router.get('/Perfil', async (req, res) =>{
        const perfiles =  await Registro.find();
    
        // console.log(clientes);
        res.render('perfil', {perfiles: perfiles})
       
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
