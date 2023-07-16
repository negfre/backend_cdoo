const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const Eje = db.define('Eje', {
  //  id_eje: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  eje: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Eje;
