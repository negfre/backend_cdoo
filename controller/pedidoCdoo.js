// Se importan los módulos y modelos necesarios
const { response } = require("express");
const Pedido = require('../model/pedidosCdoo/pedidos');
const Adicion = require('../model/productosCdoo/adicion');
const UserModel = require('../model/usuarios');
const TipoMontura = require('../model/productosCdoo/tipoMontura');
const Esfera = require('../model/productosCdoo/esfera');
const Cilindro = require('../model/productosCdoo/cilindro');
const Eje = require('../model/productosCdoo/eje');
const DnpAltura = require('../model/productosCdoo/dnpAltura');
const MedidaHorizontalMontura = require('../model/productosCdoo/medidaHorizontalMontura');
const MedidaVerticalMontura = require('../model/productosCdoo/medidaVerticalMontura');
const MedidaPuenteMontura = require('../model/productosCdoo/medidaPuenteMontura');
const Servicio = require('../model/productosCdoo/servicios');
const TipoTrabajo = require('../model/productosCdoo/tipoTrabajo');
const TipoFormula = require('../model/productosCdoo/tipoFormula');
const Color = require('../model/productosCdoo/color');
const PorcentajeColor = require('../model/productosCdoo/porcentajeColor');
const TipoColoracion = require('../model/productosCdoo/tipoColoracion');
const ProductoCristal = require('../model/productosCdoo/productoCristal');
//const { JsonWebTokenError } = require("jsonwebtoken");

// // Controlador para obtener todos los pedidos
 const obtenerPedidos = async (req, res) => {
  try {
     const pedidos = await Pedido.findAll();
     res.json(pedidos);
   } catch (error) {
         res.status(500).json({ error: 'Error al obtener los pedidos' });
   }
 };

// // Controlador para obtener un pedido por su ID
 const obtenerPedidoId = async (req, res) => {
   const { id } = req.params;
   try {
     const pedido = await Pedido.findByPk(id);
     if (!pedido) {
       return res.status(404).json({ error: 'Pedido no encontrado' });
     }
     res.json(pedido);
   } catch (error) {
     res.status(500).json({ error: 'Error al obtener el pedido' });
   }
 };



 

// Controlador para crear un nuevo pedido
const crearPedido = async (req, res = response) => {
    
    // Sincroniza las tablas de los modelos necesarios
      //  await UserModel.sync();
      //  await TipoMontura.sync();
      //  await Esfera.sync();
      //  await Cilindro.sync();
      //  await Eje.sync();
      //  await Adicion.sync();
      //  await DnpAltura.sync();
      //  await MedidaHorizontalMontura.sync();
      //  await MedidaVerticalMontura.sync();
      //  await MedidaPuenteMontura.sync();
      //  await Servicio.sync();
      //  await TipoTrabajo.sync();
      //  await TipoFormula.sync();
      //  await Color.sync();
      //  await PorcentajeColor.sync();
      //  await TipoColoracion.sync();
      //  await ProductoCristal.sync();
      //  await Pedido.sync();




    const pedidos = new Pedido(req.body);
    // const usuarioLogueado = new UserModel(req.body);
    const uid = req.uid
  try {

    pedidos.user_id = uid;
    console.log(pedidos.user_id);
    //console.log(pedidos.id_usuario);

    
    
    // Crea el pedido en la base de datos
    const pedidoGuadado = await pedidos.save();
    
    // const adicion = await Adicion.findByPk(req.body.id_adicion_izq);


        // Retorna la respuesta con el pedido creado
        res.json({
            ok : true,
            pedido: pedidoGuadado,
            adicion
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al crear el pedido' });
      }
    };
    


    // Controlador para actualizar un pedido
    const actualizarPedido = async (req, res) => {
      const { id } = req.params;
      const { id_usuario, /* otros campos */ } = req.body;
      try {
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
          return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        await pedido.update({
          id_usuario,
          /* otros campos */
        });
        res.json(pedido);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el pedido' });
      }
    };
    
    // Controlador para eliminar un pedido
    const eliminarPedido = async (req, res) => {
      const { id } = req.params;
      try {
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
          return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        await pedido.destroy();
        res.json({ message: 'Pedido eliminado correctamente' });
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el pedido' });
      }
    };
    
    module.exports = {
      obtenerPedidos,
      obtenerPedidoId,
      crearPedido,
      actualizarPedido,
      eliminarPedido
    };
    
