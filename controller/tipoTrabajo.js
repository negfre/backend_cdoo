const TipoTrabajo = require('../model/productosCdoo/tipoTrabajo');
const {response} = require('express');




//obtener tipo de trabajo

const getTrabajo = async (req, res = response) => {
  //await eventsModel.belongsTo(User);
  
  try {
    const tipoTrabajo = await TipoTrabajo.findAll();
    res.json({
      ok: true,
      tipoTrabajo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};






// Crear un nuevo tipo de trabajo
const crearTipoTrabajo = async (req, res = response) => {
  try {
    const { t_trabajo, descripcion } = req.body;
    await TipoTrabajo.sync();
    const tipoTrabajo = await TipoTrabajo.create({
      t_trabajo,
      descripcion
    });
    res.status(201).json({ 
        msg: 'Tipo de trabajo creado satisfactoriamente',
        tipoTrabajo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al crear el tipo de trabajo' });
  }
};

// Actualizar un tipo de trabajo existente
const actualizarTipoTrabajo = async (req, res = response) => {
  try {
    const { id_t_trabajo } = req.params;
    const { t_trabajo, descripcion } = req.body;
    const tipoTrabajo = await TipoTrabajo.findOne({ where: { id_tipo_trabajo } });
    if (!tipoTrabajo) {
      return res.status(404).json({ msg: 'Tipo de trabajo no encontrado' });
    }
    tipoTrabajo.t_trabajo = t_trabajo;
    tipoTrabajo.descripcion = descripcion;
    await tipoTrabajo.save();
    res.json({ msg: 'Tipo de trabajo actualizado satisfactoriamente', tipoTrabajo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al actualizar el tipo de trabajo' });
  }
};

// Eliminar un tipo de trabajo existente
const eliminarTipoTrabajo = async (req, res = response) => {
  try {
    const { id_t_trabajo } = req.params;
    const tipoTrabajo = await TipoTrabajo.findOne({ where: { id_t_trabajo } });
    if (!tipoTrabajo) {
      return res.status(404).json({ msg: 'Tipo de trabajo no encontrado' });
    }
    await tipoTrabajo.destroy();
    res.json({ msg: 'Tipo de trabajo eliminado satisfactoriamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el tipo de trabajo' });
  }
};

module.exports = {
  getTrabajo,
  crearTipoTrabajo,
  actualizarTipoTrabajo,
  eliminarTipoTrabajo
  
};