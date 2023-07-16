const { DataTypes, Sequelize } = require('sequelize');
const db = require('../../database/config');
const Pedido = require('../pedidosCdoo/pedidos');

const Adicion = db.define('adicion', {
    // id_adicion: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },
  adicion: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});



module.exports = Adicion;
