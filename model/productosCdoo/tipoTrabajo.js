const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const TipoTrabajo = db.define('tipoTrabajo', {
  //  id_t_trabajo: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  t_trabajo: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: true,
  underscored: true,
} 
);

module.exports = TipoTrabajo;
