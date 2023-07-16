const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 


const MedidaPuenteMontura = db.define('MedidaPuenteMontura', {
  //  id_mpm: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  medida_puente: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: true
});

module.exports = MedidaPuenteMontura;
