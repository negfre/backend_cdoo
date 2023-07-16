const { response } = require('express');
const ProductModel = require('../model/productos');
const UserModel  = require("../model/usuarios");

// Obtener todos los productos
const getProductos = async (req, res = response) => {
  try {
    const productos = await ProductModel.findAll();
    res.json({
      ok: true,
      msg: 'Obtener productos',
      productos
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado, por favor hable con el administrador'
    });
  }
}



// Obtener un producto por ID
const getProductoId = async (req, res = response) => {
  const productoId = req.params.id;
  
  try {
    // Buscar el producto por id
    const producto = await ProductModel.findByPk(productoId);
    
    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Enviar la respuesta
    res.json({
      producto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};







// // Crear un nuevo producto
 const crearProducto = async (req, res = response) => {
    const productos = new ProductModel(req.body);
   try {
    productos.usuario = req.uid;
    await ProductModel.sync();
    const productoGuardado = await productos.save();
     
    //     const { nombre_paciente, cod_cliente, precio, tipo_trabajo, tipo_formula, esfera_oiz, cilindro_oiz, eje_oiz, adicion_oiz, dnp_lejos_oiz, dnp_alt_oiz, esfera_ode, cilindro_ode, eje_ode, adicion_ode, dnp_lejos_ode, dnp_alt_ode, tipo_cristal, medida_horizontal, medida_vertical, medida_puente, tipo_montura, servicios, color, porcentaje_coloracion, tipo_coloracion,fecha_Solicitud, fecha_entrega, usuario_id, obs } = req.body;
//     const producto = new ProductModel({ nombre_paciente, cod_cliente, precio, tipo_trabajo, tipo_formula, esfera_oiz, cilindro_oiz, eje_oiz, dnp_lejos_oiz, dnp_alt_oiz, esfera_ode, cilindro_ode, eje_ode, dnp_lejos_ode, dnp_alt_ode, tipo_cristal, medida_horizontal, medida_vertical, medida_puente });
//     await producto.save();
     res.json({
       ok: true,
//       msg: 'Crear producto',
      producto: productoGuardado

     });
   } catch (error) {
     console.log(error);
     res.status(500).json({
       ok: false,
       msg: 'Error inesperado, por favor hable con el administrador'
     });
   }
 };

//Crear Producto

// const crearProducto = async (req, res = response) => {
//     try {
//       ProductModel.user = req.uid;
//       const {
//         nombre_paciente, cod_cliente, precio, tipo_trabajo, tipo_formula, esfera_oiz, cilindro_oiz, eje_oiz, adicion_oiz, dnp_lejos_oiz, dnp_alt_oiz, esfera_ode, cilindro_ode, eje_ode, adicion_ode, dnp_lejos_ode, dnp_alt_ode, tipo_cristal, medida_horizontal, medida_vertical, medida_puente, tipo_montura, servicios, color, porcentaje_coloracion, tipo_coloracion,fecha_Solicitud, fecha_entrega, usuario_id, obs
//       } = req.body;
  
//       // Crea un nuevo producto con los datos recibidos en el body
//       const producto = new ProductModel({
//         nombre_paciente, cod_cliente, precio, tipo_trabajo, tipo_formula, esfera_oiz, cilindro_oiz, eje_oiz, adicion_oiz, dnp_lejos_oiz, dnp_alt_oiz, esfera_ode, cilindro_ode, eje_ode, adicion_ode, dnp_lejos_ode, dnp_alt_ode, tipo_cristal, medida_horizontal, medida_vertical, medida_puente, tipo_montura, servicios, color, porcentaje_coloracion, tipo_coloracion,fecha_Solicitud, fecha_entrega, usuario_id, obs
//       });
  
//       // Guarda el nuevo producto en la base de datos
//       await producto.save();
  
//       // Envía una respuesta indicando que el producto fue creado exitosamente
//       res.status(201).json({
//         ok: true,
//         msg: 'Producto creado exitosamente',
//         producto
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         ok: false,
//         msg: 'Error inesperado, por favor hable con el administrador'
//       });
//     }
//   }
  











// Actualizar un producto

const actualizarProducto = async (req, res = response) => {
  const productoId = req.params.id;
  const usuarioConectado = req.uid;
  const producto = await ProductModel.findByPk(productoId);

  try {
    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Verificar si el usuario que quiere actualizar el producto es el que lo creó
    if (usuarioConectado !== producto.usuario) {
      return res
        .status(403)
        .json({ error: "No tienes permiso para actualizar este producto" });
    }

    // Actualizar el producto
    await producto.update(req.body);

    // Buscar el usuario del producto
    const usuario = await UserModel.findByPk(producto.usuario);

    // Enviar la respuesta
    res.json({
      msg: "Producto actualizado correctamente",
      producto,
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






// const actualizarProducto = async (req, res = response) => {
//     const productoId = req.params.id;
  
//     try {
//       const productoDB = await ProductModel.findById(productoId);
  
//       if (!productoDB) {
//         return res.status(404).json({
//           ok: false,
//           msg: 'No existe un producto con ese id',
//         });
//       }
  
//       // Actualizaciones
//       const {
//         nombre_paciente,
//         cod_cliente,
//         precio,
//         tipo_trabajo,
//         tipo_formula,
//         esfera_oiz,
//         cilindro_oiz,
//         eje_oiz,
//         dnp_lejos_oiz,
//         dnp_alt_oiz,
//         esfera_ode,
//         cilindro_ode,
//         eje_ode,
//         dnp_lejos_ode,
//         dnp_alt_ode,
//         tipo_cristal,
//         medida_horizontal,
//         medida_vertical,
//         medida_puente,
//       } = req.body;
  
//       productoDB.nombre_paciente = nombre_paciente;
//       productoDB.cod_cliente = cod_cliente;
//       productoDB.precio = precio;
//       productoDB.tipo_trabajo = tipo_trabajo;
//       productoDB.tipo_formula = tipo_formula;
//       productoDB.esfera_oiz = esfera_oiz;
//       productoDB.cilindro_oiz = cilindro_oiz;
//       productoDB.eje_oiz = eje_oiz;
//       productoDB.dnp_lejos_oiz = dnp_lejos_oiz;
//       productoDB.dnp_alt_oiz = dnp_alt_oiz;
//       productoDB.esfera_ode = esfera_ode;
//       productoDB.cilindro_ode = cilindro_ode;
//       productoDB.eje_ode = eje_ode;
//       productoDB.dnp_lejos_ode = dnp_lejos_ode;
//       productoDB.dnp_alt_ode = dnp_alt_ode;
//       productoDB.tipo_cristal = tipo_cristal;
//       productoDB.medida_horizontal = medida_horizontal;
//       productoDB.medida_vertical = medida_vertical;
//       productoDB.medida_puente = medida_puente;
  
//       await productoDB.save();
  
//       res.json({
//         ok: true,
//         producto: productoDB,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         ok: false,
//         msg: 'Error al actualizar el producto',
//       });
//     }
//   };
  



//Eliminar producto
//   const eliminarProducto = async (req, res = response) => {
//     const { id } = req.params;

//     try {
//         // Verificar si el producto existe
//         const productoDB = await Producto.findById(id);
//         if (!productoDB) {
//             return res.status(404).json({
//                 ok: false,
//                 msg: 'No se encontró el producto',
//             });
//         }

//         // Eliminar el producto
//         await Producto.findByIdAndDelete(id);

//         res.json({
//             ok: true,
//             msg: 'Producto eliminado',
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Error al eliminar producto',
//         });
//     }
// };


const eliminarProducto = async (req, res = response) => {
  const { id } = req.params;
  const userConectado = req.uid; // usuario conectado

  try {
    const producto = await ProductModel.findByPk(id);

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Verificar si el usuario que quiere eliminar el producto es el que lo creó
    if (userConectado !== producto.usuario) {
      return res
        .status(403)
        .json({ error: "No tienes permiso para eliminar este producto" });
    }

    // Eliminar el producto
    await producto.destroy();

    res.json({ msg: "Producto eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


module.exports = {
    getProductos, getProductoId, crearProducto, actualizarProducto, eliminarProducto   
  };