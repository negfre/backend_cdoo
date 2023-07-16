const { DataTypes } = require('sequelize');
const db = require('../../database/config'); 

const Esfera = db.define('esfera', {
  //  id_esfera: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  esfera: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Esfera;
