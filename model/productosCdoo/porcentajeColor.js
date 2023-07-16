const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const PorcentajeColor = db.define('PorcentajeColor', {
  //  id_porcentaje: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  porcentaje: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = PorcentajeColor;
