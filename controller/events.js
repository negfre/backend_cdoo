const { response } = require("express");
const eventsModel  = require("../model/Events");
const UserModel  = require("../model/usuarios");




//const { Model } = require("sequelize");
//const db = require('../database/config');

// Obtener eventos
const getEventos = async (req, res = response) => {
    //await eventsModel.belongsTo(User);
    
    try {
      const eventos = await eventsModel.findAll();
      res.json({
        ok: true,
        eventos,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador',
      });
    }
  };
  
 
  


//Crear un eventooooooooooo---------------


//  const crearEvento = async (req, res = response) => {
//     //const evento = new Evento(req.body);
    
//    try {
//      // Asegurarse de que la tabla exista
//      await eventsModel.sync();
    

//      const { title, notes, start, end, user } = req.body;
//      const userId = user.uid;
// //     const usuarAutenticado = req.user;
//    console.log(userId);
//      const eventoGuardado = await eventsModel.create({
//        title,
//        notes,
//        start,
//        end,
//        user: userId
//       // user: usuarAutenticado.id
//      });

//      res.json({
//        ok: true,
//        evento: eventoGuardado,
//      });
//    } catch (error) {
//      console.log(error);
//      res.status(500).json({
//        ok: false,
//        msg: "Hable con el administrador",
//      });
//    }
//  };

//Crear evento
const crearEvento = async (req, res = response) => {
    const eventos = new eventsModel(req.body);

    try {
        //await eventsModel.sync();  //crea la tabla si no existe
      eventos.user = req.uid; // <-- aquí se agrega el campo user con el valor del uid
      const eventoGuardado = await eventos.save();
      res.json({
        ok: true,
        evento: eventoGuardado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  };
  


// Actualizar evento


// const actualizarEvento = async (req, res = response) => {
// const eventos = new eventsModel(req.body);
// const eventoId = req.params.id;
// const userConectado = req.uid; //usuario conectado
// const userDuenoEvento = UserModel.user //usuario dueño del evento
// //eventos.user = req.uid; // usuario que esta conectado
// //console.log(eventos.user);
// //console.log(eventoId);
// console.log(userConectado);
// console.log(userDuenoEvento);

// const { title, notes, start, end } = req.body;

//             try {
//                 // Buscar el evento por ID
//                 const evento = await eventsModel.findByPk(eventoId);
//                 //console.log(evento);
//                 // Verificar si el evento existe
//                 if (!evento) {
//                 return res.status(404).json({ error: 'Evento no encontrado' });
//                 }

//                 // Verificar si el usuario que quiere actualizar el evento es el que lo creó
//                 if (userConectado !== userDuenoEvento) {
//                 return res.status(403).json({ error: 'No tienes permiso para actualizar este evento' });
//                 }

//                 // Actualizar el evento
//                 evento.title = title;
//                 evento.notes = notes;
//                 evento.start = start;
//                 evento.end = end;
//                 await evento.save();

//                 // Buscar el usuario del evento
//                 const usuario = await UserModel.findByPk(evento.user);

//                 // Enviar la respuesta
//                 res.json({
//                 evento,
//                 usuario
//                 });

            
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({
//             ok: false,
//             msg: "Hable con el administrador",
//         })


//         };
//     }



const actualizarEvento = async (req, res = response) => {
    //const eventos = new eventsModel(req.body);
    const eventoId = req.params.id;
    const userConectado = req.uid; // usuario conectado
    const evento = await eventsModel.findByPk(eventoId);
  
    try {
      // Verificar si el evento existe
      if (!evento) {
        return res.status(404).json({ error: "Evento no encontrado" });
      }
  
      // Verificar si el usuario que quiere actualizar el evento es el que lo creó
      if (userConectado !== evento.user) {
        return res
          .status(403)
          .json({ error: "No tienes permiso para actualizar este evento" });
      }
  
      // Actualizar el evento
      await evento.update(req.body);
  
      // Buscar el usuario del evento
      const usuario = await UserModel.findByPk(evento.user);
  
      // Enviar la respuesta
      res.json({
        msg: "Evento Actualizado correctamente correctamente", 
        evento,
        usuario,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  };







//Eliminar Evento

const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const userConectado = req.uid; // usuario conectado
  
    try {
      // Buscar el evento por ID
      const evento = await eventsModel.findByPk(eventoId);
  
      // Verificar si el evento existe
      if (!evento) {
        return res.status(404).json({ error: "Evento no encontrado" });
      }
  
      // Verificar si el usuario que quiere eliminar el evento es el que lo creó
      if (userConectado !== evento.user) {
        return res
          .status(403)
          .json({ error: "No tienes permiso para eliminar este evento" });
      }
  
      // Eliminar el evento
      await evento.destroy();
  
      // Enviar la respuesta
      res.json({ msg: "Evento eliminado correctamente" });


    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  };
  






module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
