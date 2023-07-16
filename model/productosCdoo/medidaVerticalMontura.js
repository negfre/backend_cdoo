const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 

const MedidaVerticalMontura = db.define('MedidaVerticalMontura', {
  //  id_mvm: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  medida_v: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: true
});

module.exports = MedidaVerticalMontura;
