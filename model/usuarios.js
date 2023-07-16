const { DataTypes } = require('sequelize');
const db = require('../database/config');
//const Pedido = require('./pedidosCdoo/pedidos');

const UserModel = db.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
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
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direccion_envio: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING(20),
    defaultValue: 'USER',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true
});





module.exports = UserModel;

