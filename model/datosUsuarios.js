const { DataTypes } = require('sequelize');
const db = require('../database/config');

const DatosUsuarios = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre_optica: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  direccion_fiscal: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rif: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direccion_envio: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = DatosUsuarios;

