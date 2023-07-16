const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const Color = db.define('Color', {
  //  id_color: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Color;
