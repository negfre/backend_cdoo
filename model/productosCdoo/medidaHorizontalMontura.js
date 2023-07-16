const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 

const MedidaHorizontalMontura = db.define('MedidaHorizontalMontura', {
  //  id_mhm: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  medida_h: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: true
});

module.exports = MedidaHorizontalMontura;
