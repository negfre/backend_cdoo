/*Rutas de usuarios /auth
host + /api/auth
 */

const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { crearUsuarios, loginUsuarios, revalidarUsuarios, perfil} =require('../controller/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarToken } = require('../middlewares/validarToken');




// Rutas



//registrar usuarios 
  router.post (
     '/new',
      [//middleware
        check('nombre', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'debe ser un email').isEmail(),
        check('apellido', 'el apellidos es requerido').not().isEmpty(),
        check('password', 'debe tener al menos 6 caracteres').isLength({min: 6 }),
        
        check('nombre_optica', 'el nombre_optica es requerido').not().isEmpty(), 
        check('direccion_fiscal', 'la direccion_fiscal es requerido').not().isEmpty(), 
        check('rif', 'el rif es requerido').not().isEmpty(), 
        check('telefono', 'el telefono es requerido').not().isEmpty(), 
        check('direccion_envio', 'la direccion es requerida').not().isEmpty(), 
       validarCampos
     ],
     crearUsuarios );


//Logeo 

 router.post (
    '/', 
    [
        check('email', 'debe ser un email').isEmail(),
        check('password', 'debe tener al menos 6 caracteres').isLength({min: 6 }),
        validarCampos

    ],
     loginUsuarios );

router.get ('/renew', validarJWT, revalidarUsuarios);

router.get("/perfil", validarToken, perfil);

//router.post('/new2', createUser);
 module.exports = router;


