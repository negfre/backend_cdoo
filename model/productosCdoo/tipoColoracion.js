const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const TipoColoracion = db.define('TipoColoracion', {
  //  id_t_coloracion: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  t_coloracion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = TipoColoracion;
