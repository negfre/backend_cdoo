const { DataTypes } = require('sequelize');
const db = require('../database/config');


const eventsModel = db.define('Evento', {
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING(100),
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER, // o DataTypes.INTEGER según el tipo de dato que uses para la clave primaria de la tabla de usuarios
    allowNull: false,
    references: {
      model: 'usuarios', // nombre de la tabla de usuarios como string
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

module.exports = eventsModel;

