const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 

const ProductoCristal = db.define('ProductoCristal', {
  //  id_p_cristal: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  nombre_cristal: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = ProductoCristal;
