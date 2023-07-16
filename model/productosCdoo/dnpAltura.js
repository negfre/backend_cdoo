const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const DnpAltura = db.define('DnpAltura', {
  //  id_altura: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = DnpAltura;
