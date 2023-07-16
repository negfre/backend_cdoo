/*
Ruta events
'/api/events'
*/ 
const {Router} = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controller/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();


// Ruitas que pasan por valicacion token

router.use(validarJWT); // esto valida el token a todas las rutas que estan por debajo de el 

// obtener eventos
router.get('/', getEventos);


// Crear un nuevo Evento
router.post(
    '/',
    [
        check('title', ' el titulo es obligatorio').not().isEmpty(),
        check('start', ' Fecha de inicio es obligatorio').custom(isDate),
        check('end', ' Fecha de finalizacion es obligatorio').custom(isDate),
        validarCampos 
    ],
    crearEvento);


// Actualñizar eventos 
router.put('/:id', actualizarEvento);


//Boprrar Evento 
router.delete('/:id', eliminarEvento );

module.exports = router;