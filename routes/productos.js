const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getProductos, getProductoId, crearProducto, actualizarProducto, eliminarProducto } = require('../controller/productos');
//const ProductModel = require('../model/productos');



const router = Router();

// Rutas que pasan por validación token
router.use(validarJWT);

// Obtener todos los productos
router.get('/', getProductos);

// Obtener un producto por ID
router.get('/:id', getProductoId);

// Crear un nuevo producto
router.post(
  '/',
  [
    check('nombre_paciente', 'El nombre del paciente es obligatorio').not().isEmpty(),
    // check('cod_cliente', 'El código del cliente es obligatorio').not().isEmpty(),
    // check('precio', 'El precio es obligatorio').not().isEmpty(),
    // check('tipo_trabajo', 'El tipo de trabajo es obligatorio').not().isEmpty(),
    // check('tipo_formula', 'El tipo de fórmula es obligatorio').not().isEmpty(),
    // check('esfera_oiz', 'La esfera del ojo izquierdo es obligatoria').not().isEmpty(),
    // check('cilindro_oiz', 'El cilindro del ojo izquierdo es obligatorio').not().isEmpty(),
    // check('eje_oiz', 'El eje del ojo izquierdo es obligatorio').not().isEmpty(),
    // check('dnp_lejos_oiz', 'La DNP para lejos del ojo izquierdo es obligatoria').not().isEmpty(),
    // check('dnp_alt_oiz', 'La DNP para altura del ojo izquierdo es obligatoria').not().isEmpty(),
    // check('esfera_ode', 'La esfera del ojo derecho es obligatoria').not().isEmpty(),
    // check('cilindro_ode', 'El cilindro del ojo derecho es obligatorio').not().isEmpty(),
    // check('eje_ode', 'El eje del ojo derecho es obligatorio').not().isEmpty(),
    // check('dnp_lejos_ode', 'La DNP para lejos del ojo derecho es obligatoria').not().isEmpty(),
    // check('dnp_alt_ode', 'La DNP para altura del ojo derecho es obligatoria').not().isEmpty(),
    // check('tipo_cristal', 'El tipo de cristal es obligatorio').not().isEmpty(),
    // check('medida_horizontal', 'La medida horizontal es obligatoria').not().isEmpty(),
    // check('medida_vertical', 'La medida vertical es obligatoria').not().isEmpty(),
    // check('medida_puente', 'La medida del puente es obligatoria').not().isEmpty(),
    validarCampos],
    crearProducto);
    //Actualizar producto   
    router.put('/:id', actualizarProducto);

    //Borrar Producto 
    router.delete('/:id', eliminarProducto );

    
module.exports = router;
   
