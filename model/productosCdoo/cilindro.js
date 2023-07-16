const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const Cilindro = db.define('Cilindro', {
  //  id_cilindro: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  cilindro: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Cilindro;
