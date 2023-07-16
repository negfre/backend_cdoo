const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { obtenerPedidos, obtenerPedidoId, crearPedido, actualizarPedido, eliminarPedido } = require('../controller/pedidoCdoo');
//const ProductModel = require('../model/productos');
const router = Router();

// Rutas que pasan por validación token
router.use(validarJWT);

// Obtener todos los productos
router.get('/', obtenerPedidos);

// Obtener un producto por ID
router.get('/:id', obtenerPedidoId);




// Crear un nuevo producto
router.post(
  '/',
  [    check('nombre_paciente', 'El nombre del paciente es obligatorio').not().isEmpty(),
    validarCampos],
    crearPedido );


    //Actualizar producto   
    router.put('/:id', actualizarPedido);

    //Borrar Producto 
    router.delete('/:id', eliminarPedido );

    
module.exports = router;
   
