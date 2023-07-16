const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getTrabajo, crearTipoTrabajo, actualizarTipoTrabajo, eliminarTipoTrabajo } = require('../controller/tipoTrabajo');





// Rutas que pasan por validacion token

router.use(validarJWT); // esto valida el token a todas las rutas que estan por debajo de el 

// obtener tipo de tarabajo
router.get('/p/', getTrabajo);


// Crear un nuevo Evento
router.post(
    '/p/',
    [
        check('t_trabajo', ' t_trabajo es obligatorio').not().isEmpty(),validarCampos
         
    ],
    crearTipoTrabajo);


// Actualñizar eventos 
router.put('/p/:id', actualizarTipoTrabajo);


//Boprrar Evento 
router.delete('/p/:id', eliminarTipoTrabajo );

module.exports = router;