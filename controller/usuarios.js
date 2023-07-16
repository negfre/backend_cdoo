const {response} = require('express');
const UserModel = require('../model/usuarios.js')
const bcrypt = require('bcryptjs');
const {generarJWT}  = require('../helpers/jwt.js');
const db = require('../database/config.js');
const jwt  = require("jsonwebtoken");


//Crear usuarios
  
    const crearUsuarios = async (req, res) => {
        await UserModel.sync();
        try {
            // Extraer los datos del body
            const { 
                nombre,
                apellido,
                email,
                password,
                nombre_optica,
                direccion_fiscal,
                rif,
                telefono,
                direccion_envio,
                createdAt,
                updatedAt
              } = req.body;

            // Verificar si el usuario ya existe en la base de datos
            let usuario = await UserModel.findOne({ where: { email } });
            if (usuario) {
            return res.status(400).json({ ok:false, msg: 'El usuario ya existe' });
            }

            // Encriptar la contraseña
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Crear un nuevo usuario
            await UserModel.sync();
            usuario = await UserModel.create({
            nombre,
            apellido,
            email,
            password: hashedPassword,
            nombre_optica,
            direccion_fiscal,
            rif,
            telefono,
            direccion_envio,
            createdAt,
            updatedAt
            
            });

            // Generar el token JWT
            const payload = { uid: usuario.id_usuario, nombre: usuario.nombre, apellido: usuario.apellido };
            const token = await generarJWT(payload);
                
            res.json({ //este es el mensaje de respuesta al usuario
                ok: true,
                msg: 'Usuario creado satisfactoriamente',
                 uid: usuario.id_usuario,
                 nombre: usuario.nombre,
                 apellido: usuario.apellido,
                 email: usuario.email,
                 nombre_optica: usuario.nombre_optica,
                 direccion_fiscal: usuario.direccion_fiscal,
                 rif: usuario.rif,
                 telefono: usuario.telefono,
                 direccion_envio: usuario.direccion_envio,
                 token
            });
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ msg: 'Error al crear el usuario' });
                }
};




    // // lOGIN DE USUARIOS

const loginUsuarios = async(req, res = response)=>{
    const {email, password } = req.body;
        try {
            const usuario = await UserModel.findOne({ where: { email } });
            if (!usuario) {
            return res.status(400).json({
                 ok:false, 
                 msg: 'El Email no existe' 
                });
            }

             //Confirmar los passwords
            const validarPassword =  bcrypt.compareSync(password, usuario.password);
            if (!validarPassword) {
                return res.status(400).json({
                    ok: false,
                    msg: 'password incorrecto'
                })
            }
                        //generar nuestro token 
                // Generar el token JWT
                const payload = { uid: usuario.id_usuario, nombre: usuario.nombre };
                const token = await generarJWT(payload);

//devolver el token y los datos del usuario
            res.json({
                msg: 'Logueado correctamente',
                ok:true,
                token,
                uid: usuario.id_usuario,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                nombre_optica: usuario.nombre_optica,
                direccion_fiscal: usuario.direccion_fiscal,
                rif: usuario.rif,
                telefono: usuario.telefono,
                direccion_envio: usuario.direccion_envio
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ 
                ok: false,
                msg: "Server Error" });
        }
      
}

// //   REVALIDAR USUARIOS

// const revalidarUsuarios = async(req, res = response)=>{

//    const {uid, name} = req;
    
//     const payload = { uid: user.id, name: user.name };
//     const token = await generarJWT(payload);
//     //const token = await generarJWT( uid, name);
//     res.json ({
//         ok: true,
//         uid,
//         token,
//         name,
//         msg: 'renew token'
//     })
// };

const revalidarUsuarios = async (req, res = response) => {
    const { uid, nombre } = req;
    const payload = { uid, nombre };
    const token = await generarJWT(payload);
    res.json({
      ok: true,
      uid,
      nombre,
      token,
      msg: "Token renovado",
    });
  };



//   const perfil = async (req, res) => {
//     const { uid, nombre } = req;
   
//     res.json({
//       uid,
//       nombre
//       // Otras propiedades del perfil que deseas enviar en la respuesta
//     });
//   };
// const perfil = async (req, res) => {
//     const { uid, nombre } = req;
    
//     // Obtener el usuario desde la base de datos usando el uid
//     const usuario = await UserModel.findOne({ where: { id_usuario: uid } });
    
//     if (!usuario) {
//       return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
//     }
    
//     res.json({
//       uid,
//       nombre: usuario.nombre,
//       email: usuario.email,
//       // Otras propiedades del perfil que deseas enviar en la respuesta
//     });
//   };
  

  const perfil = async (req, res) => {
    const { usuario } = req;
  
    res.json(usuario);
  };



    // Controlador para actualizar un pedido
    // const actualizarPerfil = async (req, res) => {
    //     const { id } = req.params;
    //     const { id_usuario, /* otros campos */ } = req.body;
    //     try {
    //       const pedido = await Pedido.findByPk(id);
    //       if (!pedido) {
    //         return res.status(404).json({ error: 'Pedido no encontrado' });
    //       }
    //       await pedido.update({
    //         id_usuario,
    //         /* otros campos */
    //       });
    //       res.json(pedido);
    //     } catch (error) {
    //       res.status(500).json({ error: 'Error al actualizar el pedido' });
    //     }
    //   };




      

  
module.exports = {
    loginUsuarios,
    crearUsuarios,
    revalidarUsuarios,
    perfil
};