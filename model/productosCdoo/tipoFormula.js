const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 

const TipoFormula = db.define('tipoFormula', {
  //  id_t_formula: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  t_formula: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = TipoFormula;
