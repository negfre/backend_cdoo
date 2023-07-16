const { DataTypes } = require('sequelize');
const db = require('../../database/config');

const TipoMontura = db.define('TipoMontura', {
  //  id_t_montura: {
  //    type: DataTypes.INTEGER,
  //    primaryKey: true,
  //    autoIncrement: true
  //  },
  t_montura: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = TipoMontura;
