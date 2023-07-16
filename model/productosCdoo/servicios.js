const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const Servicios = db.define('Servicios', {
  //  id_servicio: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  servicio: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Servicios;
